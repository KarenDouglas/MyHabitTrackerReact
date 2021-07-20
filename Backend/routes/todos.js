const express = require('express');
const { v4: uuid } = require("uuid");
const { check }= require('express-validator');
const { validationResult }= require('express-validator');
const mongoose = require('mongoose');

const HttpError = require('../models/http-error');
const Todo = require('../models/todos-model');
const User = require('../models/users-model');

const router= express.Router();


router.get('/:uid', async (req, res, next)=>{
    const userId = req.params.uid;
  let userWithTodos;
try{
    userWithTodos= await User.findById(userId).populate("todos")
}catch(err){
     new HttpError('Could not fetch Todos', 500);
    return next(new HttpError('Could not fetch Todos', 500));
}

if(!userWithTodos || userWithTodos.todos.length === 0){
    return next(error)
}
res.json({todos: userWithTodos.todos.map(todo => todo.toObject({setters: true}))});  
});

router.post('/', [check('text').not().isEmpty()], async (req, res, next)=>{
   const errors = validationResult(req);
   if(!errors.isEmpty()){
       console.log(errors);
       return next( new HttpError("Your todo is empty!!", 422));
   }
    const { text, completed, user}= req.body;
    const newTodo = new Todo({
        text,
        completed,
        user
    })
    let addUser;
    try {
        addUser = await User.findById(user);
    } catch(err) {
        const error = new HttpError('adding todo failed', 500);
        return next(error);
    }

    if(!addUser){ 
        const error = new HttpError('Could not find user', 404);
        return next(error)
    }

    try{
       const sess = await mongoose.startSession();
       sess.startTransaction();
       await newTodo.save({session: sess});
       addUser.todos.push(newTodo);
       await addUser.save({session: sess});
       await sess.commitTransaction();
    }catch(err){
        const error = new HttpError(
            "your new todo failed to post :(",
            500
        );
        return next(error);
    }
  
    
    res.status(201).json({ todos: newTodo})
})

router.patch('/:id', async(req, res, next) => {
    const { completed }= req.body;
    const todoId= req.params.id;
   
    let todo;
    try{
        todo = await Todo.findById(todoId);
    }catch(err){
        const error = new HttpError("could not update todo", 500);
        return next(error);
    }

    todo.completed= completed;
    try{
        await todo.save();
    }catch (err){
        const error = new HttpError("could not update todo", 500);
        return next(error);
    }
    
    res.status(200).json({ todos: todo.toObject({getters: true}) })
})

router.delete('/:id', async(req, res, next) => {
    const todoId = req.params.id;

    let todo;
    try{
        todo = await Todo.findById(todoId).populate('user');

    } catch(err){
        const error = new HttpError('Could not delete todo', 500);
        return next(error);
    }
    if(!todo){
        const error = new HttpError('Could not find todo', 404);
        return next(error);
    }

    try{
        const sess = await mongoose.startSession();
        sess.startTransaction();
        await todo.remove({session: sess});
        todo.user.todos.pull(todo);
        await todo.user.save({session: sess});
        await sess.commitTransaction();
    }catch (err){
        const error = new HttpError('Could not delete todo', 500);
        return next(error);
    }

    res.status(200).json ({message:" todo has been deleted."});
   
})

module.exports = router;
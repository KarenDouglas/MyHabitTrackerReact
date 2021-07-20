const express = require('express')
const { v4: uuid } = require("uuid");
const { check }= require('express-validator');
const { validationResult }= require('express-validator');
const mongoose = require('mongoose');

const HttpError = require('../models/http-error');
const Habit = require('../models/habits-model')
const User = require('../models/users-model');


const router= express.Router();


router.get('/:uid', async (req, res, next)=>{
    const userId = req.params.uid;
    let userWithHabits;
    try{
        userWithHabits= await User.findById(userId).populate("habits")
    }catch(err){
         new HttpError('Could not fetch Habits', 500);
        return next(new HttpError('Could not fetch Habits', 500));
    }
    
    if(!userWithHabits || userWithHabits.habits.length === 0){
        return next(error)
    }
    res.json({todos: userWithHabits.habits.map(habit => habit.toObject({setters: true}))});
});

router.post('/', [check('text').not().isEmpty()], async(req, res, next)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        console.log(errors);
        return next( new HttpError("Your habit is empty!!", 422));
    }
    const { text, streak, dailyStreak, user }= req.body;
    const newHabit = new Habit({
       text,
       streak,
       dailyStreak,
       user
    })

    let addUser;
    try {
        addUser = await User.findById(user);
    } catch(err) {
        const error = new HttpError('adding habit failed', 500);
        return next(error);
    }

    if(!addUser){ 
        const error = new HttpError('Could not find user', 404);
        return next(error)
    }
    try{
        const sess = await mongoose.startSession();
        sess.startTransaction();
        await newHabit.save({session: sess});
        addUser.habits.push(newHabit);
        await addUser.save({session: sess});
        await sess.commitTransaction();
    }catch(err){
        const error = new HttpError(
            "your new habit failed to post :(",
            500
        );
        return next(error);
    }
  
    
    res.status(201).json({ habits: newHabit})
})

router.patch('/:id', async (req, res, next) => {
    const { streak, dailyStreak }= req.body;
    const habitId= req.params.id;

    let habit;
    try{
        habit = await Habit.findById(habitId);
    }catch(err){
        const error = new HttpError("could not update habit", 500);
        return next(error);
    }



     habit.streak = streak;
     habit.dailyStreak = dailyStreak;

     try{
        await habit.save();
    }catch (err){
        const error = new HttpError("could not update habit", 500);
        return next(error);
    }
    
    res.status(200).json({ habits: habit.toObject({getters: true}) })
    

    
})

router.delete('/:id', async (req, res, next) => {
    const habitId = req.params.id;
    let habit;
    try{
        habit = await Habit.findById(habitId).populate('user')

    } catch(err){
        const error = new HttpError('Could not delete habit', 500);
        return next(error);
    }
    if(!habit){
        const error = new HttpError('Could not find habit', 404);
        return next(error);
    }
    try{
        const sess = await mongoose.startSession();
        sess.startTransaction();
        await habit.remove({session: sess});
        habit.user.habits.pull(habit);
        await habit.user.save({session: sess});
        await sess.commitTransaction();
    }catch (err){
        const error = new HttpError('Could not delete habit', 500);
        return next(error);
    }


    res.status(200).json ({message:" habit has been deleted."});
   
})

module.exports = router;
const express = require('express')
const { v4: uuid } = require("uuid");
const { check }= require('express-validator');
const { validationResult }= require('express-validator');

const HttpError = require('../models/http-error');
const User = require('../models/users-model');

const router= express.Router();


router.get('/', async (req, res, next)=>{
  let users;
  try{
    users= await User.find({}, 'userName email');
  }catch (err){
    const error = new HttpError('Fetching users failed, please try again.', 500);
    return next(error)
  }
  res.json({users: users.map(user => user.toObject({ getters: true }) )});
});

router.post('/signup',[check('userName').not().isEmpty(), check('password').not().isEmpty()], async (req, res, next)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        console.log(errors);
        return next( new HttpError("Your username and password must have an entry!!", 422));
    }

    const { userName, points, email, password }= req.body;
    
    let existingUser;
    try {
        const existingUser = await User.findOne({email: email})
    } catch (err){
        const error = new HttpError('Signup failed! Please try again!', 500)
    }

    if(existingUser){
        const error = new HttpError('User exists already, please login instead.', 422);
        return next(error);
    }
    const newUser = new User({
        userName,
        points,
        email,
        password,
        todos: [],
        habits: [],
        rewards: []
    })


    
    try{
        await newUser.save();
    }catch (err){
        const error = new HttpError("could not create new user", 500);
        return next(error);
    }
    
    res.status(201).json({ users: newUser.toObject({getters: true}) });
})


router.post('/login', async (req, res, next)=>{
    const {userName, password } = req.body

    
    let existingUser;

    try {
        existingUser = await User.findOne({userName: userName})
    } catch (err){
        const error = new HttpError('Logging in failed! Please try again!', 500)
    }

    if(!existingUser || existingUser.password !== password){
        const error = new HttpError('Invalid credentials, could not log you in ', 401);
        return next(error);
    };
       console.log("logged in");
    res.json({ message: 'Logged in!', user: existingUser.toObject({getters: true})});
})

router.patch('/:id', async (req, res, next) => {
    const { points }= req.body;
    const userId= req.params.id;

    let user;
    try{
        user = await User.findById(userId);
    }catch(err){
        const error = new HttpError("could not update points", 500);
        return next(error);
    }

     User.points = points;
     try{
        await user.save();
    }catch (err){
        const error = new HttpError("could not update points", 500);
        return next(error);
    }
    
    res.status(200).json({ users: user.toObject({getters: true}) })
})

router.delete('/:id', (req, res, next) => {
    const userId = req.params.id;
    DUMMY_USER =  DUMMY_USER.filter(u => u.id !== userId);
    res.status(200).json ({message:" user has been deleted."});
   
});

module.exports = router;
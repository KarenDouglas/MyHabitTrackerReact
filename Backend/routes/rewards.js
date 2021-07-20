const express = require('express')
const { v4: uuid } = require("uuid");
const { check }= require('express-validator');
const { validationResult }= require('express-validator');
const mongoose = require('mongoose');

const HttpError = require('../models/http-error');
const Reward = require('../models/rewards-model');
const User = require('../models/users-model');


const router= express.Router();



router.get('/:uid', async (req, res, next)=>{
    const userId = req.params.uid;
  let userWithRewards;
try{
    userWithRewards= await User.findById(userId).populate("rewards")
}catch(err){
     new HttpError('Could not fetch rewards', 500);
    return next(new HttpError('Could not fetch rewards', 500));
}

if(!userWithRewards || userWithRewards.rewards.length === 0){
    return next(error)
}
res.json({rewards: userWithRewards.rewards.map(reward => reward.toObject({setters: true}))}); 
});

router.post('/',[check('text').not().isEmpty(), check('cost').not().isEmpty()], async (req, res, next)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        console.log(errors);
        return next(new HttpError("Your cost and reward must have an entry!!", 422));
    }
    const { text, cost, user }= req.body;
    const newReward = new Reward ({
       text,
       cost,
       user
    })
    let addUser;
    try {
        addUser = await User.findById(user);
    } catch(err) {
        const error = new HttpError('adding reward failed', 500);
        return next(error);
    }

    if(!addUser){ 
        const error = new HttpError('Could not find user', 404);
        return next(error)
    }

    try{
        const sess = await mongoose.startSession();
       sess.startTransaction();
       await newReward.save({session: sess});
       addUser.rewards.push(newReward);
       await addUser.save({session: sess});
       await sess.commitTransaction();
    }catch(err){
        const error = new HttpError(
            "your new reward failed to post :(",
            500
        );
        return next(error);
    }
    
    res.status(201).json({ rewards: newReward})
});

router.delete('/:id', async (req, res, next) => {
    const rewardId = req.params.id;

    let reward;
    try{
        reward = await Reward.findById(rewardId).populate('user');

    } catch(err){
        const error = new HttpError('Could not delete reward', 500);
        return next(error);
    }

    if(!reward){
        const error = new HttpError('Could not find reward', 404);
        return next(error);
    }

    try{
        const sess = await mongoose.startSession();
        sess.startTransaction();
        await reward.remove({session: sess});
        reward.user.rewards.pull(reward);
        await reward.user.save({session: sess});
        await sess.commitTransaction();
    }catch (err){
        const error = new HttpError('Could not delete reward', 500);
        return next(error);
    }

    
    res.status(200).json ({message:" reward has been deleted."});
   
});



module.exports = router;
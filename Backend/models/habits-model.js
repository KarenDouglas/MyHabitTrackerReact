const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const habitSchema = new Schema ({
    text: {type: String, required: true},
    streak: Number,
    dailyStreak: Number,
    user: {type: mongoose.Types.ObjectId, required: true, ref: 'User' }

});

module.exports = mongoose.model('Habit', habitSchema);
const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const Schema = mongoose.Schema;

const userSchema = new Schema ({
    userName: {type: String, required: true, unique: true},
    points: Number,
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true, minlength: 4},
    todos: [{type: mongoose.Types.ObjectId, required: true, ref: "Todo"}],
    habits: [{type: mongoose.Types.ObjectId, required: true, ref: "Habit"}],
    rewards: [{type: mongoose.Types.ObjectId, required: true, ref: "Reward"}]

});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);
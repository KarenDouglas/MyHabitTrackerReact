const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const rewardSchema = new Schema ({
    text: {type: String, required: true},
    cost:{type: Number, required: true},
    user: {type: mongoose.Types.ObjectId, required: true, ref: 'User' }

});

module.exports = mongoose.model('Reward', rewardSchema);
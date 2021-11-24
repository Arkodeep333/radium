const mongoose = require('mongoose');
const product = require('./product');
const user = require('./user');
const ObjectId = mongoose.Schema.Types.ObjectId
const orderschema = new mongoose.Schema({
    UserId:{
        type: ObjectId,
        required: true
    },
    productId:{
        type: ObjectId,
        required: true
    },
    Amount: Number,
    isFreeAppUser:Boolean,
    date: Date},

    

{timestamps: true});

module.exports = mongoose.model('order', orderschema)
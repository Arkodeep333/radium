const mongoose = require('mongoose')
const seconduserschema = new mongoose.Schema({
    name:{
        type: String,
        unique: true,
        required: true

    },
    mobile:{
        type: Number,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    isDeleted:{
        type: Boolean,
        default: false
    }

}, {timestamps: true})

module.exports = mongoose.model('seconduser', seconduserschema)
const mongoose=require('mongoose')

const authorSchema=new mongoose.Schema({
    
    authorName: {
        type: String,
        required: true
    },
    age: Number,
    address: String
    
    
    // firstName: String,
    // lastName: String,
    // mobile: {
    //     type: Number,
    //     unique: true,
    //     required: true
    // },
    // emailId: String, 
    // gender: {type: String, enum: ['male', 'female', 'other'] },
    // age: Number,
    // rating: Number

}, {timestamps: true} )

module.exports = mongoose.model( 'MyAuthor',authorSchema )

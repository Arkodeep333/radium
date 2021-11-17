const mongoose=require('mongoose')

const bookSchema= new mongoose.Schema({

//String
//Number
// Boolean
// Array
// Object
// Date
// Buffer
// ObjectId

//     bookName: {
//         type: String,
//         required: true
//     },
//     ISBN: {
//         type: String,
//         required: true,
//         unique: true
//     },
//     author: String,
//     tags: [ String ], //array of strings 
//     year: Number,
//     isPublished: {
//         type: Boolean, //Boolean
//         default: false
//     },
//     prices: {
//         indianPrice: String,
//         europeanPrice: String,
//         usaPrice: String,
//         nepalPrice: String,
//         japanPrice: String,
//         chinesePrice: String,
//         sudanPrice: String
//     },
//     sales: {
//         type: String,
//         default : Boolean
//     },
//     completionDate: String,

// }, {timestamps: true} )


bookName: {
    type: String,
    required: true,
    unique: true,
},
authorName: {
    type: String,
    required: true,
    unique: true,
},

year: {
    type: Number,
    default: 2021
},
category: {
    type: String,
    required: true
},
prices: {
    indianPrice: String,
    europeanPrice: String
},
tags: [String],
totalPages: Number,
stockAvailable: Boolean,
default: false
}, { timestamps: true })

module.exports = mongoose.model( 'Bookassign', bookSchema ) 

// ------------------------------------------------------16/11/21-----------------------------------------------------

// Intro to Backend Engineering
// FunctionUp
// #Programming #backend #nodejs #bestBookEver #cool #lifeChanging
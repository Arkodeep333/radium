const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

const publisherSchema = new mongoose.Schema({

    name: String,
    hq: String
}, {timestamps: true})

module.exports = mongoose.model('mypublisher', publisherSchema)

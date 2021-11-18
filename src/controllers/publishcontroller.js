const publisherModel= require("../models/mypublisher.js")
const createPublisher= async function (req, res) {
    var data= req.body
    let savedData= await publisherModel.create(data)
    res.send({msg: savedData})    

}

module.exports.createPublisher = createPublisher

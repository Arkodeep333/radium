const bookModel = require("../models/mybook.js");
const mongoose = require('mongoose');
const authorModel= require("../models/myauthor.js");
const publishModel = require("../models/mypublisher")



const createBook = async function (req, res) {
  const book = req.body
  let authorId = req.body.author
  let authorFromRequest = await authorModel.findById(authorId)
  let PublisherId = req.body.publisher
  let publisherFromRequest = await publishModel.findById(PublisherId)
  if(authorFromRequest && publisherFromRequest){
  let savedBook = await bookModel.create(book);
    res.send({msg: savedBook})
    }
    res.send("INVALID ID or IDs")
    
};

const getBooks = async function (req, res) {
  let allBooks = await bookModel.find().populate('author');
  res.send({ msg: allBooks });
};

const selectgetBooks = async function(req,res){

  let allBooksprop = await bookModel.find().populate('author',{"_id":1, "authorName": 1, "age": 1 })
  res.send({msg: allBooksprop})
}


// const getBook = async function (req, res) {
//   let book = await bookModel.findOne (  {sales: {$gt: 5000000} });
// //   if (book.length != 0 ) {
//     if (book ) { // any value present (except falsey) gets evaluated as true... null, 0  automatically defaults to false
//       console.log("HI I FOUND A BOOK")
//   }
//   else console.log("NO BOOK FOUND")
//   res.send( book );
// };


module.exports.createBook = createBook;
module.exports.getBooks = getBooks;
// module.exports.getBook = getBook;
module.exports.selectgetBooks = selectgetBooks;



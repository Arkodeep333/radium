const BookModel= require("../models/bookModel.js")
const mongoose= require("mongoose")
const authorModel= require("../models/authorModel")
const booksassign= require("../models/booksassign")
// const createBook = async function (req, res) {
//     const book= req.body
//     let savedBook= await BookModel.create(book)
//     res.send({msg: savedBook})
// }

// const getBooksData= async function (req, res) {

        // let allBooks= await BookModel.find()
        // let allBooks= await BookModel.find().count()
        // let allBooks= await BookModel.find( { sales: 0 } )
        // let allBooks= await BookModel.find( { sales: 0 } ).count()

        //and is when all the conditions have to be true
        // or is when even if any condition is true , it is included
        // let allBooks= await BookModel.find( { sales: 0 , isPublished : false} )
        // let allBooks= await BookModel.find(  {  $or: [ {sales: 0} , {isPublished : false} ]  } )  
        // let allBooks= await BookModel.find(  {  $or: [ {sales: 0} , {isPublished : false} ]  }  ).count()             
        //  allBooks= await SalesModel.find({phoneName: "OnePlus7", createdAt: {$gt:"21-03-1999"}  }  ).count()             


        // let allBooks= await BookModel.find( {  sales:   { $gt: 10}     }  )
        // let allBooks= await BookModel.find( {  sales:   { $lt: 10}     }  )

        
        // let allBooks= await BookModel.find( {  sales:   { $gte: 10   }    }  )
        // let allBooks= await BookModel.find( {  sales:   { $lte: 10   }    }  )

        // let allBooks= await BookModel.find( {  sales:   { $ne: 0   }    }  )
        // let allBooks= await BookModel.find( {  sales:   { $in: [ 0, 100, 4 , 1 ,2 ,3]   }     }  )
        // let allBooks= await BookModel.find( {  sales:   { $nin: [ 0, 100, 4 , 1 ,2 ,3]   }     }  )


        // let allBooks= await BookModel.find( ).sort(  { bookName: 1 } ) //ascending sort

        // let allBooks= await BookModel.find( {  sales:   { $gt: 0   }    }  ).sort(  { bookName: -1 } ) //descending sort :-1

        // let allBooks= await BookModel.find( {  sales:   { $gt: 0   }    }  ).sort(  { bookName: 1 } ).limit(2) //limit will give only next 2 elements

        // let allBooks= await BookModel.find( {  sales:   { $gt: 0   }    }  ).sort(  { bookName: 1 } ).limit(2).skip( 3 ) //SKIP is used for pagination
        // let allBooks= await BookModel.find( {  sales: { $gt: 0   }  } ).select( { bookName: 1, sales: 1, _id: 0 } )


        // let allBooks= await BookModel.findById(     mongoose.Types.ObjectId('61922aacac5fa8b15518d590') )




        // REGULAR EXPRESSIONS(regex) : 

        // let allBooks= await BookModel.find( {  bookName: /.*Node.*/i   } ) //has the word Node 
        // let allBooks= await BookModel.find( {  bookName: /Node$/i   } ) //ends with Node
        // let allBooks= await BookModel.find( {  bookName: /^Intro/i   } ) //starts with Node

        // let a=5
        // let b=6
        // let c=  a+b
        // console.log(c)



        
        // let allBooks= await BookModel.find( { "prices.europeanPrice" : "4Pounds"} ) // without await, this line will start to get executed..but the server will move to next line without COMPLETING the execution..this might cause code to break in the next few lines
        // hence we use await to ask the program to wait for the completion of this line..till this line completes, execution wont move to next line

        // await is typically used at 2 places:
            //- intearacting with database
            //- calling another service (axios)..will be covered next week


        //NOTE: await can not be used inside array functions like forEach / map / filter etc..self discovery and do post 

        // res.send({msg: allBooks})        
// -------------------------------------------15/11/21 ASSIGNMENT FUNCTIONS-------------------------------------

// let createBook = async function(req,res){
//     const book= req.body
//     let savedBook= await BookModel.create(book)
//     res.send({msg: savedBook})


//     }
// let booklist = async function(req,res){
//     let BL = await BookModel.find().select(({bookName: 1, authorName: 1}))
//     res.send({msg: BL})
// }
// let getBooksInyear = async function(req,res){
//     let d= req.body.year
//     let BIY = await BookModel.find({year: d })
//     res.send({msg: BIY})
// }
// let getParticularBooks = async function(req,res){
//     let z= req.body.particular
//     let PB = await BookModel.find({bookName: z})
//     res.send({msg: PB})

// }
// let getXINBooks = async function(req,res){
//     let x = await BookModel.find( {"prices.indianPrice": { $in : ["100", "200", "500"]}});
//     res.send({msg: x}) 
//     console.log(x)

// }
// let getRandomBooks = async function(req,res){
//     let y= await BookModel.find({$or:[{stockAvailable: true}, {totalPages:{$gt: 500}}]})
//     res.send({msg: y})

// }
// -----------------------------------16/11/21 ASSIGNMENT-----------------------------------------------------------
let createbook = async function(req,res){
    let a= req.body
    let sb= await booksassign.create(a)
    res.send({msg: sb})
}
let createauthor = async function(req,res){
    let b= req.body
    let sa= await authorModel.create(b)
    res.send({msg: sa})
}

let booksbychetanbhagat = async function(req,res){
    let cbbooks = await authorModel.find({author_name: "Chetan Bhagat"})
    let authorID = cbbooks[0].author_id
    let bookfind = await booksassign.find({author_id: authorID})
    res.send(bookfind)
}
let updateprice = async function(req,res){
    // console.log(3)
        let ai = await booksassign.findOne({name: "Two states"}).select({author_id: 1})
        let aid = ai.author_id
        let up = await booksassign.findOneAndUpdate({"author_id": aid}, {price: 100}, {new: true})
        let an = await authorModel.findOne({"author_id": aid})
        let rex = {"author_name": an.author_name,"price": up.price}
    // console.log(1)
        res.send(rex)
}
 let fb = async function(req,res){
     let ad = await booksassign.find({price:{$gte:50,$lte: 100}})
    //  console.log(ad)
     let aname = []
     
     for(i=0; i<ad.length; i++){
        let authorids = ad[i].author_id
        let resultobjs = await authorModel.findOne({"author_id": authorids})
        aname.push(resultobjs.author_name)
    }
    function uniqueonly(value, index, self){
       return  self.indexOf(value) == index
    }
    let final = aname.filter(uniqueonly)
    res.send(final)
 }

module.exports.createauthor= createauthor
module.exports.createbook = createbook
module.exports.booksbychetanbhagat = booksbychetanbhagat
module.exports.updateprice = updateprice
module.exports.fb = fb
// module.exports.checkauthorid = checkauthorid

// module.exports.createBook= createBook
// // module.exports.getBooksData= getBooksData
// module.exports.booklist= booklist
// module.exports.getBooksInyear=getBooksInyear
// module.exports.getParticularBooks= getParticularBooks
// module.exports.getXINBooks= getXINBooks
// module.exports.getRandomBooks= getRandomBooks

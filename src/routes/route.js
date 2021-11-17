const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel")

const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")


router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});

// router.post('/createUser',  UserController.createUser  );
// router.get('/getAllUsers',  UserController.getUsersData  );



// router.post('/createBook',  BookController.createBook );
// // router.get('/getAllBooks',  BookController.getBooksData  );
// router.get('/booklist', BookController.booklist);
// router.post('/getBooksInyear', BookController.getBooksInyear);
// router.post('/getParticularBooks', BookController.getParticularBooks);
// router.get('/getXINBooks', BookController.getXINBooks);
// router.get('/getRandomBooks', BookController.getRandomBooks);

router.post('/createauthor', BookController.createauthor);
router.post('/createbook', BookController.createbook);
router.get('/booksbychetanbhagat', BookController.booksbychetanbhagat);
router.get('/updateprice', BookController.updateprice);
router.get('/fb', BookController.fb);



module.exports = router;
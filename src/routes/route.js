const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const BookController= require("../controllers/bookController")
const PublisherController = require("../controllers/publishcontroller")


router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});

// Authors API
router.post('/authors',  authorController.createAuthor  );
router.get('/authors',  authorController.getAuthors  );

// Books API
router.post('/bookcreatenew',  BookController.createBook);
router.get('/books',  BookController.getBooks  );
// router.get('/book',  BookController.getBook  );
router.get('/selectgetBooks', BookController.selectgetBooks)
// Publisher API
router.post('/publisher', PublisherController.createPublisher )



module.exports = router;
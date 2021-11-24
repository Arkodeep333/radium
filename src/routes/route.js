const express = require('express');

const router = express.Router();

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});

const userlogin = require('../controllers/login')
const usercontroller = require('../controllers/usercontroller')
const mid = require('../midwares/middle')

router.post('/createlogin', userlogin.createnewlogin);
router.post('/createuser', usercontroller.createnewUser);
router.get('/users/:userid',mid.loginmw, usercontroller.getuser);
router.put('/users/:userid',mid.loginmw, usercontroller.mailupdate);

module.exports = router;
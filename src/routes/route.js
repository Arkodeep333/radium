const express = require('express');
const router = express.Router();
const allcontrol = require('../controller/allcontrol')
const Midware = require('../middlewares/globalMiddleware')

// router.post('/test-me', function (req, res, next) {    
//     console.log('Inside the route handler checking the header batch: '+req.headers['batch'])
//     let host = req.headers['host']
//     let hostWithName = host + " " + "Sabiha Khan"
//     console.log('My response headers: '+res.getHeaderNames())
//     res.setHeader('hostWithName', hostWithName)
//     //res.send({data: 'I was in the handler'})
//     res.finalData = {data: 'I was in the handler'}
//     next()
// });

// router.post('/login', function (req, res){
//     let vb = req.body
//     let pass = req.body.passwaord
//     let name = req.body.name
    
   
// });
// router.post('/validateuser', allcontrol.validateuser)
router.post('/createUser',Midware.validateAppType, allcontrol.createUser)
router.post('/createProduct', allcontrol.createProduct)
router.post('/createOrder', Midware.validateAppType,allcontrol.createOrder)
// ------------------------------------23/11/21--------------------------

// router.post('/createseconduser', allcontrol.createseconduser)



module.exports = router;
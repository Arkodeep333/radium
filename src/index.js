const express = require('express');
var bodyParser = require('body-parser');

const route = require('./routes/route.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const midGlb= function (req, res, next) {
    console.log("Hi I am a GLOBAL middleware");
    let date = new Date().getDate()
    let month = new Date().getMonth()
    let realmonth = month +1
    let time = new Date().getTime()
    let ip = req.ip
    let url = req.originalUrl

    console.log(date+" "+realmonth + " "+ time+ " "+ ip+" "+ url)
    next()    
}

app.use(midGlb)

const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://users-open-to-all:hiPassword123@cluster0.uh35t.mongodb.net/pkDB?retryWrites=true&w=majority", {useNewUrlParser: true})
    .then(() => console.log('mongodb running and connected'))
    .catch(err => console.log(err))





    
app.use('/', route);


app.listen(process.env.PORT || 3000, function() {
	console.log('Express app running on port ' + (process.env.PORT || 3000))
});
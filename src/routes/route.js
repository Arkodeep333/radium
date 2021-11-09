const express = require('express');

const router = express.Router();

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});
router.get('/movies', function(req, res){
    const a=["movie1", "movie2", "movie3", "movie4", "movie5"]
    res.send(a)

})
// router.get('/movies/:movieId', function(req, res){ 
    
//     let movies=["movie0", "movie1", "movie2","movie3"]
//     let value = req.params.movieId
//     let movieindexat= movies[value]
//     res.send(movieindexat)

// })
router.get('/movies/:movieId', function(req, res){ 
    
    let movies=["movie0", "movie1", "movie2","movie3"]
    let value = req.params.movieId
    let movieindexat= movies[value]
    if(value<=movies.length-1){
        res.send(movieindexat)
    }
    else{
        res.send("Enter valid id")
    }

})
router.get('/movies/:movieId', function(req, res){ 
    
    let movies=["movie0", "movie1", "movie2","movie3"]
    let value = req.params.movieId
    let movieindexat= movies[value]
    value<=movies.length-1 ? res.send(movieindexat) : res.send("Enter valid id")
    
})

router.get('/films', function(req, res){
    const z= [{
        id: 1,
        name: "The Shining"
       },{
        id: 2,
        name: "Incendies"
       }, {
        id: 3,
        name : "Rang de Basanti"
       },
        {
        id: 4,
        name: "Finding Nemo"
        }]
        res.send(z)

})
router.get('/films/:index', function(req, res){ 
    
    const z= [{
        id: 1,
        name: "The Shining"
       },{
        id: 2,
        name: "Incendies"
       }, {
        id: 3,
        name : "Rang de Basanti"
       },
        {
        id: 4,
        name: "Finding Nemo"
        }]
    let value = req.params.index
    let zlist= z[value-1]
    if(value<=z.length){
        res.send(zlist)
    }else{
        res.send("No movies found")

    }
 
    
})

module.exports = router;
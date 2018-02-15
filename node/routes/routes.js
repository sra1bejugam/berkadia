const express = require('express');

const route = express.Router();
//route to each service provided
const getmovie=require('../services/getservice');
const postmovie = require('../services/updateservice');
const updatemovie = require('../services/postservice');
const get1 = require('../services/get1');
//get the details 
route.get('/movies',    async function(req,res,next){   //middleware handling next()
    try{
        let movies=await getmovie.getMovies();
        res.json(movies);
    }                                                           //checking the response using try and catch
    catch(err){
        next('error');
    }
});
//post function
route.post('/movies',   async function(req,res,next){
    let postmov=req.body;
    try{
        let movie=await postmovie.addMovie(postmov);
        res.json(movie);
    }
    catch(err){
        next('error');
    }
})
//get by name only
route.get('/movies/:name',   async function (req, res, next) {
    let moviename = req.params.name;

    try {
        let movie = await get1.getMovie(moviename);
        res.json(movie);
    }
    catch (err) {
        next('error');
    }
})
//put or update function
route.put('/movies/:name',  async function(req,res,next){
    
    let upmv=req.body;
    let moviename=req.params.name;

    try {
        let movie = await updatemovie.updateMovies(moviename,upmv);
        res.json(movie);
    }
    catch (err) {
        next('error');
    }
})


route.use('error',function(err,req,res,next){
    if(err){                                                    //middle ware handling route.use(...next){}
        console.error(err);
    }
})


module.exports=route;
const database=require('../config/database');
let db;

async function connectdb(){
    try{
    db= await database();
    }
    catch(err){
        console.error(err);
    }
}

connectdb();
function getMovies(){ 
    return new Promise((res,rej)=>{
        db.createCollection('movies',{strict:true},function(err){
            db.collection('movies').find({}).toArray((err, movies) => {
                if (err) {
                    console.error(err);
                }
                else {
                    res(movies);
                }
            })
        })
    })
}
//exporting the function getmovies to use in other 
module.exports.getMovies=getMovies;
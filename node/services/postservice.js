const database = require('../config/database');
let db;

async function connectdb() {
    try {
        db = await database();
    }
    catch (err) {
        console.error(err);
    }
}

connectdb();

function addMovie(movie){
    let newmovie=movie;
    return new Promise((res, rej) => {
            db.collection('movies').insertOne(newmovie,function(err,movies){
                if (err) {
                    console.error(err);
                }
                else {
                    res(movies);
                }
            })
    })
}
module.exports.addMovie = addMovie;
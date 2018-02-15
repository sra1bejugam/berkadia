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
function  updateMovies(moviename,updatemovie){
    let mname=moviename;
    return new Promise((res, rej) => {
            db.collection('movies').updateOne({name:mname},updatemovie,(err, movies) => {
                if (err) {
                    console.error(err);
                }
                else {
                    res(movies);
                }
            })
        })
}

module.exports.updateMovies = updateMovies;
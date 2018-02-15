const database = require('../config/database');
//services to get by name in the url
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
function getMovie(moviename){ 
    return new Promise((res, rej) => {
            db.collection('movies').findOne({name:moviename},(err,movie) => {
                if (err) {
                    console.error(err);
                }
                else {
                    res(movie);
                }
            })
    })
}

module.exports.getMovie = getMovie;
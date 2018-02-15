const mongodb=require('mongodb').MongoClient;
//database side where to connect to the database
require('dotenv').config();         

let url = "mongodb://localhost:27017/movies";       


module.exports=function db(){                         
    return new Promise((res,rej)=>{                             
        mongodb.connect (url ,function(err,db){                  
            if(err){
                console.error(err);
                rej(err);
            }
            else{
                console.log("Database is connected");
                res(db);                                   
            }
        })
    })
}
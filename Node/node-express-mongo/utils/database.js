//require: modules
//module: mongodb
const mongodb = require("mongodb");

//mongodb: client 
const MongoClient = mongodb.MongoClient; 

//mongodb: instanse
let db;

exports.connect = (callback) => {
    MongoClient.connect("mongodb://localhost:27017")
    .then((client) => {
        console.log("Connected to client successfully");
        db = client.db(); //referanse to mongodb to connect db & operation
        callback(true);
    })
    .catch((error) => {
        console.log("Failed to connect");
        callback(false);
    })
}

// module.exports = connect;
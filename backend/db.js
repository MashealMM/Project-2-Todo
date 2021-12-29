const mongoose = require ("mongoose");

const dbURI = "mongodb://localhost:27017/TodoListV01";

mongoose.connect(dbURI);

//extra

const db =mongoose.connection;

db.on("erroe",(err)=>{
    console.log("ERROR IN MONGODB");

});

db.on("CONNECTED",(err)=>{
    console.log("MONGODM IS CONNECTED");
});
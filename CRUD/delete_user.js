//delete a document with id

var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/user_managements";
MongoClient.connect(url, function (err, client) {
   if (err) throw err;

   const db = client.db("user_managements");
   db.collection("users").deleteOne({_id:"14"} ,function (err, result) {
     if (err) throw err;
     console.log("status: " + JSON.stringify(result));
     client.close();
   });
 });

 
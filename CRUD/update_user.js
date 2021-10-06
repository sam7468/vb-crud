var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/user_managements";
MongoClient.connect(url, function (err, client) {
   if (err) throw err;

   const db = client.db("user_managements");
   db.collection("users").updateOne({_id:"12"},{$set : {"f_name":"sam"} },function (err, result) {
     if (err) throw err;
     console.log("updated document: " + JSON.stringify(result.value));
     client.close();
   });
 });

 

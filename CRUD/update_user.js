var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/user_managements";
MongoClient.connect(url, function (err, client) {
   if (err) throw err;

   const db = client.db("user_managements");
   db.collection("users").findOneAndUpdate({_id:"12"},{$set : {"f_name":"sam (updated f_name)"} },function (err, result) {
     if (err) throw err;
     console.log("status: " + JSON.stringify(result));
     client.close();
   });
 });

 
var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/user_managements";
MongoClient.connect(url, function (err, client) {
   if (err) throw err;
   var items = [
     {_id:"19","f_name":"lana","l_name":"cruz","email":"lana@gmail.com","company":"gghc","phone":"327356441"},
     {_id:"20","f_name":"lilly","l_name":"reez","email":"lilly@gmail.com","company":"gghc","phone":"127356441"}
    ];
   const db = client.db("user_managements");
   db.collection("users").insertMany(items, function (err, res) {
     if (err) throw err;
     console.log("Number of records inserted: " + res.insertedCount);
     
     client.close();
   });
 });

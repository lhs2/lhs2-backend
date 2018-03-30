var express = require('express'),
    router = express.Router(),
    MongoClient = require('mongodb').MongoClient,
    assert = require('assert');

var url = "mongodb://localhost:27017/lhs2";

MongoClient.connect(url, function(err,database){
  assert.equal(err, null);
  const db = database.db('lhs2')
  console.log("MongoDB sucessfully connected to database lhs2");

  // return all users from db
  router.get('/showAllUsers', function(req, res, next) {
    db.collection("user").find({}, {username: 1, _id: 0}).toArray(function (err,docs) {
      res.status(200).send({message: "Sucess", body: {data: docs}});
      
    });
  });

})
/* GET users listing. */


module.exports = router;


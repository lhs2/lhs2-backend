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

  router.post('/authenticate', function(req,res, next) {
    db.collection("user").findOne({login: req.body.login, password: req.body.password}, {username: 1, _id: 0}, function(err, result) {
      if(err) {
        res.status(400).send(err);
      }
      else if(result){
        console.log(result);
        res.status(200).json({message: "SUCESS", data:{username: result.username }});
      }
      else {
        console.log(result, "prob null");
        res.status(400).json({message: "INVALID_CREDENTIALS"});
      }
    })
  });
})
/* GET users listing. */


module.exports = router;


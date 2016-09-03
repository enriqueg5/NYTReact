/*=====================================================
##################dependencies#########################
======================================================= */
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

//=====================================================
//##############Database connection####################
//=====================================================
mongoose.connect('mongodb://localhost/nytReact');
var db = mongoose.connection;

// show any mongoose errors
db.on('error', function(err) {
  console.log('Mongoose Error: ', err);
});

// once logged in to the db through mongoose, log a success message
db.once('open', function() {
  console.log('Mongoose connection successful.');
});

//bring in the models.
var Article = require('../models/articleSchema.js');

//=====================================================
//######################Routes#########################
//=====================================================

router.get('/', function(req,res){
  res.send('index.html');
});

router.get('/api/saved', function(req,res){
  Article.find({}).sort({date: -1}).exec(function(err, doc){
    if (err) throw err;
    res.send(doc);
  });
});

router.post('/api/saved', function(req, res){
  var newArticle = new Article(req.body);
  Article.create({title: req.body.title, URL: req.body.URL, date: req.body.date});
});

router.delete('/api/saved/:id', function(req, res){
    Article.remove({_id: req.params.id}, function(err){
      if (err) throw err;
    });
});

module.exports = router;

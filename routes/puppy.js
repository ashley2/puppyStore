var express = require('express');
var router = express.Router();

var Puppy = require('../models/puppy');

router.post('/add', (req, res) => {
  var newPuppy = req.body;
  Puppy.create(newPuppy, function(err){
    if(err){
     res.status(455).send(err);
   } 
   else {
    res.send()
  }
})
})

router.get('/', (req, res) => {
  Puppy.read(function(err, puppies){
    if(err){
     res.status(400).send(err);
     return;
   }
   res.send(puppies);
 });
});

router.delete('/delete/:id', function(req, res){
  var id = req.params.id; 
  Puppy.delete(id, function(err){
    if(err){
      res.status(400).send(err);
      return;
    } else {
      res.send();
    }
  })
})










module.exports = router;

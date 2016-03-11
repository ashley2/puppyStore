var express = require('express');
var router = express.Router();

var Puppy = require('../models/puppy');


router.get('/', (req, res) => {
  Puppy.get(function(err, puppies){
    if(err){
     res.status(400).send(err);
     return;
   }
   res.send(puppies);
 });
});


router.put('/', (req, res) => {

  Puppy.put(req.body, function(err, puppies){
    if(err){
     res.status(400).send(err);
     return;
   }
   res.send(puppies);
 });
})



router.post('/', (req, res) => {
  var newPuppy = req.body;
  Puppy.create(newPuppy, function(err, savedPuppy){
    if(err){
     res.status(455).send(err);
   } 
   else {
    res.send(newPuppy)
  }
})
})
router.delete('/:id', function(req, res){
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

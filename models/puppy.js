'use strict'

var fs = require('fs');
var path = require('path');
var uuid = require('uuid');

var puppyFilePath = path.join(__dirname, "../data/puppies.json")


exports.write = function(puppies, cb) {
  fs.writeFile(puppyFilePath, JSON.stringify(puppies), cb);
};

exports.get = function(cb){
  fs.readFile(puppyFilePath, function(err, data){
    if(err) return cb(err);
    var puppies = JSON.parse(data);
    cb(null, puppies);
  });
}

exports.create = function(newPuppy, cb) {

  this.get((err, puppies) => {
    if(err) return cb(err);
    newPuppy.id = uuid();
    puppies.push(newPuppy);
    this.write(puppies, function(err){
      cb(err, newPuppy);
    });
  });
};


exports.put = function(editPuppy, cb){
  this.get((err, puppies) => {
    if(err) return cb(err);
    for (var i = 0; i < puppies.length; i++){
      if(editPuppy.id === puppies[i].id){
        puppies[i] = editPuppy
      }
    }
    this.write(puppies, function(err){
      cb(err, editPuppy);
    });
  })

}

exports.delete = function(id, cb)  {
  this.get((err, puppies) => {
    console.log('passed')
    var length = puppies.length
    puppies = puppies.filter(function(viewPuppy){
      console.log('second')
      return viewPuppy.id !== id;
    });
    if(length === puppies.length) {
      cb( {err: "Puppy not found"});
    }
    this.write(puppies, cb);
  });
}



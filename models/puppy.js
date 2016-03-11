'use strict'

var fs = require('fs');
var path = require('path');
var uuid = require('uuid');

var puppyFilePath = path.join(__dirname, "../data/puppy.json")


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
    newPuppys.id = uuid();
    puppies.push(newPuppy);
    this.write(puppies, function(err){
      cb(err, newShoe);
    });
  });
};

exports.delete = function(id, cb)  {
  this.get((err, puppies) => {
    var length = puppies.length
    puppies = puppies.filter(function(puppy){
      return puppy.id !== id;
    });
    if(length === puppies.length) {
      cb( {err: "Puppy not found"});
    }
    this.write(puppies, cb);
  });
}



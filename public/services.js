'use strict';

var app = angular.module('puppyApp');

app.service('PuppyService', function($http){

  this.getAll = function(){
    return $http.get('/puppies')
  };

  this.create = function(newPuppy){
    return $http.post('/puppies', newPuppy);
  }

  this.delete = function(puppy) {
   return $http.delete(`/puppies/${puppy.id}`)


 };

 this.update = function(editPuppy){
    return $http.put('/puppies', editPuppy);
};
})




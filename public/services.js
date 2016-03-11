'use strict';

var app = angular.module('puppyApp');

app.service('PuppyService', function($http){

  this.getAll = function(){
    return $http.get('/puppies')
  };

  this.create = function(newPuppy){
    return $http.post('/puppies', newPuppy);
  }

  this.delete = function() {
   return $http.delete(`/puppies/${viewPuppy.id}`)

 };

 this.update = function(editPuppy){
    return $http.put('/puppies', editPuppy);
};
})




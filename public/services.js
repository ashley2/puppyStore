'use strict';

var app = angular.module('puppyApp');

app.service('PuppyService', function($http){

  this.fetch = function(){
    return $http.get('/puppies')
  };

  this.create = function(newPuppy){
    return $http.post('/puppies', newPuppy);
  }

  this.remove = function() {
   return $http.delete(`/puppies/${puppy.id}`)

 };

 this.update = function(editPuppy){

};
})
// app.factory('shoeFactory', function($http){
//   return {
//     fetch: function(){
//         return $http.get('/puppies');
//     },
//     create: function(){

//     }
//   }




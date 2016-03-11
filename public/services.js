'use strict';

var app = angular.module('puppyApp');

app.service('PuppyService', function($http){

  this.fetch = function(){
    return $http.get('/puppies')
  };

  this.create = function(newShoe){
    return $http.post('/puppies', newShoe);
  }

  this.remove = function() {
   return $http.delete(`/puppies/${puppy.id}`)

 };

 this.update = function(editShoe)

});

// app.factory('shoeFactory', function($http){
//   return {
//     fetch: function(){
//         return $http.get('/puppies');
//     },
//     create: function(){

//     }
//   }




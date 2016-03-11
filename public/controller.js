var app = angular.module('puppyApp');

app.controller('puppyCtrl', function($scope, ShoeService){
  console.log('hi');

  PuppyService.fetch()
  .then(function(res){
    console.log(res);
    var puppies = res.data;
    $scope.puppies = puppies;
  }, function(err){
    console.error(err);
  });

  $scope.addPuppy = function(){
   PuppyService.create($scope.newPuppy)
   .then(function(res){
    $scope.puppies.push(res.data)
  }, function(err){
    console.log(err)
  }); 
 };
 $scope.deletePuppy = function(puppy){
  PuppyService.remove(puppy)
  .then(function(){
    //success
    var index = $scope.puppies.indexOf(puppy);
    $scope.puppies.splice(index, 1);


  }, function(err){
    console.log('err ' , err);
  })
}

// $scope.editShoe = function(shoe){
//   $scope.shoeToEdit = angular.copy(shoe); ///makes it so you dont change the original 
//     // $scope.editingShoe = true;
// } 
// $scope.cancelEdit = function(shoe){
//   $scope.shoeToEdit = null

// });
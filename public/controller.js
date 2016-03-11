var app = angular.module('puppyApp');

app.controller('puppyCtrl', function($scope, PuppyService){
  console.log('hi');

  PuppyService.getAll()
  .then(function(res){

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

  $scope.viewPuppy = null

  $scope.seeMore = function(puppy){
    $scope.viewPuppy = puppy;
  }

  $scope.seeLess = function(puppy){
    $scope.viewPuppy = null;
  }

  $scope.update = function(viewPuppy){
    PuppyService.update(viewPuppy)

    .then(function(){
      swal("Great!", "Your puppy has been saved!", "success")

    }, function(err){
      console.log(err);
    })
  }



  $scope.deletePuppy = function(viewPuppy){
    PuppyService.delete(viewPuppy)
    .then(function(){
    //success
    var index = $scope.puppies.indexOf(viewPuppy);
    $scope.puppies.splice(index, 1);

  }, function(err){
    console.log('err ' , err);
  })
  }
})

// $scope.editShoe = function(shoe){
//   $scope.shoeToEdit = angular.copy(shoe); ///makes it so you dont change the original 
//     // $scope.editingShoe = true;
// } 
// $scope.cancelEdit = function(shoe){
//   $scope.shoeToEdit = null

// });
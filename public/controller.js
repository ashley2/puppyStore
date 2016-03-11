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
      $scope.newPuppy = {}
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




  $scope.deletePuppy = function(puppy){
    swal({   title: "Are you sure?",   
      text: "You will not be able to recover this puppies info!",
      type: "warning",
      showCancelButton: true, 
      confirmButtonColor: "#DD6B55", 
      confirmButtonText: "Yes, delete it!",
      closeOnConfirm: false },
      function(){   
        PuppyService.delete(puppy)
        .then(function(){
    //success
    var index = $scope.puppies.indexOf(puppy);
    $scope.puppies.splice(index, 1);
    $scope.viewPuppy = null;
    swal("Deleted!",
     "Your puppy has been deleted.",
     "success"); 

  })

      }, function(err){
        console.log('err ' , err);
      })
  }
})


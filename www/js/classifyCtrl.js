<<<<<<< HEAD

=======
>>>>>>> 0b506af01e6be79627036331cf314ea93ae4ca85
angular.module('starter.classifyCtrl', ['ionic'])
.controller('classifyController',['$scope','$http',function( $scope,$http){
  $scope.did=function(re){
    console.log(re);
  }
$http.get('./data/classify.json')
.then(
  function(res){
    $scope.lists=res.data.data.title;
  },function(res){
    console.log(res);
  }
)
}])
.config(function(){})

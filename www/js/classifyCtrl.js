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

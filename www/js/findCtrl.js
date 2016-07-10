angular.module('starter.findCtrl', ['ionic'])
.controller('findController',['$scope','$http',function( $scope ,$http){
    $http.get('./data/find.json')
      .then(function( res ){
         $scope.datalist = res.data.datalist;
         console.log($scope.datalist);
      },function( res ){
          $scope.datalist = res.data.error;
      })

}])

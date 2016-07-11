angular.module('starter.findCtrl', ['ionic'])
.controller('findController',['$scope','$http',function( $scope ,$http){
  // $ionicLoading.show({
    //   template: 'loading....'
    // });
    $http.get('./data/find.json')
      .then(function( res ){
         $scope.datalist = res.data.datalist;
      },function( res ){
          $scope.datalist = res.data.error;
      })
}])
.config(['$stateProvider', '$urlRouterProvider',function($stateProvider,$urlRouterProvider){
    $stateProvider
    .state('find', {
      url: '/find',
      templateUrl: './tpls/find.html'
      })
    .state('findPage', {
      url: '/findPage',
      templateUrl: './tpls/findPage.html',
      controller : 'findPageCtroller'
      })
  }])
  .controller('findPageCtroller',['$scope','$http',function( $scope ,$http){
      $http.get('./data/findPage.json')
        .then(function( res ){
          console.log(res.data.detaillist);
           $scope.listpage = res.data.listpage;
           $scope.detaillist = res.data.detaillist;
        },function( res ){
            $scope.listpage = res.data.error;
        })
  }])

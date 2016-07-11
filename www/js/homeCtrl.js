
angular.module('starter.homeCtrl', ['ionic'])
.controller('homeController',['$scope','$http', function( $scope,$http,$ionicSlideBoxDelegate ){

  $http.get('./data/home.json')

  .then(function(res){
    //暴漏datalist
    $scope.datalist = res.data.datalist;
    console.log(res);
    //小点的点击事件
    $scope.pageClick = function(index){
      alert(index);
    //  $scope.model.activeIndex = 2; 如何跳转选中的点点对应的图片？
    //delegateHandle 的验证事件
    $scope.delegateHandle = $ionicSlideBoxDelegate;
    };

  },function(res){
    $scope.datalist = res.data.error;
  });
}])

.config(['$stateProvider', '$urlRouterProvider',function($stateProvider,$urlRouterProvider){
    $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: './tpls/home.html'
    });

  }]);

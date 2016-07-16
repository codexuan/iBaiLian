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
  .controller('findPageCtroller',['$scope','$http','$ionicLoading','$timeout','$ionicModal',function( $scope ,$http, $ionicLoading , $timeout ,$ionicModal){
      $http.get('./data/findPage.json')
        .then(function( res ){
           $scope.listpage = res.data.listpage;
           $scope.detaillist = res.data.detaillist;
        },function( res ){
            $scope.listpage = res.data.error;
        });
        // 下拉刷新
      $scope.doRefresh = function() {
        $http.get('./data/findPage.json')
         .success(function( res ) {
           $scope.items = [];
         })
         .finally(function() {
           // Stop the ion-refresher from spinning
           $scope.$broadcast('scroll.refreshComplete');
         });
      };
      // 上拉加载
      $scope.items = [];
      $scope.loadMore = function() {
        $ionicLoading.show().then(function(){
          $http.get('./data/findLoad.json')
          .success(function(res) {
            $scope.items = $scope.items.concat( res.reloadlist );
            $scope.$broadcast('scroll.infiniteScrollComplete');
            $ionicLoading.hide();
          });
        $scope.$on('stateChangeSuccess', function() {
          console.log('没有更多数据');
        });
      });
    }
    $ionicModal.fromTemplateUrl('./tpls/login.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.modalLogin = modal;
    });
    //注册
    $ionicModal.fromTemplateUrl('tpls/register.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.modalReg = modal;
      $scope.modalLogin.hide();
    });
        // 点击事件
    $scope.tips = function(){

      $ionicLoading.show(
        {
          template:"请先登录"
        }
      ).then(function () {
        $timeout(function () {
            $ionicLoading.hide().then(function(){
              $scope.modalLogin.show();
            });
              $scope.closeModal = function() {
                $scope.modalLogin.hide();
              };
          }, 1000);
      })
    }
  }])

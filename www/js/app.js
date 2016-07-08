// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'

angular.module('starter', ['ionic','starter.homeCtrl',
'starter.classifyCtrl','starter.findCtrl','starter.myCtrl','starter.cartCtrl'
])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('tabs', {
      url: '/tab',
      templateUrl: './tpls/tabs.html'
    })
    .state('tabs.home', {
      url: '/home',
      views: {
        'home-tab': {
          templateUrl: './tpls/home.html',
          controller: 'homeController'
        }
      }
    })
    .state('tabs.classify', {
      url: '/classify',
      views: {
        'classify-tab': {
          templateUrl: './tpls/classify.html',
          controller: 'classifyController'
        }
      }
    })
    .state('tabs.find', {
      url: '/find',
      views: {
        'find-tab': {
          templateUrl: './tpls/find.html',
          controller: 'findController'
        }
      }
    })
    .state('tabs.cart', {
      url: '/cart',
      views: {
        'cart-tab': {
          templateUrl: './tpls/cart.html',
          controller: 'cartController'
        }
      }
    })
    .state('tabs.my', {
      url: '/my',
      views: {
        'my-tab': {
          templateUrl: './tpls/my.html',
          controller: 'myController'
        }
      }
    });
  $urlRouterProvider.otherwise('/tab');
})

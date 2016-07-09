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
.config(function ($stateProvider, $urlRouterProvider,$ionicConfigProvider) {
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
  $ionicConfigProvider.platform.ios.tabs.style('standard');
  $ionicConfigProvider.platform.ios.tabs.position('bottom');
  $ionicConfigProvider.platform.android.tabs.style('standard');
  $ionicConfigProvider.platform.android.tabs.position('standard');

  $ionicConfigProvider.platform.ios.navBar.alignTitle('center');
  $ionicConfigProvider.platform.android.navBar.alignTitle('left');

  $ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-ios-arrow-thin-left');
  $ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-android-arrow-back');

  $ionicConfigProvider.platform.ios.views.transition('ios');
  $ionicConfigProvider.platform.android.views.transition('android');

})

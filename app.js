angular
  .module('app', [
    'ui.router'
  ])
  .config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl',
        // resolve: {
        //   friends: ['$http', function ($http) {
        //     return $http.get('data/friends.json')
        //     .then(function(response) {
        //       return response.data;
        //     })
        //   }]
        // }
        resolve: {
          friends: ['Friends', function (Friends) {
            return Friends.get();
          }]
        }
      })
      .state('about', {
        url: '/about',
        templateUrl: 'templates/about.html',
        controller: 'aboutCtrl'
      })
      .state('contact', {
        url: '/contact',
        templateUrl: 'templates/contact.html'
      })
  }])

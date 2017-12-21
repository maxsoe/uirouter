  angular
    .module('app')
    .factory('Friends', ['$http',
      function($http) {
        // GET friends list
        var get = function() {
          return $http.get('/data/friends.json')
          .then(function(response) {
            return response.data;
          });
        };
        return {
          get: get
        };
      }]);

  // .factory('Friends', ['$http', function($http) {
  //     var get = function () {
  //       return $http.get('data/friends.json')
  //       .then(function(response) {
  //         return response.data;
  //       })
  //     };
  //     return get;
  //
  // }])

  //   friends: ['$http', function ($http) {
  //     return $http.get('data/friends.json')
  //     .then(function(response) {
  //       return response.data;
  //     })
  //   }]

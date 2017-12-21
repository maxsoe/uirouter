angular
  .module('app')
  .controller('homeCtrl', ['$scope', 'Friends', function($scope, Friends) {
    $scope.title = "Home";
    $scope.friends = Friends.get();
    $scope.items = ['home', 'about', 'contact'];

    var defaultSelection = $scope.items[0];
    $scope.selectedValue = defaultSelection;

    $scope.save = function () {
      console.log(JSON.stringify($scope.friends));
      // $http.post('/data/friends', friends)
    };
  }]);

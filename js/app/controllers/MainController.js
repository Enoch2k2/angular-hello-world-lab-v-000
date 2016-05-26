function MainController($scope) {
  $scope.name = "Casey"
  $scope.email = "Casey@gooberbutt.com"
  $scope.phone = "555-555-5555"
}

angular
  .module('app')
  .controller('MainController', MainController)

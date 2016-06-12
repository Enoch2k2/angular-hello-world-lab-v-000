function MainController($scope) {
  $scope.name = "Enoch";
  $scope.email = "Enoch2k2@email.com";
  $scope.phone = "555-555-5555"
}

angular
  .module('app')
  .controller('MainController', MainController)

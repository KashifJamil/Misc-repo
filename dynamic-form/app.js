var app = angular.module('angularjs-starter', []);

app.controller('MainCtrl', function($scope) {
  $scope.items = [];
  $scope.addNew = function (){
    $scope.items.push({ name: '' });
  };
  
  $scope.submitOne = function (item){
    $scope.lastSubmit = angular.copy(item);
  };
  
  $scope.submitAll = function() {
    $scope.lastSubmit = angular.copy($scope.items);
  }
});

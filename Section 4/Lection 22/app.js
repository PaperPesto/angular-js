// MODULE
var myApp = angular.module('myApp', []);

// CONTROLLERS
myApp.controller('mainController', ['$scope', function ($scope) {

    $scope.alertClick = function(){
        alert("Clicked!");
    }

    $scope.name = 'John Doe';
}]);
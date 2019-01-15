// MODULE
var myApp = angular.module('myApp', []);

// CONTROLLERS
myApp.controller('mainController', ['$scope', '$timeout', function ($scope, $timeout) {

    // Tutto ciò dentro lo scope diventa visibile nell'html. $scope è l'equivalente del ViewModel
    $scope.name = "Tony";
    $scope.topic = "string interpolation";

    $timeout(function(){
        $scope.name = 'Everybody';
    }, 3000);
}]);
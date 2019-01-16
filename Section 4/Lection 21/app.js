// MODULE
var myApp = angular.module('myApp', []);

// CONTROLLERS
myApp.controller('mainController', ['$scope', '$filter', function ($scope, $filter) {

    $scope.handle = '';

    $scope.lowercasehandle = function () {
        return $filter('lowercase')($scope.handle);
    }

    // Voglio che l'handler sia esattamente 5 caratteri
    $scope.characters = 5;

    // Inserisco delle regole di "validazione" finte per fare controlli su textbox
    $scope.rules = [
        { rulename: "Must be 5 characters" },
        { rulename: "Must be used elsewhere" },
        { rulename: "Must be cool" }
    ];

    console.log($scope.rules);
}]);
var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
    $routeProvider

        .when('/', {
            templateUrl: 'pages/main.html',
            controller: 'mainController'
        })

        .when('/second', {
            templateUrl: 'pages/second.html',
            controller: 'secondController'
        })

        .when('/second/:num', {
            templateUrl: 'pages/second.html',
            controller: 'secondController'
        })
});


myApp.controller('mainController', ['$scope', '$log', function ($scope, $log) {

    // Model
    $scope.person = {
        name: 'John Doe',
        address: '555 main St., New York, NY 11111'
    }
}]);

myApp.controller('secondController', ['$scope', '$log', '$routeParams', function ($scope, $log, $routeParams) {


}]);

// Le directive materializzano il concetto di View-Model
// View: template html, in questo caso directives/searchresult.html
// Model: specifico model della directive (non è quello definito nel controller, cioé $scope)
myApp.directive("searchResult", function () {
    return {
        restrict: 'EACM',
        templateUrl: 'directives/searchresult.html',    // View
        replace: true,
        // Model (isolated scope)
        scope: {
            personName: "@", // bindata a person-name in ingresso sulla directive come attributo. @ significa che inietterò del testo
            personAddress: "@"
        }
    }
});

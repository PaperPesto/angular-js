var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider){
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


}]);

myApp.controller('secondController', ['$scope', '$log', '$routeParams', function ($scope, $log, $routeParams) {


}]);

// Custom directive
myApp.directive("searchResult", function(){
    return {
        restrict: 'EACM',
        templateUrl: 'directives/searchresult.html',
        replace: true
    } 
});
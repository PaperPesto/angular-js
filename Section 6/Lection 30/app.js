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

myApp.service('nameService', function(){

    var self = this;
    this.name = 'John Doe';

    this.nameLength = function(){
        return self.name.length;
    }
});

myApp.controller('mainController', ['$scope', '$log', 'nameService', function ($scope, $log, nameService) {

    // Angular JS non fa il binding automatico tra $scope e i service, dobbiamo farlo a mano con $scope.$watch()
    // In old school Jquery si faceva con gli hidden input field
    // Funziona perché è una single page application (sennò non faceva)
    $scope.name = nameService.name;

    $scope.$watch('name', function(){
        nameService.name = $scope.name;
    });

    $log.log(nameService.name);
    $log.log(nameService.nameLength());
}]);

myApp.controller('secondController', ['$scope', '$log', '$routeParams', 'nameService', function ($scope, $log, $routeParams, nameService) {

    $scope.name = nameService.name;

    $scope.$watch('name', function(){
        nameService.name = $scope.name;
    });

    $scope.num = $routeParams.num || 1;
}]);
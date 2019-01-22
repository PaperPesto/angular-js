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
        address: '555 main St.',
        city: 'New York',
        state: 'NY',
        zip: '11111'
    }

    $scope.formattedAddress = function(person){
        return person.address + ', ' + person.city + ', ' + person.state + ' ' + person.zip;
    }
}]);

myApp.controller('secondController', ['$scope', '$log', '$routeParams', function ($scope, $log, $routeParams) {


}]);

myApp.directive("searchResult", function () {
    return {
        restrict: 'EACM',
        templateUrl: 'directives/searchresult.html',    // View
        replace: true,
        // Model (isolated scope)
        scope: {
            personObject: "=",
            formattedAddressFunction: "&"   // unpercent indica ad angular che è un function
        }
    }
});

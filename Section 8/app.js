// module
var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);

// routes
weatherApp.config(function ($routeProvider) {

    $routeProvider

        .when('/', {
            templateUrl: 'pages/home.html',
            controller: 'homeController'
        })

        .when('/forecast', {
            templateUrl: 'pages/forecast.html',
            controller: 'forecastController'
        })
});

// services
weatherApp.service('cityService', function () {
    this.city = "New York, NY";
});

// controllers
weatherApp.controller('homeController', ['$scope', 'cityService', function ($scope, cityService) {

    $scope.city = cityService.city;

    $scope.$watch('city', function () {
        cityService.city = $scope.city;
    });

}]);

weatherApp.controller('forecastController', ['$scope', '$resource', '$http', 'cityService', function ($scope, $resource, $http, cityService) {

    $scope.city = cityService.city;

    var url = "http://localhost:3000";

    $http.get(url + '/weather/getForecast', {
        q: 'ciao',
        appid: 'aaa'
    })
    .success(function (result) {
        $scope.rules = result;
        console.log('Success: ', result);
    })
    .error(function (data, status) {
        console.log('Error: ', data);
    });

    $scope.weatherAPI = $resource("http://localhost:3000/weather/getForecast");

    $scope.weatherResult = $scope.weatherAPI.get({ q: $scope.city, appid: 'b5bfaa612224f9cf283fb507a6d0e257' });

    console.log($scope.weatherResult);

}]);
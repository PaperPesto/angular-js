// MODULE
var myApp = angular.module('myApp', []);

// CONTROLLERS
myApp.controller('mainController', ['$scope', '$filter', '$http', function ($scope, $filter, $http) {

    $scope.characters = 5;

    $scope.handle = '';
    $scope.lowercasehandle = function () {
        return $filter('lowercase')($scope.handle);
    }


    var url = 'http://localhost:3000/';

    $http.get(url + 'getRules')
        .success(function (result) {
            $scope.rules = result;
            console.log('Success: ', result);
        })
        .error(function (data, status) {
            console.log('Error: ', data);
        });


    $scope.newRule = '';

    $scope.addRule = function () {

        $http.post(url + 'insertRule', { rulename: $scope.newRule })
            .success(function (result) {
                console.log(result);
                $scope.rules = result;
                $scope.newRule = '';
            })
            .error(function (data, status) {
                console.log(data);
            });
    }
}]);
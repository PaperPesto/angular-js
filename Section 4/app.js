// MODULE
var myApp = angular.module('myApp', []);

// CONTROLLERS
myApp.controller('mainController', ['$scope', '$timeout', '$filter', function ($scope, $timeout, $filter) {

    // Tutto ciò dentro lo scope diventa visibile nell'html. $scope è l'equivalente del ViewModel
    $scope.name = "Tony";
    $scope.topic = "string interpolation";

    $scope.handle = '';
    $scope.lowercasehandle = function(){
        return $filter('lowercase')($scope.handle);
    }

    $scope.$watch('handle', function(newValue, oldValue){
        console.info('Changed!');
        console.log('Old:', oldValue);
        console.log('New:', newValue);
    });

    // Questa funzone rimane all'interno del contesto di AngularJS, quindi angular riesce a bindare le modifiche apportate alle proprietà dell'html
    $timeout(function(){
        $scope.handle = 'newtwitterhandle';
        console.log('Scope changed!');
    }, 3000);
}]);
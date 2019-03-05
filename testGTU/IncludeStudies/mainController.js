angular.module('include.studies', []).controller('mainController', function ($scope) {

    console.log('start include.studies');

    $scope.myPrimitive = 50;
    $scope.myObject = { aNumber: 11 };
});
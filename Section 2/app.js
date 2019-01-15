// MODULE
var myApp = angular.module('myApp', []);

// CONTROLLERS
myApp.controller('mainController', function ($scope) {

    // La variabile $scope è bindata con l'html
    // posso definirci sopra quello che preferisco, a partire da proprietà fino a funzioni
    $scope.name = "Jane DOe";
    $scope.occupation = "Coder";
    $scope.getName = function () {
        return 'John Doe';
    }

    $scope.getName();

    console.log($scope);
});

function searchPeople(firstName, lastName, hieght, age, occupation) {
    return 'Jane Doe';
}

// Il nome della funzione "searchPeople" contiene la definizione (sotto forma di stringa) della funzione stessa
// È il modo in cui AngularJS esegue la Dependency Injection
console.log(searchPeople);
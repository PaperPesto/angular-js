// Section 3

// MODULE
var myApp = angular.module('myApp', ['ngMessages', 'ngResource']);

// CONTROLLERS
// myApp.controller('mainController', function ($scope, $log) {
myApp.controller('mainController', ['$scope', '$log', function ($scope, $log) {
    // ATTENZIONE ---
    // In questo modo il minifier non tocca le stringhe
    // In questa versione invece l'ordine dei parametri importa, perché sto passando i parametri dentro un array
    // e lui matcha gli argomenti della funzione -ordinatamente- con gli elementi dell'array
    console.log($scope);

    console.log($log);
}]);
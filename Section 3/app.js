// Section 3

// MODULE
// Ho aggiunto un modulo (contenitore di servizi) importandolo nel tag script dell'html
var myApp = angular.module('myApp', ['ngMessages']);

// CONTROLLERS
myApp.controller('mainController', function ($scope, $log, $filter) {

    // Gli argomenti sono invarianti per posizione (posso invertirne l'ordine, tanto Angular li parsa per DI)

    // $scope service
    console.log($scope);

    // $log service
    console.log($log);

    $log.log("Hello there, Log message");
    $log.info("Hello there, Info message");
    $log.warn("Hello there, Warning message");
    $log.debug("Hello there, Debug message");
    $log.error("Hello there! Error message");

    // $filter service
    console.log($filter);
    $scope.name = 'John';
    $scope.formattedname = $filter('uppercase')($scope.name);
    $log.info("scope.name:", $scope.name);
    $log.info("scope.formattedname:", $scope.formattedname);
});

// [Lect. 14] Aggiungere un "service" che non sia built-inato nelle librerie standard di angularJS
// Andare su angular.org e c'è un listone di vari file JavaScript
// alcuni di loro contengono altre definizioni di Services, come ad esempio angular-messages.js
// ognuno di questi file è un "modulo" angular il cui nome inizia per "ng"
//
// Possiamo importare a mano questi moduli inserendoli nel tag script dell'html dopo di angular stesso (vedi html in questa cartella)
// Prima di averlo a disposizione dobbiamo dire ad angular di importarlo e inserirlo nel motore di dipendenze
// Dobbiamo aggiungerlo (vedi inizio del file) nell'array dei moduli
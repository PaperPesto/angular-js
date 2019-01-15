// MODULE
var myApp = angular.module('myApp', []);

// CONTROLLERS
// Equivalenti dei Component
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

// [Lez. 13] Il nome della funzione "searchPeople" contiene la definizione (sotto forma di stringa) della funzione stessa
// È il modo in cui AngularJS esegue la Dependency Injection
console.log(searchPeople);


// $scope è un particolare ServiceUIFrameContext. Ne esistono SpeechRecognitionAlternative, come ad esempio services per il logging ($log)
// oppure per altre funzionalità (come se $scope venisse iniettato da qualcuno al momento del bisogno, ed è una parola chiave).$scope

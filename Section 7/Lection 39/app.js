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
    $scope.people = [
        {
            name: 'John Doe',
            address: '555 main St.',
            city: 'New York',
            state: 'NY',
            zip: '11111'
        },
        {
            name: 'Jane Doe',
            address: '333 second St.',
            city: 'Buffalo',
            state: 'NY',
            zip: '22222'
        },
        {
            name: 'George Doe',
            address: '111 third St.',
            city: 'Miami',
            state: 'FL',
            zip: '33333'
        }]

    $scope.formattedAddress = function (person) {
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
            formattedAddressFunction: "&"
        },
        // aka "initialize"
        compile: function (elem, attrs /*NB non c'è scope*/) {
            // NB. Non si usa quasi mai compile! Si preferisc usare "link"
            // compile serve per intercettare il dom che verrà utilizzato dalla directive. È l'html originale, che poi viene passato ai link che generano l'html finale da visualizzare.

            console.log('Compiling...');
            // elem è l'html della directive iniettato dalla proprietà templateUrl, in questo caso un <a>...</a>
            // Compiling viene lanciato una sola volta, mentre i Pre(Post)-linking viene lanciato 3 volte (una per ng-repeat)
            //elem.removeAttr('class');   // prende al volo l'html e lo modifica prima di renderizzarlo e bindarlo allo scope (infatti non ho scope nella funzione di compile)
            console.log(elem.html());

            return {
                // pre-link
                pre: function (scope, element, attrs) {
                    // Il linking viene lanciato sempre alla creazione della directive (NB c'è scope nella funzione)
                    console.log('Pre-linking...');
                    console.log(element);
                },
                // post-link - aka "onBind" (cioé quando viene bindato il model all'html, cioé il viewmodel)
                post: function (scope, element, attrs) {
                    // Sono dentro il personalissimo scope della directive
                    // scope è il model intra-directiv
                    // element è l'html (view) della directive
                    // attrs sono gli attributi della directive, ad esempio ngRepeat, personObject, class, formattedAddressFunction
                    console.log('Post-linking...');
                    console.log('scope - model', scope);
                    console.log('element - view', element.html());
                    console.log('attrs - attributi', attrs);
                    if (scope.personObject.name == 'Jane Doe') {
                        element.removeAttr('class');
                    }
                    console.log(element);
                }
            }
        }
    }
});

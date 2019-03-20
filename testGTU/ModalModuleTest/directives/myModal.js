app.directive('myModal', function () {
    return {
        templateUrl: 'directives/basic-modal.html',
        scope: {
            content: "=htmlContent"
        },
        link: function (scope, element, attrs) {
            console.log('Post-linking...');
            console.log('scope - model', scope);
            console.log('element - view', element.html());
            console.log('attrs - attributi', attrs);
            console.log('content', scope.content);
        }
    }
});
app.service('modalService', function () {
    console.log('hello');

    this.getName = function(){
        return 'modalService';
    }
});

// myApp.service('unicornLauncher', ["apiToken", UnicornLauncher]);
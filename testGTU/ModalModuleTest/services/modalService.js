app.service('modalService', ['$uibModal', '$log', function ($uibModal, $log) {
    console.log('hello');

    this.getName = function(){
        return 'modalService';
    }

    this.openModal = function (size, template_file) {

        var modalInstance = $uibModal.open({
            animation: true,
            templateUrl: 'templates/' + template_file,
            controller: 'ModalInstanceCtrl',
            size: size,
            resolve: {
                items: function () {
                    return ['item1', 'item2', 'item3'];
                },
                size: function () {
                    return size;
                }
            }
        });

        return modalInstance.result;
    };
}]);

// myApp.service('unicornLauncher', ["apiToken", UnicornLauncher]);standard-modal.html'
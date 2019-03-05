app.service('modalService', ['$uibModal', '$log', function ($uibModal, $log) {
    console.log('hello');

    this.getName = function(){
        return 'modalService';
    }

    this.openModal = function (size) {

        var modalInstance = $uibModal.open({
            animation: true,
            templateUrl: 'templates/ModalContent.html',
            controller: 'ModalInstanceCtrl',
            size: size,
            resolve: {
                items: function () {
                    return ['item1', 'item2', 'item3'];
                }
            }
        });

        modalInstance.result.then(function (selectedItem) {
            this.payload = selectedItem;
        }, function () {
            $log.info('Modal dismissed at: ' + new Date());
        });
    };
}]);

// myApp.service('unicornLauncher', ["apiToken", UnicornLauncher]);
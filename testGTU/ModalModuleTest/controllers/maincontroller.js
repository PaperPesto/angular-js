app.controller('ModalDemoCtrl', ['$scope', 'modalService', '$log', function ($scope, modalService, $log) {
    // NOTA BENE che questo controller non dipende da ui.Bootstrap! (bensì da modalService, che a sua volta dipende da ui.Bootstrap)

    console.log('ModalDemoCtrl start');

    console.log('name from serviceAAA', modalService.getName());

    $scope.items = ['item1', 'item2', 'item3'];

    $scope.animationsEnabled = true;

    $scope.open = function (size, file_path) {
        modalService
            .openModal(size, file_path)
            .then( function (payload) {
                this.payload = payload;
                $log.info('Modal closed successfully with payload', this.payload);
            }, function () {
                $log.error('Modal dismissed at: ' + new Date());
            });
    }

    $scope.toggleAnimation = function () {
        $scope.animationsEnabled = !$scope.animationsEnabled;
    };

    console.log('ModalDemoCtrl stop');
}]);
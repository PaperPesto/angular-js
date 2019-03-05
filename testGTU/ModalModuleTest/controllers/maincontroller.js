app.controller('ModalDemoCtrl', ['$scope', 'modalService', function ($scope, modalService) {
    // NOTA BENE che questo controller non dipende da ui.Bootstrap! (bensì da modalService, che a sua volta dipende da ui.Bootstrap)

    console.log('ModalDemoCtrl start');

    console.log('name from serviceAAA', modalService.getName());

    $scope.items = ['item1', 'item2', 'item3'];

    $scope.animationsEnabled = true;

    $scope.open = modalService.openModal;

    $scope.toggleAnimation = function () {
        $scope.animationsEnabled = !$scope.animationsEnabled;
    };

    console.log('ModalDemoCtrl stop');
}]);
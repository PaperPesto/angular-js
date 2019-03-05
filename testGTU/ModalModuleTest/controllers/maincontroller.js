app.controller('ModalDemoCtrl', ['$scope', '$uibModal', '$log', 'modalService', function ($scope, $uibModal, $log, modalService) {

    console.log('ModalDemoCtrl start');

    console.log('name from service', modalService.getName());

    $scope.items = ['item1', 'item2', 'item3'];

    $scope.animationsEnabled = true;

    $scope.open = function (size) {

        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'template/ModalContent.html',
            controller: 'ModalInstanceCtrl',
            size: size,
            resolve: {
                items: function () {
                    return $scope.items;
                }
            }
        });

        modalInstance.result.then(function (selectedItem) {
            $scope.selected = selectedItem;
        }, function () {
            $log.info('Modal dismissed at: ' + new Date());
        });
    };

    $scope.toggleAnimation = function () {
        $scope.animationsEnabled = !$scope.animationsEnabled;
    };

    console.log('ModalDemoCtrl stop');
}]);


// Please note that $uibModalInstance represents a modal window (instance) dependency.
// It is not the same as the $uibModal service used above.

// 3 - Richiamo il modulo modal.module.test e ne definisco un altro controller
angular.module('modal.module.test').controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, items) {

    console.log('ModalInstanceCtrl start');

    $scope.items = items;
    $scope.selected = {
        item: $scope.items[0]
    };

    $scope.ok = function () {
        $uibModalInstance.close($scope.selected.item);
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };

    console.log('ModalInstanceCtrl start');
});
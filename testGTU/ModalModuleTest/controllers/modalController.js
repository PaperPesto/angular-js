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
angular.module('modal.module.test').controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, items, size) {

    console.log('ModalInstanceCtrl start');
    console.log('items:', items);
    console.log('size:', size);

    $scope.title = 'Modal title from Pippo';
    $scope.size = size;

    $scope.items = items;
    $scope.selected = {
        item: $scope.items[0]
    };

    $scope.ok = function () {
        // Qui ripasso la roba al controller chiamante
        $uibModalInstance.close($scope.selected.item);
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };

    console.log('ModalInstanceCtrl start');
});
angular.module("Todos").controller("TodoController", [
  "$scope",
  function ($scope) {
    var pooling = setInterval(function () {
      $scope.$digest();
    }, 5000);

    $scope.$on("$destroy", function () {
      clearInterval(pooling);
    });

    $scope.save = function () {
      $scope.todo.$update();
    };

    $scope.remove = function () {
      $scope.modelSubmitPromise = $scope.todo.$remove(function () {
        $scope.$emit("todo-deleted", $scope.todo);
      });
    };
  }
]);

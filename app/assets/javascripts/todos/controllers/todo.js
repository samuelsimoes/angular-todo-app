angular.module("Todos").controller("TodoController", [
  "$scope",
  function ($scope) {
    $scope.save = function () {
      $scope.todo.$update();
    };

    $scope.remove = function () {
      $scope.todo.$remove(function () {
        $scope.$emit("todo-deleted", $scope.todo);
      });
    };
  }
]);

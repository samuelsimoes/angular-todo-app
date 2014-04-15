angular.module("Todos").controller("NewTodoFormController", [
  "$scope", "Todo",
  function ($scope, Todo) {
    var buildNewModel = function() {
      $scope.todo = new Todo({ title: "" });
    };

    $scope.$on("new-todo-saved", function () {
      buildNewModel();
    });

    $scope.save = function () {
      $scope.todo.$save(function () {
        $scope.$emit("new-todo-saved", $scope.todo);
      });
    };

    buildNewModel();
  }
]);

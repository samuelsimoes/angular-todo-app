angular.module("Todos").controller("NewTodoFormController", [
  "$scope", "Todo",
  function ($scope, Todo) {
    var buildNewModel = function() {
      $scope.todo = new Todo({ title: "" });
    };

    $scope.$on("new-todo-saved", function () {
      $scope.errors = {};
      buildNewModel();
    });

    $scope.save = function () {
      $scope.modelSubmitPromise = $scope.todo.$save(function () {
        $scope.$emit("new-todo-saved", $scope.todo);
      }, function (responseHeaders) {
        $scope.errors = responseHeaders.data.errors;
      });
    };

    buildNewModel();
  }
]);

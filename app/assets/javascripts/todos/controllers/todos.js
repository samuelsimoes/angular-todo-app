angular.module("Todos").controller("TodosController", [
  "$scope", "Todo",
  function ($scope, Todo) {
    $scope.todos = Todo.query();

    var removeTodoFromCollection = function (event, todo) {
      $scope.todos.splice($scope.todos.indexOf(todo), 1);
    };

    $scope.$on("todo-deleted", removeTodoFromCollection);
  }
]);

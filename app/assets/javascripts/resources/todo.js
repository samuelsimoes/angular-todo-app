angular.module("TodoApp").service("Todo", [
  "$resource",
  function ($resource, $httpProvider) {
    return $resource(
      "/todos/:id.json",
      { id: "@id" },
      { "update": { method:"PUT" } }
    );
  }
]);

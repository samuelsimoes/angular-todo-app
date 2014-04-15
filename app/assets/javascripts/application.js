//= require jquery
//= require jquery_ujs
//= require angular
//= require angular.resource

angular.module("Todos", []);
angular.module("TodoApp", ["ngResource", "Todos"]).config([
  "$httpProvider",
  function ($httpProvider) {
    $httpProvider.defaults.headers.common["X-CSRF-Token"] =
      $("meta[name=csrf-token]").attr("content");
  }
]);

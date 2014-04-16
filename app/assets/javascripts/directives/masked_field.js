//= require jquery.inputmask
angular.module("TodoApp").directive("maskedField", function () {
  return {
    replace: true,
    link: function ($scope, $el, attrs) {
      var mask;

      switch (attrs.maskedField) {
        case "date":
          mask = "m/d/y";
          break;
        case "datetime":
          mask = "m/d/y h:s";
          break;
        default:
          break;
      }

      $el.inputmask(mask);
    }
  };
});

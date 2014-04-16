angular.module("TodoApp").directive("formGroupValidate", function () {
  return {
    link: function ($scope, $el, attrs) {
      $scope.$watch("errors", function (newData) {
        $el.removeClass("has-error");

        var helpBlock = $el.find("span.help-block");

        if (helpBlock.length === 0) {
          $el.append("<span class=\"help-block\"></span>");
        }

        helpBlock.empty();

        if ($scope.errors && $scope.errors[attrs.formGroupValidate]) {
          $el.addClass("has-error");
          helpBlock.html($scope.errors[attrs.formGroupValidate][0]);
        }
      });

      return $el;
    }
  };
});

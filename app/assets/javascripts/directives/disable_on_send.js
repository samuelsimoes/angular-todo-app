angular.module("TodoApp").directive("disableOnSend", function () {
  return {
    link: function ($scope, $el, attrs) {
      $scope.$watch("modelSubmitPromise", function (newData, oldData) {
        if (!newData) { return; }

        var previousText = $el.html();

        $el.attr("disabled", "disabled");
        $el.html(attrs.disableOnSend);

        $scope.modelSubmitPromise["finally"](function () {
          $el.removeAttr("disabled");
          $el.html(previousText);
        });
      });

      return $el;
    }
  };
});

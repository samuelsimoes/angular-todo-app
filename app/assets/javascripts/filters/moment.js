//= require moment
angular.module("TodoApp").filter("moment", function () {
  return function (text, dateFormat) {
    var time = moment(text),
        formated;

    switch (dateFormat) {
      case "timeago":
        formated = time.fromNow();
        break;
      case "calendar":
        formated = time.calendar();
        break;
      default:
        formated = time.format(dateFormat);
        break;
    }

    return formated;
  };
});

function todoAutofocus() {
  return {
    restrict: 'A',
    scope: false,
    link: function($scope, $element, $attrs) {
      const element = $element[0]
      $scope.$watch($attrs.todoAutofocus, function(newValue, oldValue) {
        if(!newValue) {
          return
        }
        setTimeout(function() {
          element.focus()
        }, 0)
      })
    }
  }
}

angular
  .module('app')
  .directive('todoAutofocus', todoAutofocus)

app.directive('projectView', function() {
  return {
    restrict: 'E',
    scope: {
      project: '='
    },
    templateUrl: 'js/directives/project.html'
  };
});
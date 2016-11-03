app.directive('experienceView', function() {
  return {
    restrict: 'E',
    scope: {
      experience: '='
    },
    templateUrl: 'js/directives/experience.html'
  };
});
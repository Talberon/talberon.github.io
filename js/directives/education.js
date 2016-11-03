app.directive('educationView', function() {
  return {
    restrict: 'E',
    scope: {
      education: '='
    },
    templateUrl: 'js/directives/education.html'
  };
});
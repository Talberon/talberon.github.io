app.directive('repoView', function() {
  return {
    restrict: 'E',
    scope: {
      repo: '='
    },
    templateUrl: 'js/directives/repos.html'
  };
});
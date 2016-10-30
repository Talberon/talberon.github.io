app.controller('MainController', ['$scope', '$sce', 'githubRepos', 'githubREADMEs', function($scope, $sce, githubRepos, githubREADMEs) {
    $scope.nonsense = 'PROJECTSSSS';

    $scope.projects = [{
        title: 'Ars Tactica',
        technologies: ['C#','Monogame'],
        description: 'Tactical Game',
        url: 'https://talberon.github.io'
    },
    {
        title: 'Web Portfolio',
        technologies: ['HTML','CSS','JavaScript','AngularJS','Bootstrap'],
        description: 'My own personal portfolio!',
        url: 'https://talberon.github.io'
    },
    {
        title: 'Game Roulette',
        technologies: ['C#','ASP.NET', 'Entity Framework', 'SQL Server'],
        description: 'Data application that helps you decide which game in your collection to play next!',
        url: 'https://talberon.github.io'
    }];

    githubRepos.success(function(data){
        $scope.repositories = data;

        githubREADMEs.getAPIgithubREADMEs().success(function(data){
            $scope.readmes = $sce.trustAsHtml(data);
        });
    });

    $scope.updateREADME = function(repo){
        $scope.selectedProject = repo.name;
        githubREADMEs.getAPIgithubREADMEs(repo.url).success(function(data){
            $scope.readmes = $sce.trustAsHtml(data);
        }).error(function(err){
            $scope.readmes = $sce.trustAsHtml("Not found.");
        });
    };

}]);

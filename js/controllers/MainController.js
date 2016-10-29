app.controller('MainController', ['$scope', 'github', function($scope, github) {
    $scope.nonsense = 'Project View';

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

    github.success(function(data){
        $scope.repositories = data;
    });
}]);

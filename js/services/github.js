app.factory('githubRepos', function($http) {
    $http.defaults.headers.get = {'Content-Type': 'application/vnd.github.v3.html'}

    return $http.get('https://api.github.com/users/talberon/repos').success(function(data){
        return data;
    }).error(function(err){
        return err;
    });
});

app.factory('githubREADMEs', function($http) {
    $http.defaults.headers.get = {'Accept': 'application/vnd.github.v3.html'};

    var repoLink = '';
    var APIgithubREADMEs = {};

    APIgithubREADMEs.getAPIgithubREADMEs = function(url){
        if (url == null){
            url = repoLink;
        }
        return $http.get(url + '/readme').success(function(data){
            return data;
        }).error(function(err){
            return err;
        });
    }
    return APIgithubREADMEs;
});
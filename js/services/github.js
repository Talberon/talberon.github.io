app.factory('github', function($http) {
    return $http.get('https://api.github.com/users/talberon/repos').success(function(data){
        return data;
    }).error(function(err){
        return err;
    });
});
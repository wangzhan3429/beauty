define(['App'], function (app) {
    return app.controller('fuli', ['$routeParams', '$scope', '$rootScope', '$http', function ($routeParams,
        $scope, $rootScope, $http) {

        $http.get('assets/fuli.json').
        success(function (data) {

            console.log('------' + data.error);

            var param = $routeParams["sub"];
            console.log('ooooo===' + param);
            $rootScope.msg = param;
        })
    }])


})

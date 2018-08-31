define(['App'], function (app) {
    return app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'js/view/android.html',
                controller: 'con',
            })
            .when('/android', {
                template: 'lalalalal',

            })
            .when('/fuli/:sub', {
                templateUrl: 'js/view/fuli.html',
                controller: 'fuli',
            })
            .when('/ios', {
                templateUrl: 'js/view/ios.html',

            })
            .when('/web', {
                templateUrl: 'js/view/web.html',
                controller: 'web'
            })
            .when('/video', {
                template: '这是打印机页面'
            })
            .when('/resource', {
                template: '这是打印机页面'
            })
			.when('/fenye',{
				templateUrl: 'js/view/fenye.html',
				controller: 'fenye'
			})
            .otherwise({
                redirectTo: '/'
            });

        //$locationProvider.html5Mode(true).hashPrefix('!');
    }])


})

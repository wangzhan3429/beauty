require.config({
    baseUrl: 'js/',
    paths: {
        "jquery": "libs/jquery203",
        "fastclick": "libs/fastclick",
        "blocksit": "libs/blocksit",
        "idTabs": "libs/idTabs",
        "stickUp": "libs/stickUp",
        "angular": "libs/angular.min",
        "angular-route": "libs/angular-route.min",
        "angular-sanitize": "libs/angular-sanitize.min",
        'bootstrap': 'libs/bootstrap.min',
        "App": "app",
		"route" : "route/appRoute",

		'con':'controllers/con',
		'fuli':'controllers/fuli',
		'web':'controllers/web',
		'httpInterrupt':'controllers/httpInterrupt',
		// 'pageNavi':'controllers/fenyeservice',
		'fenye':'controllers/fenye',
		
    },

    shim: {
        'angular': {
            exports: 'angular'
        },
        'angular-route': {
            deps: ["angular"],
            exports: 'angular-route'
        },
        'angular-sanitize': {
            deps: ["angular"],
            exports: 'angular-sanitize'
        },
        'blocksit': {
            deps: ["jquery", "angular"],
            exports: 'blocksit'
        },
        'idTabs': {
            deps: ['jquery'],
            exports: 'idTabs'
        },
        'stickUp': {
            deps: ['jquery'],
            exports: 'stickUp'
        },
// 
// 		}
//         'bootstrap': {
//             deps: ['jquery', 'css!carousel.css', 'css!bootstrap.min.css'], //注意这里不能省略后缀名
//             exports: 'bootstrap'
//         },

    }
});

require(['jquery', 'angular', 'angular-route', 'angular-sanitize', 'App','route','con','fuli','web','httpInterrupt','fenye'], function ($, angular) {
    $(function () {
        angular.bootstrap(document, ['testApp']);
    })
});
// 
// 为什么 shim没有加 结果在appRoute文件中找不到moudle

// require(['jquery','angular','angular-route'],function ($,angular){
// 
//       $(function () {
// 
//             angular.bootstrap(document,["pinganApp"]);
// 
//       })
// 
// });

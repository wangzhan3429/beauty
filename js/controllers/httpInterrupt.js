/**
 * 拦截器 全局$http注入loading效果
 */
define(['jquery','angular'], function($,angular){
      
    angular.module('ajaxLoading', [])
 
    .config(function($httpProvider) {
      $httpProvider.interceptors.push('httpInterrupt');
    })
     
    .directive('loading', function() {
      return {
        replace: true,
        restrict: 'AE',
        template:'<div class="back-layer"><div class="loading">'
                +'<img src="img/729.GIF">'
                +'</div></div>',
        link: function($scope, $element, attrs) {
            var top = $(window).height()/2 - 25;
            var left = $(window).width()/2 - 25;
//             $('.loading').css({
//               top: top,
//               left: left
//             });
            //$(tpl).appendTo('body');
        }
      };
    })
     
    .factory('httpInterrupt', function($q, $rootScope) {

      return {
        request: function(config) {
				 console.log('---request-success');	
          $(".back-layer").show();
          return config || $q.when(config);
        },
        response: function(response) {
					console.log('----response');
          $(".back-layer").hide();
          return response || $q.when(response);
        },
        responseError: function(rejection) {
					console.log('----responseError');
          $(".back-layer").hide();
          return $q.reject(rejection);
        }
      };
    });

})
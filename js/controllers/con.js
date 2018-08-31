define(['App'], function(app){
      
   return app.controller('con', ['$scope','$rootScope','$http', function ($scope,$rootScope,$http) {

            $scope.msg = "基金详情";
         
            $http.get('assets/img.json').
              success(function(data) {
                $scope.msg = "基金ssd详情"+data;
								console.log('------'+data);
								$rootScope.url1=data.results[0].url;
								$rootScope.url2=data.results[1].url;
								$rootScope.url3=data.results[2].url;

//                 $scope.jj = data;
//                 $scope.$emit('dataloaded');//发送器
              });
							$http.get('assets/tag.json').
							 success(function(data){
								console.log('===='+data.titles[0].title);
								$rootScope.titles=data.titles;
							});
							
							$http.get('assets/android.json').
							success(function(data){
								console.log('===='+data.results[0].desc);
								$rootScope.datas = data.results;
							});
					
    }])

})


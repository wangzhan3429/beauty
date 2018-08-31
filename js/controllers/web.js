define(['App'], function (app) {
    return app.controller('web', ['$sce','$routeParams', '$scope', '$rootScope', '$http','$location', function ($sce,$routeParams,
        $scope, $rootScope, $http,$location) {

        $http.get('assets/web.json').
        success(function (data) {

            console.log('------' + data.error);

            var param = $routeParams["sub"];
            console.log('ooooo===' + param);
            $rootScope.msg = param;
        });
		
		$http.get('assets/html.json')
		.success(function(data){
			$scope.myHTML = $sce.trustAsHtml(data.branch_remark);
		});
		
	
		
		
// 		$http.get("http://yourdomain.com/aaa.php?pageNum="+2).success(function(res){
//             console.log("sth success...")
// // 			//无数据时，不显示分页
// // 			if(res.data.list.length>0){
// // 				$scope.showPageNavi = true;
// // 			};
// // 			$scope.myList = res.data.list;
// // 			$scope.pageCur = page;
// // 			//从接口返回的数据中拿到总页数
// // 			$scope.pageAll = res.data.totalPage;
// // 			//调用分页算法服务取得要显示的页码数组
// // 			$scope.pages = pageNavi.showLength($scope.pageCur,$scope.pageAll,5);
// 		}).error(function(){
// 			console.log("sth error...")
// 		});
		
		$scope.switchs=function(){
			console.log('ooo' +$location.absUrl());
			$location.url('/fuli');
			
		}
    }])


})

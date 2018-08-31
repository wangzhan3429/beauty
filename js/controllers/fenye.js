define(['App'], function (app) {
    return app.controller('fenye', ['$scope', '$http', function (
        $scope, $http) {
        $scope.loadPage = function (page) {
            $http.get('assets/fenye.json').
            success(function (res) {

                console.log('------' + res);
                //无数据时，不显示分页
                if (res.data.length > 0) {
                    $scope.showPageNavi = true;
                };
                $scope.myList = res.data;
                $scope.pageCur = page;
                //从接口返回的数据中拿到总页数
                $scope.pageAll = res.totalPage;
                //调用分页算法服务取得要显示的页码数组
                $scope.pages = showLength($scope.pageCur, $scope.pageAll, 5);

            });
        }

        $scope.loadPage($scope.pageCur);

        function showLength(current, length, displayLength) {
            var indexes = [];
            var start = Math.round(current - displayLength / 2);
            var end = Math.round(current + displayLength / 2);
            if (start <= 1) {
                start = 1;
                end = start + displayLength - 1;
                if (end >= length - 1) {
                    end = length - 1;
                }
            }
            if (end >= length - 1) {
                end = length;
                start = end - displayLength + 1;
                if (start <= 1) {
                    start = 1;
                }
            }
            for (var i = start; i <= end; i++) {
                indexes.push(i);
            }
            return indexes;
        }



    }])


})

/**
 * Created by kauriHealth on 2017/9/19.
 */

(function (angular) {

    var app = angular.module('appTest',[]);

    // app.filter('myfilter',function () {
    //     return function (item) {
    //         return item + '你好';
    //     }
    // });
    app.controller('appvc',['$scope',function ($scope) {

        $scope.images = [];
        /*
         *file控件的值改变
         */
        $scope.valueChange = function (){

            var file = Id("file");
            var agent = navigator.userAgent;
            angular.forEach(file.files,function (item) {
                var url = window.URL.createObjectURL(item);
                $scope.images.push(url);
            })

            //alert($scope.images.length);
            $scope.$apply();
        };
        /*
         *删除选中商品
         */
        $scope.deleteCurrentImg = function (string) {
            //alert(string);
            var index = findIndex(string);
            //alert(index);
            $scope.images.splice(index,1);
            $scope.$apply();
        };
        /*
         *查找选中商品的索引
         */
        var findIndex = function (str) {
            var Index = -1;
            angular.forEach($scope.images,function (item,index) {
                if (str ==  item){
                    Index = index;
                    return Index;
                }
            });
            return Index;
        };

    }])

})(angular);
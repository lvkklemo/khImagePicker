/**
 * Created by kauriHealth on 2017/9/25.
 */

(function (angular) {

    var app = angular.module('myapp',[]);

    app.controller('myPicsVC',['$scope',function ($scope) {

        $scope.name = 'LLLLLL';

        $scope.pics = [
            "http://fuss10.elemecdn.com/8/71/c5cf5715740998d5040dda6e66abfjpeg.jpeg?imageView2/1/w/180/h/180",
            "http://fuss10.elemecdn.com/b/6c/75bd250e5ba69868f3b1178afbda3jpeg.jpeg?imageView2/1/w/180/h/180",
            "http://fuss10.elemecdn.com/f/96/3d608c5811bc2d902fc9ab9a5baa7jpeg.jpeg?imageView2/1/w/180/h/180",
            "http://fuss10.elemecdn.com/6/ad/779f8620ff49f701cd4c58f6448b6jpeg.jpeg?imageView2/1/w/180/h/180",

        ];

        $('.pic-list').width($scope.pics.length*120+18);
        var myScroll;
        myScroll = new IScroll('.pic-wrapper', {
            scrollX: true,
            scrollY: false,
            mouseWheel: true,
            zoom:true,
//          click:true,
//             taps:true
        });

        $scope.imagesSrc = 'http://fuss10.elemecdn.com/8/71/c5cf5715740998d5040dda6e66abfjpeg.jpeg?imageView2/1/';

        $scope.showFullImageView = false;

        $scope.showFullImage = function(img){

            $scope.showFullImageView = !$scope.showFullImageView;
            var index = findIndex(img);
            $scope.imagesSrc =  $scope.pics[index];
        };

        $scope.changeStatus = function(){
            $scope.showFullImageView = !$scope.showFullImageView;
        };

        var findIndex = function(img){
            var findIndex = -1;
            angular.forEach($scope.pics, function (item,index) {
                if(img == item){
                    findIndex = index;
                    return findIndex;
                }

            })

            return findIndex;
        }

    }])


})(angular);
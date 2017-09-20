
## 图片选择

- 主要功能：使用angular实现HTML界面相册图片选择

* 访问原生系统(苹果)相册,选择相册图片支持单选、多选。
* 由于系统的file标签的样式自定义了访问相册的选择按钮
* 九宫格显示照片使用浮动布局+定位的方式

- 知识总结

* 对照片墙进行添加和删除 

```
$scope.images.push(url);
$scope.images.splice(index,1);
```

* 检查数据变化跟新view

```
$scope.$apply();
```

* 遍历相册

```
//第一个参数item对应数组里的每一个对象,第二个参数索引
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
```

​

- 遇到的问题: input标签的file类型使用angular指令ng-change="valueChange()"无效

必须使用 onchange="valueChange()"

```
<input type="file" name="file" accept="image/png,image/jpg,image/jpeg" id="file" multiple ng-model="value1" onchange="angular.element(this).scope().valueChange()"/>
```






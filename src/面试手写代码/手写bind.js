// eslint-disable-next-line no-extend-native
Function.prototype.myBind = function (context = window) {
  let argArr = Array.from(arguments);
  let arg = argArr.slice(1);
  let self = this;
  return function () {
    let newArg = Array.from(arguments);
    console.log(context);
    self.apply(context, arg.concat(newArg));
  };
};

//  测试
var name = 'window name';
var obj = {
  name: 'obj name',
};
function fn() {
  console.log(this.name, [...arguments]);
}
fn(1, 2, 3, 4); // 直接执行，this指向window
fn.myBind(obj, 1, 2)(3, 4); // mybind改变this指向
fn.bind(obj, 1, 2)(3, 4); // 原生bind
// 以上执行结果如下：
// window name [1, 2, 3, 4]
// obj name [1, 2, 3, 4]
// obj name [1, 2, 3, 4]

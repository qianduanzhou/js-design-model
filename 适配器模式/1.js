/**
 * 将一个类的接口转化为另外一个接口，以满足用户需求，使类之间接口不兼容问题通过适配器得以解决。
 */
class Plug {
    getName() {
        return 'iphone充电头';
    }
}

class Target {
    constructor() {
        this.plug = new Plug();
    }
    getName() {
        return this.plug.getName() + ' 适配器Type-c充电头';
    }
}

let target = new Target();
console.log(target.getName()); // iphone充电头 适配器转Type-c充电头

/**
 * 优点
 * 可以让任何两个没有关联的类一起运行。
 * 提高了类的复用。
 * 适配对象，适配库，适配数据
 */

/**
 * 缺点
 * 额外对象的创建，非直接调用，存在一定的开销（且不像代理模式在某些功能点上可实现性能优化)
 * 如果没必要使用适配器模式的话，可以考虑重构，如果使用的话，尽量把文档完善
 */

/**
 * 场景
 * 整合第三方SDK
 * 封装旧接口
 */
// 自己封装的ajax， 使用方式如下
ajax({
    url: '/getData',
    type: 'Post',
    dataType: 'json',
    data: {
        test: 111
    }
}).done(function() {})
// 因为历史原因，代码中全都是：
// $.ajax({....})

// 做一层适配器
var $ = {
    ajax: function (options) {
        return ajax(options)
    }
}


//vue的computed

/**
 * 不同点
 * 适配器与代理模式相似
 * 适配器模式： 提供一个不同的接口（如不同版本的插头）
 * 代理模式： 提供一模一样的接口
 */
//是为一个对象提供一个代用品或占位符，以便控制对它的访问
/**
 * 假设当A 在心情好的时候收到花，小明表白成功的几率有60%，而当A 在心情差的时候收到花，小明表白的成功率无限趋近于0。
 * 小明跟A 刚刚认识两天，还无法辨别A 什么时候心情好。
 * 如果不合时宜地把花送给A，花被直接扔掉的可能性很大，这束花可是小明吃了7 天泡面换来的。
 * 但是A 的朋友B 却很了解A，所以小明只管把花交给B，B 会监听A 的心情变化，然后选择A 心情好的时候把花转交给A，代码如下：
 */
let Flower = function() {}
let xiaoming = {
  sendFlower: function(target) {
    let flower = new Flower()
    target.receiveFlower(flower)
  }
}
let B = {
  receiveFlower: function(flower) {
    A.listenGoodMood(function() {
      A.receiveFlower(flower)
    })
  }
}
let A = {
  receiveFlower: function(flower) {
    console.log('收到花'+ flower)
  },
  listenGoodMood: function(fn) {
    setTimeout(function() {
      fn()
    }, 1000)
  }
}
xiaoming.sendFlower(B)

/**
 * 优点
 * 代理模式能将代理对象与被调用对象分离，降低了系统的耦合度。
 * 代理模式在客户端和目标对象之间起到一个中介作用，这样可以起到保护目标对象的作用
 * 代理对象可以扩展目标对象的功能；通过修改代理对象就可以了，符合开闭原则；
 */

/**
 * 缺点
 * 处理请求速度可能有差别，非直接访问存在开销
 */

/**
 * 不同点
 * 装饰者模式实现上和代理模式类似
 * 装饰者模式： 扩展功能，原有功能不变且可直接使用
 * 代理模式： 显示原有功能，但是经过限制之后的
 */

/**
 * 场景
 * HTML元 素事件代理
 * let ul = document.querySelector('#ul');
 * ul.addEventListener('click', event => {
 *   console.log(event.target);
 * });
 * ES6 的 proxy 阮一峰Proxy
 * jQuery.proxy()方法
 */
/**
 * 工厂模式定义一个用于创建对象的接口，这个接口由子类决定实例化哪一个类。
 * 该模式使一个类的实例化延迟到了子类。
 * 而子类可以重写接口方法以便创建的时候指定自己的对象类型。
 */
class Product {
    constructor(name) {
        this.name = name
    }
    init() {
        console.log('init')
    }
    fun() {
        console.log('fun')
    }
}

class Factory {
    create(name) {
        return new Product(name)
    }
}

// use
let factory = new Factory()
let p = factory.create('p1')
p.init()
p.fun()

/**
 * 优点
 * 创建对象的过程可能很复杂，但我们只需要关心创建结果。
 * 构造函数和创建者分离, 符合“开闭原则”
 * 一个调用者想创建一个对象，只要知道其名称就可以了。
 * 扩展性高，如果想增加一个产品，只要扩展一个工厂类就可以。
 */

/**
 * 缺点
 * 添加新产品时，需要编写新的具体产品类,一定程度上增加了系统的复杂度
 * 考虑到系统的可扩展性，需要引入抽象层，在客户端代码中均使用抽象层进行定义，增加了系统的抽象性和理解难度
 */

/**
 * 什么时候不用
 * 当被应用到错误的问题类型上时,这一模式会给应用程序引入大量不必要的复杂性.
 * 除非为创建对象提供一个接口是我们编写的库或者框架的一个设计上目标,否则我会建议使用明确的构造器,以避免不必要的开销。
 * 由于对象的创建过程被高效的抽象在一个接口后面的事实,这也会给依赖于这个过程可能会有多复杂的单元测试带来问题。
 */

/**
 * 例子
 * 曾经我们熟悉的JQuery的$()就是一个工厂函数，它根据传入参数的不同创建元素或者去寻找上下文中的元素，创建成相应的jQuery对象
 */
class jQuery {
    constructor(selector) {
        super(selector)
    }
    add() {

    }
    // 此处省略若干API
}

/**
 * vue 的异步组件
 * 在大型应用中，我们可能需要将应用分割成小一些的代码块，并且只在需要的时候才从服务器加载一个模块。
 * 为了简化，Vue 允许你以一个工厂函数的方式定义你的组件，这个工厂函数会异步解析你的组件定义。
 * Vue 只有在这个组件需要被渲染的时候才会触发该工厂函数，且会把结果缓存起来供未来重渲染。例如：
 */
Vue.component('async-example', function (resolve, reject) {
    setTimeout(function () {
        // 向 `resolve` 回调传递组件定义
        resolve({
            template: '<div>I am async!</div>'
        })
    }, 1000)
})
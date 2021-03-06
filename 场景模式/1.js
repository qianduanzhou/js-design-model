//允许一个对象在其内部状态改变的时候改变它的行为，对象看起来似乎修改了它的类
// 状态 （弱光、强光、关灯）
class State {
    constructor(state) {
        this.state = state
    }
    handle(context) {
        console.log(`this is ${this.state} light`)
        context.setState(this)
    }
}
class Context {
    constructor() {
        this.state = null
    }
    getState() {
        return this.state
    }
    setState(state) {
        this.state = state
    }
}
// test 
let context = new Context()
let weak = new State('weak')
let strong = new State('strong')
let off = new State('off')

// 弱光
weak.handle(context)
console.log(context.getState())

// 强光
strong.handle(context)
console.log(context.getState())

// 关闭
off.handle(context)
console.log(context.getState())

/**
 * 场景
 * 一个对象的行为取决于它的状态，并且它必须在运行时刻根据状态改变它的行为
 * 一个操作中含有大量的分支语句，而且这些分支语句依赖于该对象的状态
 */

/**
 * 优点
 * 定义了状态与行为之间的关系，封装在一个类里，更直观清晰，增改方便
 * 状态与状态间，行为与行为间彼此独立互不干扰
 * 用对象代替字符串来记录当前状态，使得状态的切换更加一目了然
 */

/**
 * 缺点
 * 会在系统中定义许多状态类
 * 逻辑分散
 */

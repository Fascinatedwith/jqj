<template>
  <div class="content" :class="{contentTheme:theme}">
    <!-- 简介 -->
    <div class="synopsis">简介</div>
    <div class="synopsisBox">
      TypeScript(简称: TS)是JavaScript的超集 (JS有的 TS 都有)
    </div>
    <!-- 分割线 -->
    <div class="br" />

    <!-- 代码示例 -->
    <h3 style="margin: 20px 0;">1. TypeScript常用类型</h3>
    <pre class="pre">
      <code class="code">
        /* 原始类型  */
        let age: number = 18  // 数字型
        let age: string = '18'  // 字符串型
        let age: boolean = false  // 布尔型
        let age: null = null  // null
        let age: undefined = undefined // undefined
        let age: symbol = Symbol() // symbol

        /* 数组类型  */
        let age: number[] = [1,2,3]  // 数值数组
        let age: string[] = ['1','2','3'] // 字符串数组
        // 另一种写法   let age: Array< string> = ['1','2','3']

        /* 联合类型  */  由两个或多个类型组成的
        let age: (number | string)[] = [1,'2',3]  // 数字和字符串数组
        let age: boolean[] = [true,false] // 布尔数组

        /* 元组  */  是另一种类型的数组，确切的知道包含多少个元素及对应类型
        let arr:[number,number] = [1,2]

        /* 对象类型  */  描述对象的结构，属性类型之间用 ；分隔
        let obj:{name: string; age: number; sayHi: void} = {
          name:'a',
          age:18,
          sayHi(){ }
        }

        /* 函数类型  */   实际上是给函数的参数和返回值指定类型
        // 指定参数和返回值类型
        function add(num1:number,num2:number): number {
          return num1 + num2
        }

        /* void类型  */   如果函数没有返回值return，那么返回值类型为 void
        function add(name:string): void {
          console.log('hello')
        }

        /* 可选参数  */  参数可以传也可以不传, 参数名称后添加 ?
        function add(name?:string): void {
          console.log('hello')
        }

        /* 为任意类型起别名，简化该类型的使用 两种方式  */

        /* type(类型别名)  */
        type CustomArray = (number | string)[]  // 创建别名，可以是任意变量名
        let age: CustomArray = [1,'2',3]  // 使用别名作为类型注解

        /* interface(接口)  */
        type CustomArray = (number | string)[]  // 创建别名，可以是任意变量名
        let age: CustomArray = [1,'2',3]  // 使用别名作为类型注解

        /* 类型继承 extends  */
        interface P2 {x:number; y:number}
        // P3继承P2的类型并添加自己的类型
        interface P3 extends P2 {z:number}
        // P3= {x:number; y:number; z:number}

        /* 类型断言 as  */
        const aLink = document.getElementById('link') as HTMLAnchorElement
        // 通过类型断言 alink的类型变得更加具体，这样就可以访问a标签特有的属性和方法了

        /* 字面量类型  */
        let str1 = 'hello'    // 他的类型为 字符串
        const str2 = 'hello'   // 他的类型为 hello 就是一个字面量类型
        // 因为 str2 是一个常量，值不能变化只能是hello，所以它的类型为 hello
        // 除字符串外，任意js字面量（比如对象，数字等）都可以作为类型使用

        /* 枚举类型 enum  */  枚举：定义一组命名常量，描述一个值，该值可以是这些命名常量中的一个  枚举中的值以大写字母开头，多个值以逗号分割
        enum Direction {Up, Down, Left, Right}
        function changeDirection(direction: Direction) {
          console.log(direction)
        }
        // 访问枚举成员 Direction.Up
        // 调用
        changeDirection(Direction.Up)

        /* 数字枚举  */
        // 枚举成员是有值的，默认从0开始自增的数值
        // 也可以给枚举中成员初始化值
        enum Direction {Up=10, Down, Left, Right}
        // 如此Down=11 以此类推自增

        /* 字符串枚举  */
        enum Direction {Up='up', Down='Down'}
        // 字符串枚举是没有自增长行为的，并且每个成员必须都有值

        /* any类型  */
        let obj:any = {x:0}

        /* typeof运算符  */
        let p = {x:1, y:2}
        // 两种写法意思相同
        function format(point:{x:number; y: number}) {}
        function format(point: typeof p) {} // 就会把p的类型引用下来
      </code>
    </pre>

    <h3 style="margin: 20px 0;">2. TypeScript高级类型</h3>
    <pre class="pre">
      <code class="code">
        /* class类  */  不仅提供了js中class语法的功能，也作为一种类型存在
        class Person {}  // 创建一个类
        const p = new Person()   // 创建实例对象

        /* class类的基本使用  */
        class Person { // 创建一个类
          age:number
          gender='男'
        }
        const p = new Person()   // 创建实例对象
        p.age   // 使用

        /* class类的构造函数 constructor  */
        class Person { // 创建一个类
          age:number
          gender:string
          // 构造函数
          constructor(age: number, gender: string) {
            this.age=age
            this.gender=gender
          }
        }
        const p = new Person(18, '男')

        /* class类的继承  */  extends (继承父类)  implements （实现接口）
        // extends
        class Animal {
          move() { log('1') }
        }
        class Dog extends Animal {  // 继承父类里所有属性和方法
          bark() { log('2') }
        }
        const d = new Dog()
        dog.move()  // 可以访问父类里的方法

        // implements
        class Animal {
          move(): void
        }
        class Dog implements Animal {
          // 里面必须提供Animal里的所有属性和方法，
          move() {
            log('2')
          }
        }

        /* class类的可见性修饰符  */
        /* public (公有的)  */  表示公开的，可以被任何地方访问，默认可见性可省略
        class Animal {
          public move(){
            log(1)
          }
        }
        const a = new Animal()
        a.move()  // 1

        /* protected (受保护的)  */  表示受保护的，仅对其声明所在类和子类中可见，实例对象不可见 可以在子类中通过this访问受保护的
        class Animal {
          protected move(){ log(1) }
          run(){
            this.move() // 在类中通过this调用
          }
        }
        const a = new Animal()
        a.move()  // 报错

        class Dog extends Animal {
          bark(){
            this.move() // 在子类中通过this调用
          }
        }
        const d = new Dog()
        d.bark()  // 1

        /* private (私有的)  */   表示私有的，只在当前类中可见
        class Animal {
          private move(){ log(1) }
          run(){
            this.move() // 在当前类的其他方法中通过this调用
          }
        }

        /* class类的只读修饰符 readonly  */  表示只读，用来防止在构造函数之外对属性进行赋值
        class Animal {
          // 只读属性
          readonly age:number = 18 // 需指定类型 否则无法赋值
          constructor(age:number){
            this.age= age  // 只能在构造函数中赋值
          }
          run() {
            this.age= 20  // 方法中赋值 报错
          }
        }
        const a = new Animal(20)

        /* 类型兼容性  */

        /* 对象之间的类型兼容性  */  对于对象类型来说，成员多的可以赋值给成员少的
        // Point兼容Point2D
        class Point { x:number; y:number }
        class Point2D { x:number; y:number; z:number }
        const p:Point = new Point2D() // 可以
        const p:Point2D = new Point() // 报错

        /* 接口之间的类型兼容性  */  class 和 interface 都是对象，所以他俩也可以兼容
        interface Point { x:number; y:number; }
        interface Point2D { x:number; y:number; }
        class Point3D { x:number; y:number; z:number }
        let p1:Point
        let p2:Point2D
        p2=p1
        p1=p2
        let p3:Point2D = new Point3D() // 也可以兼容

        /* 函数之间的类型兼容性  */  函数兼容比较复杂，需要考虑 参数个数、参数类型、返回值类型
        /* 参数个数  */  参数少的可以赋值给参数多的
        type F1 = (a:number) => void
        type F2 = (a:number,b:number) => void
        let f1:F1
        let f2:F2
        f2 = f1 // 可以

        /* 参数类型  */  相同位置的参数类型要相同（原始类型）或兼容（对象类型）
        type F1 = (a:number) => void
        type F2 = (a:number) => void
        let f1:F1
        let f2:F2
        f2 = f1 // 可以
        f1 = f2 // 可以

        interface Ponint2D { x:number; y:number;}
        interface Ponint3D { x:number; y:number; z:number;}
        // 技巧 ：将对象拆开，把每个属性个数看做一个个参数
        type F2 = (a:Ponint2D) => void  // 相当于有2个参数
        type F3 = (a:Ponint3D) => void  // 相当于有3个参数
        let f2:F2
        let f3:F3
        f2=f3  // 不行
        f3=f2  // 可以 参数少的可以赋值给参数多的

        /* 返回值类型  */  只关注返回值类型本身
        // 对象类型  成员多的可以赋值给成员少的
        type F1 = () => {name:string}
        type F2 = () => {name:string; age:number}
        let f1:F1
        let f2:F2
        f1 = f2  // 可以

        // 原始类型   返回的类型相同就可以兼容
        type F1 = () => string
        type F2 = () => string
        let f1:F1
        let f2:F2
        f1 = f2 // 可以
        f2 = f1 // 可以

        /* 交叉类型 & */  功能类似于接口继承（extends），用于组合多个类型为1个类型（常用于对象类型）
        interface Person { name: string}
        interface Contact { phone: string}
        type PersonDetail = Person & Contact

        let obj:PersonDetail = {
          name: 'abc',
          phone: '123'
        }

        /* 泛型 */  泛型是可以在保证类型安全前提下，让函数等与多种类型一起工作，从而实现复用，常用于：函数、接口、class中。
        function id(value: number):number {return value}
        // 比如 id（10） 调用以上函数就会直接返回10本身，但是该函数只接受数值类型，无法用于其他类型。为了让函数能够接受任意类型，可以将参数类型改为any
        function id(value: any):any {return value} // 但是这样就失去了ts的类型保护

        // 泛型在保证类型安全（不丢失类型信息)的同时，可以让函数等于多种不同类型一起工作，灵活可复用

        // 创建泛型函数
        function id< Type>(value: Type):Type {return value}
        // 调用
        let num = id< number>(10)  // num = 10
        let str = id< string>('a')  // str = 'a'
        let num = id(100)  // 也是可以的 类型可以省略

        // 类型变量Type 是一种特殊类型的变量，他处理类型而不是值，相当于一个类型容器，捕获用户提供的类型，因为Type是类型，因此可以将其作为函数参数和返回值类型， Type可以是任意合法的变量名称

        /* 泛型约束 */
        function id< Type>(value: Type): Type{
          log(value.length)  // 报错
          return value
        }
        // 因为Type可以代表任意类型，无法保证一定存在length属性，比如数字就没有长度，此时就需要为泛型添加约束。

        // 指定更加具体的类型 [] 只要是数组就一定含有length属性
        function id< Type>(value: Type[]): Type[] {
          console.log(value.length)  // 可以
          return value
        }
        id([1,2,3])

        /* 通过extends为泛型添加约束 */
        interface Length {length:number}
        function id< Type extends Length>(value: Type): Type {
          console.log(value.length)
          return value
        }
        id('123') // 可以
        id([1,2,3]) // 可以
        id({length:10}) // 可以  只要有length属性就行

        /* 多个泛型类型变量之间的约束  keyof */
        function id< Type, Key extends keyof Type>(obj:Type, key:Key) {
          return obj[key]
        }
        let per = {name:'abc',age:10}
        id(per,'name')

        // keyof 关键字接受一个对象类型，生成其键名称的联合类型
        // 示例中 keyof Type 实际上获取的是per对象里所有key的联合类型，也就是 'name'|'age'
        // 类型变量Key受Type约束，可以理解为Key只能是Type所有键中的任意一个，或者说只能访问对象中存在的属性名称

        /* 泛型接口 */  接口也是可以配合泛型来使用，增加灵活性和复用性
        interface func< Type> {
          id: (value: Type) => Type,
          ids:()=> Type[],
        }
        let obj: func< string> = {
          id(value) {
            return value
          },
          ids() {
            return ['1']
          }
        }
        console.log(obj.id('123'));
        console.log(obj.ids());
        // 在接口名称后面添加< 类型变量>，那么这个接口就成了泛型接口。 接口中所有成员都可以使用类型变量、 使用泛型接口时需要指定具体的类型（比如此时的 func< string>）

        /* 泛型类 */  class类也可以配合泛型来使用
        class GenericNumber< Type> {
          value: Type
          add: (x:Type,y:Type)=> Type
        }
        const my = new GenericNumber< number>()
        my.value = 10
        // 在class名称后面添加< 类型变量>，这个类就变成了泛型类。

        /* 泛型工具类型 */  Ts里内置了一些常用的工具类型，来简化一些ts中的操作

        /* Partial< Type> */  用来构造一个类型，将Type的所有属性设置为可选
        interface Props {
          id: string
          children: number[]
        }
        type PartialProps = Partial< Props>
        // 构造出来的新类型PartialProps 结构和 Props相同，并且所有属性都是可选的
        let props:PartialProps = {id:'1',children:[]}
        props.id='2'

        /* Readonly< Type> */  用来构造一个类型，将Type的所有属性设置为readonly只读
        interface Props {
          id: string
          children: number[]
        }
        type ReadonlyProps = Readonly< Props>
        // 构造出来的新类型PartialProps 结构和 Props相同，但所有属性都是只读的
        let props:ReadonlyProps = {id:'1',children:[]}
        props.id='2' // 报错 因为是只读的

        /* Record< Keys,Type> */  构造一个对象类型，属性键为keys,属性类型为Type
        type RecordObj = Record<'a' | 'b' | 'c', string[]>
        let obj: RecordObj = {
          a: ['a'],
          b: ['b'],
          c: ['c']
        }
        // Record工具类型有两个类型变量，1表示对象里有哪些属性，2表示对象里的属性类型

        /* 索引签名类型 [] */  当无法确定对象中有哪些属性（或者说对象中可以出现任意多个属性）此时 就用到索引签名类型了
        interface AnyObj {
          [key:string]: any
        }
        let obj:AnyObj = {
            a:'1',
            b:2
        }
        // 使用[key:string]来约束该接口中允许出现的属性名称，表示只要是string类型的属性名称 都可以出现在对象中
        // 这样对象obj中就可以出现任意多个属性
        // key只是一个占位符，可以替换成任意合法的变量名称
        // 注意：js对象中的key是string类型的

        /* 映射类型 - 两种  */  基于一个旧的类型创建新的类型（对象类型），减少重复，提升效率

        /* [key in keys]  根据联合类型创建  */
        // 比如类型keys和types都有相同的 x y z
        type keys = 'x' | 'y' | 'z'
        type types = { x: number, y: number, z: number }
        // 这样书写没错但x y z重复写了两次，可以用映射类型来简化
        type keys = 'x' | 'y' | 'z'
        type types = { [key in keys]: number }
        // 映射类型是基于索引签名类型的，所以该语法类似于索引签名类型，也使用了[]
        // key in keys 表示key可以是keys联合类型中的任意一个
        // 映射类型只能在类型别名中使用，不能在接口中使用

        /* [key in keyof keys] 根据对象类型创建  */
        type keys = { x: number, y: number, z: number }
        type types = { [key in keyof keys]: number }
        let obj: types = {
          x: 1,
          y: 2,
          z: 3
        }

        /* 索引查询类型  */  用于查询属性的类型
        // 查询一个
        type keys = { x: number, y: string, z: boolean }
        type typeA = keys['x']
        let A: typeA = 1
        let A: typeA = '1' // 报错
        //keys['a']表示查询类型keys中属性a的类型 ， 所以typeA的类型是number

        // 查询多个
        type keys = { x: number, y: string, z: boolean }
        // 两种方式
        type typeA = keys['x'|'y']  // number | string
        type typeA = keys[keyof keys]  // number | string | boolean
      </code>
    </pre>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  components: {
    // 注册组件
  },
  data() {
    return {
      // 变量
    }
  },
  computed: {
    // 计算属性
    ...mapState(['theme'])
  },
  created() {
    // 生命周期函数 初始化后
  },
  mounted() {
  },
  methods: {
    // 事件执行函数
  }
}
</script>

<style scoped lang="scss">
.content {
  color: #000;
  .synopsis {
    font-size: 38px;
    font-weight: 700;
    margin: 40px 0;
  }
  .synopsisBox {
    width: 100%;
    padding: 20px;
    background-color:#f9f9f9 ;
    border-radius: 20px;
  }
  .br {
    margin: 50px 0;
    height: 1px;
    background-color: #ccc;
  }
  .pre {
    background-color: #2a2c3e;
    color: #fff;
    overflow-x: auto;
    border-radius: 20px;
    font-size: 24px;
    line-height: 35px;
    .code {
      background: linear-gradient(90deg,  #ffc700 0%, #e91e1e 33%, #ac61ee 66%, #00ff88 100%);
      /*设置字体颜色透明*/
      color: transparent;
      /*背景裁剪为文本形式*/
      -webkit-background-clip: text;
    }
  }
}
// 暗黑主题
.contentTheme {
  color: #fff !important;
  .synopsisBox {
    background-color:#242424;
  }
  .pre {
    background-color: #242424;
  }
}

</style>

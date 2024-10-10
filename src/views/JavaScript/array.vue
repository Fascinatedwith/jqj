<template>
  <div class="content" :class="{contentTheme:theme}">
    <!-- 简介 -->
    <div class="synopsis">简介</div>
    <div class="synopsisBox">
      数组
    </div>
    <!-- 分割线 -->
    <div class="br" />

    <!-- 代码示例 -->
    <h3 style="margin: 20px 0;">1. 创建数组</h3>
    <pre class="pre">
      <code class="code">
        /* new 创建数组  */
        var arr = new Array()

        /* 字面量创建数组  */
        var arr = []
      </code>
    </pre>

    <h3 style="margin: 20px 0;">2. 遍历/筛选数组</h3>
    <pre class="pre">
      <code class="code">
        /* for 遍历数组  */
        for(var i = 0; i < arr.length; i++){   }

        /* for of 遍历数组  */
        for(var k of arr){   }

        /* for in 遍历数组  */
        for(var k in arr){   }

        /* forEach 遍历数组  */
        arr.forEach(function(item,index,args){
          // item数组里的每个值
          // index 是索引
          // args 是当前数组
        })

        /*  map  遍历数组  */
        arr.map(function(item,index,args){
          // item数组里的每个值
          // index 是索引
          // args 是当前数组
        })

        /* filter 过滤数组  */  返回所有满足条件的组成一个数组
        var newArr = arr.filter(function(value, index, array) {
          //参数一是:数组元素
          //参数二是:数组元素的索引
          //参数三是:当前的数组
          return value >= 20
        });

        /* every 判断数组  */  判断数组中每一个元素是否都满足条件返回布尔值
        var flag = arr.every(function(value,index,array) {
          //参数一是:数组元素
          //参数二是:数组元素的索引
          //参数三是:当前的数组
          return value < 3;
        });

        /* some 查找数组  */  查找数组中是否有符合条件的返回布尔值
        var flag = arr.some(function(value,index,array) {
          //参数一是:数组元素
          //参数二是:数组元素的索引
          //参数三是:当前的数组
          return value < 3;
        });

        /* find 查找数组  */  找出第一个符合条件的数组成员 如果没有找到返回undefined
        var flag = arr.find(function(value,index,array) {
          //参数一是:数组元素
          //参数二是:数组元素的索引
          //参数三是:当前的数组
          return value < 3;
        });

        /* findIndex 查找数组  */  找出第一个符合条件的数组成员索引 如果没有找到返回-1
        var flag = arr.findIndex(function(value,index,array) {
          //参数一是:数组元素
          //参数二是:数组元素的索引
          //参数三是:当前的数组
          return value < 3;
        });

      </code>
    </pre>

    <h3 style="margin: 20px 0;">3. 数组内容 查找 / 添加 / 删除</h3>
    <pre class="pre">
      <code class="code">
        /* includes( ) 查找数组  */  查找数组中是否包含某个元素返回布尔值
        var res = arr.includes(3)

        /* some 查找数组  */  查找数组中是否有符合条件的返回布尔值
        var flag = arr.some(function(value,index,array) {
          //参数一是:数组元素
          //参数二是:数组元素的索引
          //参数三是:当前的数组
          return value < 3;
        });

        /* find 查找数组  */  找出第一个符合条件的数组成员 如果没有找到返回undefined
        var flag = arr.find(function(value,index,array) {
          //参数一是:数组元素
          //参数二是:数组元素的索引
          //参数三是:当前的数组
          return value < 3;
        });

        /* findIndex 查找数组  */  找出第一个符合条件的数组成员索引 如果没有找到返回-1
        var flag = arr.findIndex(function(value,index,array) {
          //参数一是:数组元素
          //参数二是:数组元素的索引
          //参数三是:当前的数组
          return value < 3;
        });

        /* indexOf 查找目标索引  */  数组中查找目标的第一个索引号 不存在则返回-1
        var flag = arr.indexOf(3)

        /* lastIndexOf 查找目标索引  */  数组中查找目标的最后一个索引号 不存在则返回-1
        var flag = arr.lastIndexOf(3)

        /* push 数组最后添加数据  */
        arr.push(4);

        /* unshift 数组开头添加数据  */
        arr.unshift(0);

        /* splice 根据索引插入数据  */
        arr.splice(索引,0,数据);

        /* shift 删除数组的第一个数据  */
        arr.shift();

        /* pop 删除数组的最后一个数据  */
        arr.pop();

        /* splice 根据索引删除数组里的元素  */
        arr.splice(3,4)    // 从索引3删除到索引4，不写4的话从索引3删除到最后
      </code>
    </pre>

    <h3 style="margin: 20px 0;">4. 其他方法（检测、排序、合并、转换、求和、截取）</h3>
    <pre class="pre">
      <code class="code">
        /* instanceof  检测是否为数组  */
        console.log(arr instanceof Array)

        /* Array.isArray()  检测是否为数组  */
        console.log(Array.isArray(arr))

        /* constructor  检测是否为数组  */
        console.log(arr.constructor)

        /* Object.prototype.toString.call  检测是否为数组  */
        console.log(Object.prototype.toString.call(arr))

        /* concat( )  合并数组  */
        var res = arr1.concat(arr2,arr3)

        /* 扩展运算符...合并数组  */
        let ary3 = [...ary1, ...ary2]

        /* Array.from()  伪数组转换为真数组 */
        //定义一个集合
        let arrayLike = {
          // 属性名必须是索引号形式
          '0': 'a',
          '1': 'b',
          '2': 'c',
          length: 3  // 必须要有长度
        };
        //转成数组
        let arr2 = Array.from(arrayLike)

        /*  reverse 翻转数组  */
        arr.reverse()

        /*  sort 数组排序  */
        arr.sort(function(a, b) {
          return a - b;   // 升序的顺序排列
          return b - a;   // 降序的顺序排列
        });

        /*  reduce 数组求和  */
        var res = arr.reduce((sum, item) => sum += item, 0)   // 0 代表sum 的初始值 相当于var sum=0

        /*  filter + indexOf 数组去重  */
        var arr1 = arr.filter(function (item, index) {
          return arr.indexOf(item) === index
        })

        /*  new Set() +  ...  数组去重  */
        var res = [...new Set(arr)]

        /*  Array.from() + new Set()  数组去重  */
        var res = Array.from(new Set(arr))

        /* toString   数组转换为字符串，逗号分隔每一项  */
        console.log(arr.toString())

        /* join("分隔符")  数组转换为字符串用指定分隔符分隔  */
        console.log(arr1.join())  // 空默认，分隔
        console.log(arr1.join('-'))

        /* slice()  截取数组  slice('截取的起始位置', '截取到哪个位置')    */
        console.log(str1.slice(2,5))
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

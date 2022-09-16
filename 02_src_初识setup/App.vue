<template>
  <h1>一个人的信息</h1>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄： {{ age }}</h2>
  <h2>性别： {{ sex }}</h2>
  <button @click="sayHello">说话(vue3配置的方法 -- sayHello)</button>
  <button @click="test2">说话(vue3配置的方法 -- test2)</button>
  <hr>
  <button @click="welcome">欢迎(vue2配置的方法 -- welcome)</button>
  <button @click="test1">欢迎(vue2配置的方法 -- test1)</button>
</template>

<script>
// import {h} from 'vue'

export default {
  name: 'App',
  data() { 
    return {
      sex:'男'
    }
  },
  methods: {
    welcome() { 
      alert('武汉欢迎你，打工仔！');
    },
    test1() { 
      console.log(this.sex);
      console.log(this.name);
      console.log(this.age);
      console.log(this.sayHello);
      this.sayHello();
    }
  },
  // 此处只是测试一下setup,暂时不考虑响应式的问题。
  setup() { 
    // 数据
    let name = '张三';
    let age = 18;

    // 方法
    function sayHello() { 
      alert(`我叫${name},我${age}岁了。你好啊！`);
    }
    function test2() { 
      console.log(name);
      console.log(age);
      console.log(sayHello);
      console.log(this.sex);
      console.log(this.welcome);
    }

    // 返回一个对象(常用)
    return {
      name,
      age,
      sayHello,
      test2
    }

    // 返回一个函数(渲染函数)
    // return () => h('h1', '家庭和睦');
  }
}
</script>

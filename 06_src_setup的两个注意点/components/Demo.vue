<template>
  <h1>一个人的信息</h1>
  <h2>姓名：{{ person.name }}</h2>
  <h2>年龄： {{ person.age }}</h2>
  <button @click="test">测试触发一下Demo组件的Hello事件</button>
</template>

<script>
import { reactive } from "vue";

export default {
  name: "MyDemo",
  props: ['name', 'age'],
  emits: ['hello'],
  setup(props, context) {
    // console.log('---------setup------', props);
    console.log('---------context------', context);
    console.log('---------attrs------', context.attrs); // 相当于Vue2中的$attrs
    console.log('---------emit------', context.emit); // 相当于Vue2中的$emit--触发自定义事件
    console.log('---------slots------', context.slots); // 插槽
    // 数据
    let person = reactive({
      name: "张三",
      age: 18,
    });

    function test() { 
      context.emit('hello', '陈语欣');
    }

    // 返回一个对象(常用)
    return {
      person,
      test
    };

  },
};
</script>

<template>
  <h1>一个人的信息</h1>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄： {{ age }}</h2>
  <h3>工作种类: {{ job.type.name }}</h3>
  <h3>工作等级: {{ job.type.level }}</h3>
  <h3>工作薪水：{{ job.salary }}</h3>
  <button @click="changeInfo">修改个人信息</button>
</template>

<script>
import { ref } from 'vue'

export default {
  name: "App",
  setup() {
    // 数据
    let name = ref('张三');
    let age = ref(18);
    let job = ref({
      type: {
        name: '前端',
        level: 3
      },
      salary:'30k'
    });

    // 方法
    function changeInfo() {
      name.value = '李四';
      age.value = 3;
      job.value.type.name = '全栈';
      job.value.type.level = 6;
      job.value.salary = '100k';

      console.log(job);
    }

    // 返回一个对象(常用)
    return {
      name,
      age,
      job,
      changeInfo,
    };

    // 返回一个函数(渲染函数)
    // return () => h('h1', '家庭和睦');
  },
};
</script>

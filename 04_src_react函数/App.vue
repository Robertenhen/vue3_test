<template>
  <h1>一个人的信息</h1>
  <h2>姓名：{{ person.name }}</h2>
  <h2>年龄： {{ person.age }}</h2>
  <h3>工作种类: {{ person.job.type.name }}</h3>
  <h3>工作等级: {{ person.job.type.level }}</h3>
  <h3>工作薪水：{{ person.job.salary }}</h3>
  <h3>爱好: {{ person.hobby }}</h3>
  <h3>测试数据: {{ person.job.a.b.c.d }}</h3>
  <button @click="changeInfo">修改个人信息</button>
</template>

<script>
import { reactive } from "vue";

export default {
  name: "App",
  setup() {
    // 数据
    let person = reactive({
      name: "张三",
      age: 18,
      job: {
        type: {
          name: "前端",
          level: 3,
        },
        salary: "30k",
        a: {
          b: {
            c: {
              d: 888,
            },
          },
        },
      },
      hobby: ["抽烟", "喝酒", "烫头"],
    });

    // 方法
    function changeInfo() {
      person.name = "李四";
      person.age = 3;
      person.job.type.name = "全栈";
      person.job.type.level = 6;
      person.job.salary = "100k";
      person.job.a.b.c.d = 999;
      person.hobby[0] = "健身";
    }

    // 返回一个对象(常用)
    return {
      person,
      changeInfo,
    };

  },
};
</script>

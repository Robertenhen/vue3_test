<template>
  <h4>{{ person }}</h4>
  <h2>人员信息</h2>
  姓名：<input type="text" v-model="name" /> <br />
  年龄：<input type="text" v-model="age" /><br />
  薪水：<input type="text" v-model="job.j1.salary" />K
</template>

<script>
import {  reactive, toRefs } from "vue";

export default {
  name: "MyDemo",
  setup() {
    // 数据
    let person = reactive({
      name: "张三",
      age: 18,
      job: {
        j1: {
          salary: 30,
        },
      },
    });

    // const name1 = person.name;
    // console.log('@@@@', name1);

    // const name2 = toRef(person, 'name');
    // console.log('####', name2);

    const x = toRefs(person);
    console.log('************', x);

    // 返回一个对象(常用)
    // 在一个对象{}里展开另一个对象，使用符号"..."
    return {
      person,
      // name: toRef(person, 'name'),
      // age: toRef(person, 'age'),
      // salary: toRef(person.job.j1, 'salary')
      ...toRefs(person)
    };

  },
};
</script>

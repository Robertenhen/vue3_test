<template>
  <h2>当前求个为:{{ sum }}</h2>
  <button @click="sum++">点我+1</button>
  <hr />
  <h2>当前的消息为:{{ msg }}</h2>
  <button @click="msg += '!'">修改消息</button>
  <hr />
  <h2>人员信息</h2>
  姓名：<input type="text" v-model="person.name" /> <br />
  年龄：<input type="text" v-model="person.age" /><br />
  薪水：<input type="text" v-model="person.job.j1.salary" />K
</template>

<script>
import { ref, watch } from "vue";

export default {
  name: "MyDemo",
  setup() {
    // 数据
    let sum = ref(0);
    let msg = ref("hello");
    let person = ref({
      name: "张三",
      age: 18,
      job: {
        j1: {
          salary: 30,
        },
      },
    });

    watch(sum, (newV, oldV) => { 
      console.log('sum变了', newV, oldV);
    });

    watch(person.value, (newV, oldV) => {
      console.log('person变了', newV, oldV);
    });

    /* watch(person, (newV, oldV) => { 
      console.log('person变了', newV, oldV);
    }, {
      deep: true
    }); */
    

    // 返回一个对象(常用)
    return {
      sum,
      msg,
      person,
    };
  },
};
</script>

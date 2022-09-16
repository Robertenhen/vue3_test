<template>
  <h2>当前求和是:{{ sum }}</h2>
  <button @click="sum++">点我++</button>
  <hr>
  <h2>人员信息</h2>
  姓名：<input type="text" v-model="name" /> <br />
  年龄：<input type="text" v-model="age" /><br />
  薪水：<input type="text" v-model="job.j1.salary" />K
</template>

<script>
import { ref, reactive, toRefs,  } from "vue";

export default {
  name: "MyDemo",
  setup() {
    // 数据
    let sum = ref(0);
    let person = reactive({
      name: "张三",
      age: 18,
      job: {
        j1: {
          salary: 30,
        },
      },
    });

    person = readonly(person);
    // person = shallowReadonly(person);
    // sum = readonly(sum);
    // sum = shallowReadonly(sum);

    

    // 返回一个对象(常用)
    // 在一个对象{}里展开另一个对象，使用符号"..."
    return {
      sum,
      ...toRefs(person)
    };

  },
};
</script>

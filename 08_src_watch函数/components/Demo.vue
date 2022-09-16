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
import { ref, reactive, watch } from "vue";

export default {
  name: "MyDemo",
  setup() {
    // 数据
    let sum = ref(0);
    let msg = ref("hello");
    let person = reactive({
      name: "张三",
      age: 18,
      job: {
        j1: {
          salary: 30,
        },
      },
    });

    // 情况1：监视ref所定义的一个响应式数据
    /*   watch(sum, (newV, oldV) => {
      console.log('sum变了', newV, oldV);
    }, {
      immediate: true
    }); */

    // 情况2：监视ref所定义的多个响应式数据
    /* watch([sum, msg], (newV, oldV) => {
      console.log('sum或msg变了', newV, oldV);
    }, {
      immediate: true
    }); */

    /*  情况3：监视reactive所定义的一个响应式数据的全部属性。
          1.注意：此处无法正确的获得oldV
          2.注意：强制开启深度监视(deep配置无效)
    */
    /* watch(person, (newV, oldV) => {
      console.log("person变了", newV, oldV);
    }, {deep: false}); // 此处的deep配置无效 */

    //  情况4：监视reactive所定义的一个响应式数据的某个属性。
    /* watch(()=>person.age, (newV, oldV) => {
      console.log("person的年龄变了", newV, oldV);
    }); */

    //  情况5：监视reactive所定义的一个响应式数据的某些属性。
    /* watch(() => [person.name, person.age], (newV, oldV) => {
      console.log('person的姓名或者年龄变了', newV, oldV);
    }); */

    // 特殊情况
    watch(
      () => person.job,
      (newV, oldV) => {
        console.log("person的job变了", newV, oldV);
      },
      {
        deep: true, // 此处由于监视的是reactive所定义的对象中的某个属性，所以deep配置有效
      }
    );

    // 返回一个对象(常用)
    return {
      sum,
      msg,
      person,
    };
  },
};
</script>

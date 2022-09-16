<template>
  <h2>当前求和是:{{ sum }}</h2>
  <button @click="sum++">点我++</button>
  <hr>
  <h2>人员信息</h2>
  姓名：<input type="text" v-model="name" /> <br />
  年龄：<input type="text" v-model="age" /><br />
  薪水：<input type="text" v-model="job.j1.salary" />K <br>
  汽车:<h3>{{ person.car }}</h3>
  <br>
  <button @click="showRawPerson">输出原始的person</button>
  <button @click="addCar">给人添加一台车</button>
  <button v-show="person.car" @click="person.car.name += '!'">换车名</button>
  <button v-show="person.car"  @click="person.car.price++">换价格</button>
</template>

<script>
import { ref, reactive, toRefs, toRaw, markRaw } from "vue";

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
      }
    });

    function showRawPerson() { 
      const p = toRaw(person);
      p.age++;
      console.log('#######', p);
    }


    function addCar() { 
      let car = {
        name: '奔驰',
        price: 40
      }
      person.car = markRaw(car);
      console.log('给人添加了一台车');
    }

    // 返回一个对象(常用)
    // 在一个对象{}里展开另一个对象，使用符号"..."
    return {
      sum,
      person,
      ...toRefs(person),
      showRawPerson,
      addCar
    };

  },
};
</script>

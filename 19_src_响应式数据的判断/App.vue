<template>
  <div class="app">
    <h3>我是App组件</h3>
  </div>
</template>

<script>
import { reactive, readonly, ref, isRef, isReactive, isReadonly, isProxy } from '@vue/reactivity';

export default {
  name: "App",
  setup() { 
    const car = reactive({ name: '奔驰', price: '40w' });
    let sum = ref(0);
    let car2 = readonly(car);

    console.log(isReactive(car));
    console.log(isRef(sum));
    console.log(isReadonly(car2));
    console.log(isProxy(car));
    console.log(isProxy(sum), sum);

    
    return { car, sum, car2 };
  }
};
</script>

<style>
.app {
  background-color: gray;
  padding: 10px;
}
</style>
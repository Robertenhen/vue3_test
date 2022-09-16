<template>
  <input type="text" v-model="keyWord">
  <h3>{{ keyWord }}</h3>
</template>

<script>
import { ref, customRef } from 'vue';
export default {
  name: "App",
  setup() {

    // 自定义一个ref：myRef
    function myRef(value, delay) { 
      let timerId;
      return customRef((track, trigger) => { 
        return {
          get() {
            console.log(`有人从myRef这个容器读取数据，我把${value}给他了`);
            track(); // 通知vue追踪value的变化(提前跟get商量，让他认为value是有用的)
            return value;
           },
          set(newValue) {
            console.log(`有人把myRef这个容器中的数据修改为${newValue}了`);
            value = newValue;
            clearTimeout(timerId);
            timerId = setTimeout(() => {
              trigger(); // 通知vue重新解析模板
            }, delay);
           }
        }
      });
    }

    // let keyWord = ref('hello'); // 使用vue提供的ref
    let keyWord = myRef('hello', 500); // 使用vue提供的ref

    return {
      keyWord
    };
  }
};
</script>

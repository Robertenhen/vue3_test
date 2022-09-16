<template>
  <button @click="showDemo = !showDemo">切换显示与隐藏</button>
  <Demo v-if="showDemo" />
  <Test />
</template>

<script>
import { ref } from 'vue';
import Demo from './components/Demo'
import Test from './components/Test'
export default {
  name: "App",
  components: { Demo, Test },
  setup() {
    let showDemo = ref(true);

    return {
      showDemo
    };
  }
};
</script>

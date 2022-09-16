<template>
  <button @click="showDemo = !showDemo">切换显示与隐藏</button>
  <Demo v-if="showDemo" />
</template>

<script>
import { ref } from 'vue';
import Demo from './components/Demo'
export default {
  name: "App",
  components: { Demo },
  setup() {
    let showDemo = ref(true);

    return {
      showDemo
    };
  }
};
</script>

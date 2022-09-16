<template>
  <div class="child">
    <h3>我是Child组件(子)</h3>
    <GrandChild />
  </div>
</template>

<script>
import GrandChild from "./GrandChild.vue";
export default {
  name: "Child",
  components: { GrandChild },
  setup() {
  },
};
</script>

<style>
.child {
  background-color: skyblue;
  padding: 10px;
}
</style>
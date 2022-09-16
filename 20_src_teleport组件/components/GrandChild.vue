<template>
  <div class="grandChild">
    <h3>我是GrandChild组件</h3>
    <Dialog />
  </div>
</template>

<script>
import Dialog from './Dialog'
export default {
  components: { Dialog },
  name: 'GrandChild'
}
</script>

<style>
  .grandChild {
    background-color: orange;
    padding: 10px;
  }
</style>
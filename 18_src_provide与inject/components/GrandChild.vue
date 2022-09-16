<template>
  <div class="grandChild">
    <h3>我是GrandChild组件(孙),{{ name }} -- {{ price }}</h3>
  </div>
</template>

<script>
import { inject, toRefs }  from 'vue'

export default {
  name: 'GrandChild',
  setup() { 
    const car = inject('car');

    return {...toRefs(car)}
  }
}
</script>

<style>
  .grandChild {
    background-color: orange;
    padding: 10px;
  }
</style>
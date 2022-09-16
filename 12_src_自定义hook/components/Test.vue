<template>
  <h2>当前鼠标点击的坐标为x:{{ point.x }}, y:{{ point.y }}</h2>
</template>

<script>
import usePoint from '@/hooks/usePoint'

export default {
  name: 'MyTest',
  setup() { 
    const point = usePoint();

    return {
      point
    }
  }
}
</script>

<style>

</style>
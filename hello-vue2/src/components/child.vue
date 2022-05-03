<template>
  <div class="child">
    {{test}}
    <!-- <slot :data="data3"></slot> -->
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      test: 2
    }
  }
}
</script>

<style scoped>
.child {
  border: 1px solid blue;
}
</style>

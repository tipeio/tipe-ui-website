<template>
  <p :data-tipe-ui="$options.name">{{text}}</p>
</template>

<script>
import vueTypes from 'vue-types'
export default {
  name: 'AttrDesc',
  props: {
    text: vueTypes.string.def('')
  }
}
</script>

<style lang="postcss" scoped>
[data-tipe-ui='AttrDesc'] {
  color: var(--text-purple-gray);
  font-size: 1rem;
}
</style>

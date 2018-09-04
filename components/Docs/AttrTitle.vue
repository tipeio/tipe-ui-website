<template>
  <h2 :data-tipe-ui-docs="$options.name">{{title}}</h2>
</template>

<script>
import vueTypes from 'vue-types'
export default {
  name: 'AttrTitle',
  props: {
    title: vueTypes.string.def('')
  }
}
</script>

<style lang="postcss" scoped>
[data-tipe-ui-docs='AttrTitle'] {
  color: var(--text-purple-gray);
  font-size: 2rem;
}
</style>

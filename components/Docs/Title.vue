<template>
  <h1 :data-tipe-ui="$options.name">{{title}}</h1>
</template>

<script>
import vueTypes from 'vue-types'

export default {
  name: 'ComponentTitle',
  props: {
    title: vueTypes.string.def('')
  }
}
</script>

<style lang="postcss" scoped>
[data-tipe-ui='ComponentTitle'] {
  color: var(--text-purple);
  font-size: 2.5rem;
}
</style>

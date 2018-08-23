<template>
  <div :data-tipe-ui="$options.name">
    <pre v-highlightjs="sourcecode"><code class="javascript"></code></pre>
  </div>
</template>

<script>
import vueTypes from 'vue-types'

export default {
  name: 'ComponentCodeBlock',
  props: {
    sourcecode: vueTypes.string.def('')
  }
}
</script>

<style lang="postcss" scoped>
[data-tipe-ui='ComponentCodeBlock'] {
  display: flex;
  background-color: var(--light-purple);
  overflow-x: scroll;
}
</style>

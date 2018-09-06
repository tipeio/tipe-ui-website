<template>
  <component-grid>
   <doc-title>Design Disciplines</doc-title>
  </component-grid>
</template>

<script>
import ComponentGrid from '~/components/Grid.vue'
import { DocTitle } from '~/components/Docs'

export default {
  layout: 'guide',
  components: {
    ComponentGrid,
    DocTitle
  }
}
</script>

<style lang="postcss" scoped>
</style>

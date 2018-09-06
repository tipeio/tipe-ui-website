<template>
  <component-grid>
   <doc-title>Form</doc-title>
  </component-grid>
</template>

<script>
import ComponentGrid from '~/components/Grid.vue'
import { DocTitle } from '~/components/Docs'

export default {
  layout: 'resource',
  components: {
    ComponentGrid,
    DocTitle
  }
}
</script>

<style lang="postcss" scoped>
</style>

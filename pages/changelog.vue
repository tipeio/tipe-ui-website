<template>
  <component-grid>
    <h1>Changelog</h1>
    <doc-links :right="docLink('right', 'changelog')" />
  </component-grid>
</template>

<script>
import ComponentGrid from '~/components/Grid.vue'
import { DocLinks } from '~/components/Docs'
import docMixin from '~/mixins/doc-links'

export default {
  layout: 'docs',
  mixins: [docMixin],
  components: {
    ComponentGrid,
    DocLinks
  }
}
</script>

<style lang="postcss" scoped>
</style>

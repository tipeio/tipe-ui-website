<template>
  <component-grid>
    <div>Install</div>
    <doc-links :left="docLink('left', 'installation')" :right="docLink('right', 'installation')" />
  </component-grid>
</template>

<script>
import { DocLinks } from '~/components/Docs'
import ComponentGrid from '~/components/Grid.vue'
import docMixin from '~/mixins/doc-links'

export default {
  layout: 'docs',
  components: {
    DocLinks,
    ComponentGrid
  },
  mixins: [docMixin]
}
</script>

<style lang="postcss" scoped>
</style>

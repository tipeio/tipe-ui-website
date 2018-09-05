<template>
  <component-grid>
    <doc-title title="Changelog"/>
    <doc-links :right="docLink('right', 'changelog')" />
  </component-grid>
</template>

<script>
import ComponentGrid from '~/components/Grid.vue'
import { DocLinks, DocTitle } from '~/components/Docs'
import docMixin from '~/mixins/doc-links'

export default {
  layout: 'docs',
  mixins: [docMixin],
  components: {
    ComponentGrid,
    DocLinks,
    DocTitle
  }
}
</script>

<style lang="postcss" scoped>
</style>

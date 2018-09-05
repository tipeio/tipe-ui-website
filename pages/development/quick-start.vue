<template>
  <component-grid>
    <doc-title title="Quick Start"/>
    <doc-links :left="docLink('left', 'quick-start')" :right="docLink('right', 'quick-start')" />
  </component-grid>

</template>

<script>
import ComponentGrid from '~/components/Grid'
import { DocLinks, DocTitle } from '~/components/Docs'
import docMixin from '~/mixins/doc-links'

export default {
  layout: 'docs',
  components: {
    DocLinks,
    ComponentGrid,
    DocTitle
  },
  mixins: [docMixin]
}
</script>

<style lang="postcss" scoped>
</style>

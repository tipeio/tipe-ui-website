<template>
  <component-grid>
    <div>Quick Start</div>
    <doc-links :left="docLink('left', 'quick-start')" :right="docLink('right', 'quick-start')" />
  </component-grid>

</template>

<script>
import ComponentGrid from '~/components/Grid'
import { DocLinks } from '~/components/Docs'
import docMixin from '~/mixins/doc-links'

export default {
  layout: 'docs',
  components: {
    DocLinks,
    ComponentGrid
  },
  mixin: [docMixin]
}
</script>

<style lang="postcss" scoped>
</style>

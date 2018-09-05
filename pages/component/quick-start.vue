<template>
  <component-grid>
    <div>Quick Start</div>
    <doc-links :left="docLink('left')" :right="docLink('right')" />
  </component-grid>

</template>

<script>
import ComponentGrid from '~/components/Grid'
import { DocLinks } from '~/components/Docs'
export default {
  layout: 'docs',
  components: {
    DocLinks,
    ComponentGrid
  },
  methods: {
    docLink(side) {
      if (side === 'right') {
        return this.$store.state.docLinks[
          this.$store.state.linkIndexes['quick-start'] + 1
        ]
      }
      return this.$store.state.docLinks[
        this.$store.state.linkIndexes['quick-start'] - 1
      ]
    }
  }
}
</script>

<style lang="postcss" scoped>
</style>

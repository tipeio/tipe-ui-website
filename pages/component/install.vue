<template>
  <component-grid>
    <div>Install</div>
    <doc-links :left="docLink('left')" :right="docLink('right')" />
  </component-grid>
</template>

<script>
import { DocLinks } from '~/components/Docs'
import ComponentGrid from '~/components/Grid.vue'

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
          this.$store.state.linkIndexes['installation'] + 1
        ]
      }
      return this.$store.state.docLinks[
        this.$store.state.linkIndexes['installation'] - 1
      ]
    }
  }
}
</script>

<style lang="postcss" scoped>
</style>

<template>
  <component-grid>
    <component-title title="Checkbox" />
    <tipe-card><tipe-checkbox/></tipe-card>
    <h2 class="sub-title">Attributes</h2>
    <doc-links :left="docLink('left')" :right="docLink('right')" />
  </component-grid>
</template>

<script>
import { TipeCard, TipeCheckbox } from '@tipe/ui'
import { ComponentTitle, DocLinks } from '~/components/Docs'
import ComponentGrid from '~/components/Grid.vue'

export default {
  layout: 'docs',
  components: {
    TipeCard,
    TipeCheckbox,
    ComponentTitle,
    ComponentGrid,
    DocLinks
  },
  data() {
    return {
      attributes: [
        {
          name: 'color',
          type: 'string',
          desc: 'balh blah',
          values: 'purple danger',
          default: 'purple'
        },
        {
          name: 'size',
          type: 'string',
          desc: 'balh blah',
          values: 'purple danger',
          default: 'purple'
        }
      ]
    }
  },
  methods: {
    docLink(side) {
      if (side === 'right') {
        return this.$store.state.docLinks[
          this.$store.state.linkIndexes['checkbox'] + 1
        ]
      }
      return this.$store.state.docLinks[
        this.$store.state.linkIndexes['checkbox'] - 1
      ]
    }
  }
}
</script>

<style lang="postcss" scoped>
.sub-title {
  color: var(--text-purple);
  font-size: 2rem;
}
</style>

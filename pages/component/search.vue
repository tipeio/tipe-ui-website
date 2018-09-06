<template>
  <component-grid>
    <doc-title>Search</doc-title>
    <tipe-card><tipe-search/></tipe-card>
    <h2 class="sub-title">Attributes</h2>
    <doc-links :left="docLink('left', 'search')" :right="docLink('right', 'search')" />
  </component-grid>
</template>

<script>
import { TipeCard, TipeSearch } from '@tipe/ui'
import { DocTitle, DocLinks, ComponentPreview } from '~/components/Docs'
import ComponentGrid from '~/components/Grid.vue'
import docMixin from '~/mixins/doc-links'

export default {
  layout: 'docs',
  components: {
    TipeCard,
    TipeSearch,
    DocTitle,
    ComponentGrid,
    DocLinks,
    ComponentPreview
  },
  mixins: [docMixin],
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
  }
}
</script>

<style lang="postcss" scoped>
.sub-title {
  color: var(--text-purple);
  font-size: 2rem;
}
</style>

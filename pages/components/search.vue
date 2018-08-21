<template>
  <component-grid>
    <component-title title="Search" />
    <tipe-card><tipe-search/></tipe-card>
    <h2 class="sub-title">Attributes</h2>
    <ui-table :attributes="attributes" />
  </component-grid>
</template>

<script>
import { TipeCard, TipeSearch } from '@tipe/ui'
import UiTable from '~/components/Table.vue'
import ComponentTitle from '~/components/Component/Title.vue'
import ComponentGrid from '~/components/Component/Grid.vue'

export default {
  layout: 'docs',
  components: {
    TipeCard,
    TipeSearch,
    UiTable,
    ComponentTitle,
    ComponentGrid
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
  }
}
</script>

<style lang="postcss" scoped>
.sub-title {
  color: var(--text-purple);
  font-size: 2rem;
}
</style>

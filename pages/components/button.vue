<template>
  <div class="button-grid">
    <h1 class="component-title">Button</h1>
    <tipe-card><tipe-button>Button</tipe-button></tipe-card>
    <h2 class="sub-title">Attributes</h2>
    <ui-table :attributes="attributes" />
  </div>
</template>

<script>
import { TipeCard, TipeButton } from '@tipe/ui'
import UiTable from '~/components/Table.vue'
export default {
  layout: 'docs',
  components: {
    TipeCard,
    TipeButton,
    UiTable
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
.button-grid {
  display: grid;
  grid-row-gap: 2rem;
  align-content: start;
}
.component-title {
  color: var(--text-purple);
  font-size: 2.5rem;
}

.sub-title {
  color: var(--text-purple);
  font-size: 2rem;
}
</style>

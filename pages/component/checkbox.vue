<template>
  <component-grid>
    <title title="Checkbox" />
    <tipe-card><tipe-checkbox/></tipe-card>
    <h2 class="sub-title">Attributes</h2>
  </component-grid>
</template>

<script>
import { TipeCard, TipeCheckbox } from '@tipe/ui'
import { Title } from '~/components/Docs'
import ComponentGrid from '~/components/Grid.vue'

export default {
  layout: 'docs',
  components: {
    TipeCard,
    TipeCheckbox,
    Title,
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

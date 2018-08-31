<template>
  <component-grid>
    <component-title title="Select" />
    <code-block sourcecode="import { TipeSelect } from '@tipe/ui'"/>
    <attr-title title="Size"/>
    <tipe-card class="flex">
      <tipe-select :options="options" placeholder="Select a Role" size="small"/>
      <tipe-select :options="options" placeholder="Select a Role" size="medium"/>
      <tipe-select :options="options" placeholder="Select a Role" size="large"/>
    </tipe-card>
    <code-block :sourcecode="sizeSourcecode"/>
    <attr-title title="Status"/>
    <tipe-card class="flex">
      <tipe-select :options="options" placeholder="Select a Role" status="success"/>
      <tipe-select :options="options" placeholder="Select a Role" status="warning"/>
      <tipe-select :options="options" placeholder="Select a Role" status="error"/>
    </tipe-card>
    <code-block :sourcecode="sizeSourcecode"/>
  </component-grid>
</template>

<script>
import { TipeCard, TipeSelect } from '@tipe/ui'
import { ComponentTitle, AttrTitle, CodeBlock } from '~/components/Docs'
import ComponentGrid from '~/components/Grid.vue'

export default {
  layout: 'docs',
  components: {
    TipeCard,
    TipeSelect,
    ComponentTitle,
    ComponentGrid,
    AttrTitle,
    CodeBlock
  },
  data() {
    return {
      options: [
        { label: 'Owner', value: 'owner' },
        { label: 'Admin', value: 'admin' },
        { label: 'Member', value: 'member' }
      ],
      sizeSourcecode: `<tipe-card>
  <tipe-select :options="options" placeholder="Select a Role" size="small"/>
  <tipe-select :options="options" placeholder="Select a Role" size="medium"/>
  <tipe-select :options="options" placeholder="Select a Role" size="large"/>
</tipe-card>`
    }
  }
}
</script>

<style lang="postcss" scoped>
.flex {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}
</style>

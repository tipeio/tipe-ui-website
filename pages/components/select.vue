<template>
  <component-grid>
    <component-title title="Select" />
    <component-code-block sourcecode="import { TipeSelect } from '@tipe/ui'"/>
    <attr-title title="Size"/>
    <tipe-card class="flex">
      <tipe-select :options="options" placeholder="Select a Role" size="small"/>
      <tipe-select :options="options" placeholder="Select a Role" size="medium"/>
      <tipe-select :options="options" placeholder="Select a Role" size="large"/>
    </tipe-card>
    <component-code-block :sourcecode="sizeSourcecode"/>
    <attr-title title="Status"/>
    <tipe-card class="flex">
      <tipe-select :options="options" placeholder="Select a Role" status="success"/>
      <tipe-select :options="options" placeholder="Select a Role" status="warning"/>
      <tipe-select :options="options" placeholder="Select a Role" status="error"/>
    </tipe-card>
    <component-code-block :sourcecode="sizeSourcecode"/>
  </component-grid>
</template>

<script>
import { TipeCard, TipeSelect } from '@tipe/ui'
import {
  AttrTitle,
  AttrDesc,
  ComponentCodeBlock,
  ComponentGrid,
  ComponentTitle
} from '~/components/Component'

export default {
  layout: 'docs',
  components: {
    TipeCard,
    TipeSelect,
    ComponentTitle,
    ComponentGrid,
    AttrTitle,
    ComponentCodeBlock
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

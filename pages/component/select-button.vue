<template>
  <component-grid>
    <title title="Select Button" />
    <code-block sourcecode="import { TipeSelect } from '@tipe/ui'"/>
    <attr-title title="Size"/>
    <tipe-card class="flex">
      <tipe-select type="button" :options="options" placeholder="Select a Role" size="small"/>
      <tipe-select type="button" :options="options" placeholder="Select a Role" size="medium"/>
      <tipe-select type="button" :options="options" placeholder="Select a Role" size="large"/>
    </tipe-card>
    <code-block :sourcecode="sizeSourcecode"/>
    <attr-title title="Color"/>
    <tipe-card class="flex">
      <tipe-select type="button" :options="options" placeholder="Select a Role" color="primary"/>
      <tipe-select type="button" :options="options" placeholder="Select a Role" color="info"/>
      <tipe-select type="button" :options="options" placeholder="Select a Role" color="success"/>
      <tipe-select type="button" :options="options" placeholder="Select a Role" color="warning"/>
      <tipe-select type="button" :options="options" placeholder="Select a Role" color="danger"/>
    </tipe-card>
    <code-block :sourcecode="colorSourcecode"/>
  </component-grid>
</template>

<script>
import { TipeCard, TipeSelect } from '@tipe/ui'
import { Title, AttrTitle, CodeBlock } from '~/components/Docs'
import ComponentGrid from '~/components/Grid.vue'

export default {
  layout: 'docs',
  components: {
    TipeCard,
    TipeSelect,
    Title,
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
  <tipe-select type="button" :options="options" placeholder="Select a Role" size="small"/>
  <tipe-select type="button" :options="options" placeholder="Select a Role" size="medium"/>
  <tipe-select type="button" :options="options" placeholder="Select a Role" size="large"/>
</tipe-card>`,
      colorSourcecode: `<tipe-card>
  <tipe-select type="button" :options="options" placeholder="Select a Role" color="primary"/>
  <tipe-select type="button" :options="options" placeholder="Select a Role" color="info"/>
  <tipe-select type="button" :options="options" placeholder="Select a Role" color="success"/>
  <tipe-select type="button" :options="options" placeholder="Select a Role" color="warning"/>
  <tipe-select type="button" :options="options" placeholder="Select a Role" color="danger"/>
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
  padding: 2rem;
  flex-wrap: wrap;
}

.flex > div {
  margin: 1rem 0;
}
</style>

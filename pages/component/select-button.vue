<template>
  <component-grid>
    <doc-title>Select Button</doc-title>
    <code-block language="javascript" sourcecode="import { TipeSelect } from '@tipe/ui'"/>
    <attr-title title="Size"/>
    <component-preview  :sourcecode="sizeSourcecode" height="148px">
      <tipe-card class="flex">
        <tipe-select type="button" :options="options" placeholder="Select a Role" size="small"/>
        <tipe-select type="button" :options="options" placeholder="Select a Role" size="medium"/>
        <tipe-select type="button" :options="options" placeholder="Select a Role" size="large"/>
      </tipe-card>
    </component-preview>
    <attr-title title="Color"/>
    <component-preview :sourcecode="colorSourcecode" height="210px">
      <tipe-card class="flex">
        <tipe-select type="button" :options="options" placeholder="Select a Role" color="primary"/>
        <tipe-select type="button" :options="options" placeholder="Select a Role" color="info"/>
        <tipe-select type="button" :options="options" placeholder="Select a Role" color="success"/>
        <tipe-select type="button" :options="options" placeholder="Select a Role" color="warning"/>
        <tipe-select type="button" :options="options" placeholder="Select a Role" color="danger"/>
      </tipe-card>
    </component-preview>
    <doc-links :left="docLink('left', 'select-button')" :right="docLink('right', 'select-button')" />
  </component-grid>
</template>

<script>
import { TipeCard, TipeSelect } from '@tipe/ui'
import {
  DocTitle,
  AttrTitle,
  CodeBlock,
  DocLinks,
  ComponentPreview
} from '~/components/Docs'
import ComponentGrid from '~/components/Grid.vue'
import docMixin from '~/mixins/doc-links'

export default {
  layout: 'docs',
  components: {
    TipeCard,
    TipeSelect,
    DocTitle,
    ComponentGrid,
    AttrTitle,
    CodeBlock,
    DocLinks,
    ComponentPreview
  },
  mixins: [docMixin],
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

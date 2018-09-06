<template>
  <component-grid>
    <doc-title>Select</doc-title>
    <code-block language="javascript" sourcecode="import { TipeSelect } from '@tipe/ui'"/>
    <attr-title title="Size"/>
    <component-preview :sourcecode="sizeSourcecode" height="110px">
      <tipe-card class="flex">
        <tipe-select :options="options" placeholder="Select a Role" size="small"/>
        <tipe-select :options="options" placeholder="Select a Role" size="medium"/>
        <tipe-select :options="options" placeholder="Select a Role" size="large"/>
      </tipe-card>
    </component-preview>
    <attr-title title="Status"/>
    <component-preview :sourcecode="sizeSourcecode" height="110px">
    <tipe-card class="flex">
      <tipe-select :options="options" placeholder="Select a Role" status="success"/>
      <tipe-select :options="options" placeholder="Select a Role" status="warning"/>
      <tipe-select :options="options" placeholder="Select a Role" status="error"/>
    </tipe-card>
    </component-preview>
    <doc-links :left="docLink('left', 'select')" :right="docLink('right', 'select')" />
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

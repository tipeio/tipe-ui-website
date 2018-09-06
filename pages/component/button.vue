<template>
  <component-grid>
    <doc-title>Button</doc-title>
    <code-block language="javascript" sourcecode="import { TipeButton } from '@tipe/ui'"/>
    <attr-title title="Size"/>
    <component-preview :sourcecode="sizeSourcecode" height="150px">
      <tipe-card class="flex">
        <tipe-button size="mini">Mini</tipe-button>
        <tipe-button size="small">Small</tipe-button>
        <tipe-button size="medium">Medium</tipe-button>
        <tipe-button size="large">Large</tipe-button>
      </tipe-card>
    </component-preview>
    <attr-title title="Color"/>
    <component-preview :sourcecode="colorSourcecode" height="210px">
      <tipe-card class="flex">
        <tipe-button color="primary">Primary</tipe-button>
        <tipe-button color="success">Success</tipe-button>
        <tipe-button color="info">Info</tipe-button>
        <tipe-button color="warning">Warning</tipe-button>
        <tipe-button color="danger">Danger</tipe-button>
      </tipe-card>
    </component-preview>
    <attr-title title="Outline"/>
    <component-preview :sourcecode="outlineSourcecode"  height="210px">
      <tipe-card class="flex">
        <tipe-button outline>Outline</tipe-button>
        <tipe-button outline color="success">Outline</tipe-button>
        <tipe-button outline color="info">Outline</tipe-button>
        <tipe-button outline color="warning">Outline</tipe-button>
        <tipe-button outline color="danger">Outline</tipe-button>
      </tipe-card>
    </component-preview>
    <attr-title title="Status"/>
    <component-preview :sourcecode="statusSourcecode"  height="140px">
      <tipe-card class="flex">
        <tipe-button disabled>Disabled</tipe-button>
        <tipe-button waiting>Waiting</tipe-button>
      </tipe-card>
    </component-preview>
    <doc-links :left="docLink('left', 'button')" :right="docLink('right', 'button')" />
  </component-grid>
</template>

<script>
import { TipeCard, TipeButton } from '@tipe/ui'
import {
  DocTitle,
  AttrTitle,
  CodeBlock,
  AttrDesc,
  DocLinks,
  ComponentPreview
} from '~/components/Docs'
import ComponentGrid from '~/components/Grid.vue'
import docMixin from '~/mixins/doc-links'

export default {
  layout: 'docs',
  components: {
    TipeCard,
    TipeButton,
    DocTitle,
    ComponentGrid,
    CodeBlock,
    AttrTitle,
    AttrDesc,
    DocLinks,
    ComponentPreview
  },
  mixins: [docMixin],
  data() {
    return {
      sizeSourcecode: `<tipe-card>
  <tipe-button size="mini">Mini</tipe-button>
  <tipe-button size="small">Small</tipe-button>
  <tipe-button size="medium">Medium</tipe-button>
  <tipe-button size="large">Large</tipe-button>
</tipe-card>`,
      colorSourcecode: `<tipe-card>
  <tipe-button color="primary">Mini</tipe-button>
  <tipe-button color="success">Small</tipe-button>
  <tipe-button color="info">Medium</tipe-button>
  <tipe-button color="warning">Large</tipe-button>
  <tipe-button color="danger">Large</tipe-button>
</tipe-card>`,
      statusSourcecode: `<tipe-card>
  <tipe-button disabled>Disabled</tipe-button>
  <tipe-button waiting>Waiting</tipe-button>
</tipe-card>`,
      outlineSourcecode: `<tipe-card>
  <tipe-button outline>Outline</tipe-button>
  <tipe-button outline color="success">Outline</tipe-button>
  <tipe-button outline color="danger">Outline</tipe-button>
  <tipe-button outline color="warning">Outline</tipe-button>
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
  padding: 2rem 0;
  flex-wrap: wrap;
}

.flex > button {
  margin: 1rem 0;
}
</style>

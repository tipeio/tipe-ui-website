<template>
  <component-grid>
    <title title="Button" />
    <code-block sourcecode="import { TipeButton } from '@tipe/ui'"/>
    <attr-title title="Size"/>
    <attr-desc text="Size"/>
    <tipe-card class="flex">
      <tipe-button size="mini">Mini</tipe-button>
      <tipe-button size="small">Small</tipe-button>
      <tipe-button size="medium">Medium</tipe-button>
      <tipe-button size="large">Large</tipe-button>
    </tipe-card>
    <code-block :sourcecode="sizeSourcecode"/>
    <attr-title title="Color"/>
    <tipe-card class="flex">
      <tipe-button color="primary">Primary</tipe-button>
      <tipe-button color="success">Success</tipe-button>
      <tipe-button color="info">Info</tipe-button>
      <tipe-button color="warning">Warning</tipe-button>
      <tipe-button color="danger">Danger</tipe-button>
    </tipe-card>
    <code-block :sourcecode="colorSourcecode"/>
    <attr-title title="Outline"/>
    <tipe-card class="flex">
      <tipe-button outline>Outline</tipe-button>
      <tipe-button outline color="success">Outline</tipe-button>
      <tipe-button outline color="info">Outline</tipe-button>
      <tipe-button outline color="warning">Outline</tipe-button>
      <tipe-button outline color="danger">Outline</tipe-button>
    </tipe-card>
    <code-block :sourcecode="outlineSourcecode"/>
    <attr-title title="Status"/>
    <tipe-card class="flex">
      <tipe-button disabled>Disabled</tipe-button>
      <tipe-button waiting>Waiting</tipe-button>
    </tipe-card>
    <code-block :sourcecode="statusSourcecode"/>
  </component-grid>
</template>

<script>
import { TipeCard, TipeButton } from '@tipe/ui'
import { Title, AttrTitle, CodeBlock, AttrDesc } from '~/components/Docs'
import ComponentGrid from '~/components/Grid.vue'

export default {
  layout: 'docs',
  components: {
    TipeCard,
    TipeButton,
    Title,
    ComponentGrid,
    CodeBlock,
    AttrTitle,
    AttrDesc
  },
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

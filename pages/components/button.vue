<template>
  <component-grid>
    <component-title title="Button" />
    <attr-title title="Sizes"/>
    <tipe-card class="flex">
      <tipe-button size="mini">Mini</tipe-button>
      <tipe-button size="small">Small</tipe-button>
      <tipe-button size="medium">Medium</tipe-button>
      <tipe-button size="large">Large</tipe-button>
    </tipe-card>
    <component-code-block :sourcecode="sizeSourcecode"/>
    <attr-title title="Colors"/>
    <tipe-card class="flex">
      <tipe-button color="primary">Primary</tipe-button>
      <tipe-button color="success">Success</tipe-button>
      <tipe-button color="info">Info</tipe-button>
      <tipe-button color="warning">Warning</tipe-button>
      <tipe-button color="danger">Danger</tipe-button>
    </tipe-card>
    <component-code-block :sourcecode="colorSourcecode"/>
    <attr-title title="Outline"/>
    <tipe-card class="flex">
      <tipe-button outline>Outline</tipe-button>
      <tipe-button outline color="success">Outline</tipe-button>
      <tipe-button outline color="info">Outline</tipe-button>
      <tipe-button outline color="warning">Outline</tipe-button>
      <tipe-button outline color="danger">Outline</tipe-button>
    </tipe-card>
    <component-code-block :sourcecode="outlineSourcecode"/>
    <attr-title title="Status"/>
    <tipe-card class="flex">
      <tipe-button disabled>Disabled</tipe-button>
      <tipe-button waiting>Waiting</tipe-button>
    </tipe-card>
    <component-code-block :sourcecode="statusSourcecode"/>
  </component-grid>
</template>

<script>
import { TipeCard, TipeButton } from '@tipe/ui'
import UiTable from '~/components/Table.vue'
import ComponentTitle from '~/components/Component/Title.vue'
import ComponentGrid from '~/components/Component/Grid.vue'
import ComponentCodeBlock from '~/components/Component/CodeBlock.vue'
import AttrTitle from '~/components/Component/AttrTitle.vue'
export default {
  layout: 'docs',
  components: {
    TipeCard,
    TipeButton,
    UiTable,
    ComponentTitle,
    ComponentGrid,
    ComponentCodeBlock,
    AttrTitle
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
      ],
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
}
.sub-title {
  color: var(--text-purple-gray);
  font-size: 2rem;
}
</style>

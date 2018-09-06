<template>
  <component-grid>
    <doc-title>Text Input</doc-title>
    <code-block language="javascript" sourcecode="import { TipeTextInput } from '@tipe/ui'"/>
    <attr-title title="Size"/>
    <component-preview :sourcecode="sizeSourcecode" height="218px">
      <tipe-card class="flex">
        <tipe-field label="small">
          <tipe-text-input size="small"/>
        </tipe-field>
        <tipe-field label="medium">
          <tipe-text-input size="medium"/>
        </tipe-field>
        <tipe-field label="large">
          <tipe-text-input size="large"/>
        </tipe-field>
      </tipe-card>
    </component-preview>
    <attr-title title="Status"/>
    <component-preview  :sourcecode="statusSourcecode" height="142px">
      <tipe-card id="status">
          <tipe-text-input placeholder="success" status="success"/>
          <tipe-text-input placeholder="warning" status="warning"/>
          <tipe-text-input placeholder="error" status="error"/>
      </tipe-card>
    </component-preview>
    <attr-title title="States"/>
    <component-preview :sourcecode="stateSourcecode" height="142px"> 
    <tipe-card id="states">
        <tipe-text-input placeholder="disabled" disabled/>
        <tipe-text-input placeholder="waiting" waiting/>
    </tipe-card>
    </component-preview>
    <doc-links :left="docLink('left', 'text-input')" :right="docLink('right', 'text-input')" />
  </component-grid>
</template>

<script>
import { TipeCard, TipeTextInput, TipeField } from '@tipe/ui'
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
    TipeTextInput,
    DocTitle,
    ComponentGrid,
    CodeBlock,
    AttrTitle,
    TipeField,
    DocLinks,
    ComponentPreview
  },
  mixins: [docMixin],
  data() {
    return {
      sizeSourcecode: `<tipe-card>
  <tipe-field label="small">
    <tipe-text-input size="small"/>
  </tipe-field>
  <tipe-field label="medium">
    <tipe-text-input size="medium"/>
  </tipe-field>
  <tipe-field label="large">
    <tipe-text-input size="large"/>
  </tipe-field>
</tipe-card>`,
      statusSourcecode: `<tipe-card>
  <tipe-text-input placeholder="success" status="success"/>
  <tipe-text-input placeholder="warning" status="warning"/>
  <tipe-text-input placeholder="error" status="error"/>
</tipe-card>`,
      stateSourcecode: `<tipe-card>
  <tipe-text-input placeholder="disabled" disabled/>
  <tipe-text-input placeholder="waiting" waiting/>
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
  flex-wrap: wrap;
}

#status {
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}

#status > input {
  margin: 1rem;
}

#states {
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}

#states > input {
  margin: 1rem;
}
</style>

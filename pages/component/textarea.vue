<template>
  <component-grid>
    <component-title title="Textarea" />
    <code-block sourcecode="import { TipeTextarea } from '@tipe/ui'"/>
    <attr-title title="Size"/>
    <tipe-card class="flex">
      <tipe-field label="small">
        <tipe-textarea size="small"/>
      </tipe-field>
      <tipe-field label="medium">
        <tipe-textarea size="medium"/>
      </tipe-field>
      <tipe-field label="large">
        <tipe-textarea size="large"/>
      </tipe-field>
    </tipe-card>
    <code-block :sourcecode="sizeSourcecode"/>
    <attr-title title="Status"/>
    <tipe-card id="status">
        <tipe-textarea placeholder="success" status="success"/>
        <tipe-textarea placeholder="warning" status="warning"/>
        <tipe-textarea placeholder="error" status="error"/>
    </tipe-card>
    <code-block :sourcecode="statusSourcecode"/>
    <attr-title title="States"/>
    <tipe-card id="states">
        <tipe-textarea placeholder="disabled" disabled/>
        <tipe-textarea placeholder="waiting" waiting/>
    </tipe-card>
    <code-block :sourcecode="stateSourcecode"/>
        <doc-links :left="docLink('left', 'textarea')" :right="docLink('right', 'textarea')" />

  </component-grid>
</template>

<script>
import { TipeCard, TipeTextarea, TipeField } from '@tipe/ui'
import {
  ComponentTitle,
  AttrTitle,
  CodeBlock,
  DocLinks
} from '~/components/Docs'
import ComponentGrid from '~/components/Grid.vue'
import docMixin from '~/mixins/doc-links'

export default {
  layout: 'docs',
  components: {
    TipeCard,
    TipeTextarea,
    ComponentTitle,
    ComponentGrid,
    CodeBlock,
    AttrTitle,
    TipeField,
    DocLinks
  },
  mixins: [docMixin],
  data() {
    return {
      sizeSourcecode: `<tipe-card>
  <tipe-field label="small">
    <tipe-textarea size="small"/>
  </tipe-field>
  <tipe-field label="medium">
    <tipe-textarea size="medium"/>
  </tipe-field>
  <tipe-field label="large">
    <tipe-textarea size="large"/>
  </tipe-field>
</tipe-card>`,
      statusSourcecode: `<tipe-card>
  <tipe-textarea placeholder="success" status="success"/>
  <tipe-textarea placeholder="warning" status="warning"/>
  <tipe-textarea placeholder="error" status="error"/>
</tipe-card>`,
      stateSourcecode: `<tipe-card>
  <tipe-textarea placeholder="disabled" disabled/>
  <tipe-textarea placeholder="waiting" waiting/>
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

#status {
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}

#status > textarea {
  margin: 1rem;
}

#states {
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}

#states > textarea {
  margin: 1rem;
}
</style>

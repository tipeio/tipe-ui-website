<template>
  <component-grid>
    <doc-title>Textarea</doc-title>
    <code-block language="javascript" sourcecode="import { TipeTextarea } from '@tipe/ui'"/>
    <attr-title title="Size"/>
    <component-preview :sourcecode="sizeSourcecode" height="348px">
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
    </component-preview>
    <attr-title title="Status"/>
    <component-preview :sourcecode="statusSourcecode" height="226px">
      <tipe-card id="status">
          <tipe-textarea placeholder="success" status="success"/>
          <tipe-textarea placeholder="warning" status="warning"/>
          <tipe-textarea placeholder="error" status="error"/>
      </tipe-card>
    </component-preview>
    <attr-title title="States"/>
    <component-preview :sourcecode="stateSourcecode" height="226px">
      <tipe-card id="states">
          <tipe-textarea placeholder="disabled" disabled/>
          <tipe-textarea placeholder="waiting" waiting/>
      </tipe-card>
    </component-preview>
    <doc-links :left="docLink('left', 'textarea')" :right="docLink('right', 'textarea')" />

  </component-grid>
</template>

<script>
import { TipeCard, TipeTextarea, TipeField } from '@tipe/ui'
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
    TipeTextarea,
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

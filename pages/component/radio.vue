<template>
  <component-grid>
    <doc-title>Radio</doc-title>
    <code-block sourcecode="import { TipeRadio } from '@tipe/ui'"/>
    <attr-title title="Size"/>
    <component-preview :sourcecode="sizeSourcecode">
      <tipe-card class="flex">
        <tipe-radio size="small" label="small"/>
        <tipe-radio size="medium" label="medium"/>
        <tipe-radio size="large" label="large"/>
      </tipe-card>
    </component-preview>
    <attr-title title="Status"/>
    <component-preview :sourcecode="statusSourcecode">
      <tipe-card id="status">
          <tipe-radio placeholder="success" status="success" label="success"/>
          <tipe-radio placeholder="warning" status="warning" label="warning"/>
          <tipe-radio placeholder="error" status="error" label="error"/>
      </tipe-card>
    </component-preview>
    <attr-title title="States"/>
    <component-preview :sourcecode="stateSourcecode">
      <tipe-card id="states">
          <tipe-radio placeholder="disabled" label="disabled" disabled/>
          <tipe-radio placeholder="waiting" label="warning" waiting/>
      </tipe-card>
    </component-preview>
    <doc-links :left="docLink('left', 'radio')" :right="docLink('right', 'radio')" />
  </component-grid>
</template>

<script>
import { TipeCard, TipeRadio } from '@tipe/ui'
import {
  DocTitle,
  CodeBlock,
  AttrTitle,
  DocLinks,
  ComponentPreview
} from '~/components/Docs'
import ComponentGrid from '~/components/Grid.vue'
import docMixin from '~/mixins/doc-links'

export default {
  layout: 'docs',
  components: {
    TipeCard,
    TipeRadio,
    DocTitle,
    ComponentGrid,
    CodeBlock,
    AttrTitle,
    DocLinks,
    ComponentPreview
  },
  mixins: [docMixin],
  data() {
    return {
      sizeSourcecode: `<tipe-card>
  <tipe-radio size="small" label="small"/>
  <tipe-radio size="medium" label="medium"/>
  <tipe-radio size="large" label="large"/>
</tipe-card>`,
      statusSourcecode: `<tipe-card>
  <tipe-radio placeholder="success" status="success" label="success"/>
  <tipe-radio placeholder="warning" status="warning" label="warning"/>
  <tipe-radio placeholder="error" status="error" label="error"/>
</tipe-card>`,
      stateSourcecode: `<tipe-card>
  <tipe-radio placeholder="disabled" label="disabled" disabled/>
  <tipe-radio placeholder="waiting" label="warning" waiting/>
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
}

.flex > input {
  margin: 1rem;
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

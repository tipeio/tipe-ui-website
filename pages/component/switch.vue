<template>
  <component-grid>
    <doc-title>Switch</doc-title>
    <code-block language="javascript" sourcecode="import { TipeSwitch } from '@tipe/ui'"/>
    <attr-title title="Size"/>
    <component-preview :sourcecode="sizeSourcecode" height="135px">
      <tipe-card class="flex">
        <tipe-switch label="small" size="small"/>
        <tipe-switch label="medium" size="medium"/>
        <tipe-switch label="large" size="large"/>
      </tipe-card>
    </component-preview>
    <attr-title title="Status"/>
    <component-preview :sourcecode="statusSourcecode" height="135px">
    <tipe-card id="status">
        <tipe-switch label="success" status="success" size="large"/>
        <tipe-switch label="warning" status="warning" size="large"/>
        <tipe-switch label="error" status="error" size="large"/>
    </tipe-card>
    </component-preview>
    <attr-title title="States"/>
    <component-preview :sourcecode="stateSourcecode" height="135px">
    <tipe-card id="states">
        <tipe-switch label="disabled" size="large" disabled/>
        <tipe-switch label="waiting" size="large" waiting/>
    </tipe-card>
    </component-preview>
    <doc-links :left="docLink('left', 'switch')" :right="docLink('right', 'switch')" />

  </component-grid>
</template>

<script>
import { TipeCard, TipeSwitch, TipeField } from '@tipe/ui'
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
    TipeSwitch,
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
  <tipe-switch label="small" size="small"/>
  <tipe-switch label="medium" size="medium"/>
  <tipe-switch label="large" size="large"/>
</tipe-card>`,
      statusSourcecode: `<tipe-card>
  <tipe-switch label="success" status="success" label="large"/>
  <tipe-switch label="warning" status="warning" label="large"/>
  <tipe-switch label="error" status="error" label="large"/>
</tipe-card>`,
      stateSourcecode: `<tipe-card>
  <tipe-switch label="disabled" label="large" disabled/>
  <tipe-switch label="waiting" label="large" waiting/>
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
  padding: 2rem;
}

.flex > div {
  margin: 1rem;
}

#status {
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
}

#status > div {
  margin: 1rem;
}

#states {
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
}

#states > div {
  margin: 1rem;
}
</style>

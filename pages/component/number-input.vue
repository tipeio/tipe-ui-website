<template>
  <component-grid>
    <doc-title>Number Input</doc-title>
    <code-block sourcecode="import { TipeNumberInput } from '@tipe/ui'"/>
    <attr-title title="Size"/>
    <component-preview :sourcecode="sizeSourcecode">
      <tipe-card class="flex">
        <tipe-number-input size="small" placeholder="small"/>
        <tipe-number-input size="medium" placeholder="medium"/>
        <tipe-number-input size="large" placeholder="large"/>
      </tipe-card>
    </component-preview>
    <attr-title title="Status"/>
    <component-preview :sourcecode="statusSourcecode">
      <tipe-card id="status">
        <tipe-number-input placeholder="success" status="success"/>
        <tipe-number-input placeholder="warning" status="warning"/>
        <tipe-number-input placeholder="error" status="error"/>
      </tipe-card>
    </component-preview>
    <attr-title title="States"/>
    <component-preview :sourcecode="stateSourcecode">
      <tipe-card id="states">
        <tipe-number-input placeholder="disabled" disabled/>
        <tipe-number-input placeholder="waiting" waiting/>
      </tipe-card>
    </component-preview>
    <attr-title title="Min/Max"/>
    <component-preview :sourcecode="minmaxSourcecode">
      <tipe-card class="flex">
        <tipe-number-input :min=0 placeholder="min"/>
        <tipe-number-input :max=5 placeholder="max"/>
        <tipe-number-input :min=-5 :max=5 placeholder="min/max"/>
      </tipe-card>
    </component-preview>
    <attr-title title="Step"/>
    <component-preview :sourcecode="stepSourcecode">
      <tipe-card class="flex">
        <tipe-number-input :step=5 placeholder="5 step" />
        <tipe-number-input :step=10 placeholder="10 step" />
      </tipe-card>
    </component-preview>
     <doc-links :left="docLink('left', 'number-input')" :right="docLink('right', 'number-input')" />
  </component-grid>
</template>

<script>
import { TipeCard, TipeNumberInput, TipeField } from '@tipe/ui'
import {
  DocTitle,
  CodeBlock,
  AttrTitle,
  DocLinks,
  ComponentPreview
} from '~/components/Docs'
import ComponentGrid from '~/components/Grid'
import docMixin from '~/mixins/doc-links'

export default {
  layout: 'docs',
  components: {
    TipeCard,
    TipeNumberInput,
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
  <tipe-number-input size="small"/>
  <tipe-number-input size="medium"/>
  <tipe-number-input size="large"/>
</tipe-card>`,
      statusSourcecode: `<tipe-card>
  <tipe-number-input placeholder="success" status="success"/>
  <tipe-number-input placeholder="warning" status="warning"/>
  <tipe-number-input placeholder="error" status="error"/>
</tipe-card>`,
      stateSourcecode: `<tipe-card>
  <tipe-number-input placeholder="disabled" disabled/>
  <tipe-number-input placeholder="waiting" waiting/>
</tipe-card>`,
      minmaxSourcecode: `<tipe-card>
  <tipe-number-input :min=0 placeholder="min"/>
  <tipe-number-input :max=5 placeholder="max"/>
  <tipe-number-input :min=-5 :max=5 placeholder="min/max"/>
</tipe-card>`,
      stepSourcecode: `<tipe-card>
  <tipe-number-input :step=5 placeholder="5 step" />
  <tipe-number-input :step=10 placeholder="10 step" />
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

.flex > div {
  margin: 1rem;
}

#status {
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}

#status > div {
  margin: 1rem;
}

#states {
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}

#states > div {
  margin: 1rem;
}
</style>

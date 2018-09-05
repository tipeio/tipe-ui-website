<template>
  <component-grid>
    <component-title title="Number Input" />
    <code-block sourcecode="import { TipeNumberInput } from '@tipe/ui'"/>
    <attr-title title="Size"/>
    <tipe-card class="flex">
      <tipe-number-input size="small" placeholder="small"/>
      <tipe-number-input size="medium" placeholder="medium"/>
      <tipe-number-input size="large" placeholder="large"/>
    </tipe-card>
    <code-block :sourcecode="sizeSourcecode"/>
    <attr-title title="Status"/>
    <tipe-card id="status">
      <tipe-number-input placeholder="success" status="success"/>
      <tipe-number-input placeholder="warning" status="warning"/>
      <tipe-number-input placeholder="error" status="error"/>
    </tipe-card>
    <code-block :sourcecode="statusSourcecode"/>
    <attr-title title="States"/>
    <tipe-card id="states">
      <tipe-number-input placeholder="disabled" disabled/>
      <tipe-number-input placeholder="waiting" waiting/>
    </tipe-card>
    <code-block :sourcecode="stateSourcecode"/>
    <attr-title title="Min/Max"/>
    <tipe-card class="flex">
      <tipe-number-input min=0 placeholder="min"/>
      <tipe-number-input max=5 placeholder="max"/>
      <tipe-number-input min=-5 max=5 placeholder="min/max"/>
    </tipe-card>
    <code-block :sourcecode="minmaxSourcecode"/>
    <attr-title title="Step"/>
    <tipe-card class="flex">
      <tipe-number-input step=5 placeholder="5 step" />
      <tipe-number-input step=10 placeholder="10 step" />
    </tipe-card>
    <code-block :sourcecode="stepSourcecode"/>
     <doc-links :left="docLink('left', 'number-input')" :right="docLink('right', 'number-input')" />
  </component-grid>
</template>

<script>
import { TipeCard, TipeNumberInput, TipeField } from '@tipe/ui'
import {
  ComponentTitle,
  CodeBlock,
  AttrTitle,
  DocLinks
} from '~/components/Docs'
import ComponentGrid from '~/components/Grid'
import docMixin from '~/mixins/doc-links'

export default {
  layout: 'docs',
  components: {
    TipeCard,
    TipeNumberInput,
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

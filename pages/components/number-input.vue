<template>
  <component-grid>
    <component-title title="Number Input" />
    <component-code-block sourcecode="import { TipeNumberInput } from '@tipe/ui'"/>
    <attr-title title="Size"/>
    <tipe-card class="flex">
      <tipe-number-input size="small" placeholder="small"/>
      <tipe-number-input size="medium" placeholder="medium"/>
      <tipe-number-input size="large" placeholder="large"/>
    </tipe-card>
    <component-code-block :sourcecode="sizeSourcecode"/>
    <attr-title title="Status"/>
    <tipe-card id="status">
      <tipe-number-input placeholder="success" status="success"/>
      <tipe-number-input placeholder="warning" status="warning"/>
      <tipe-number-input placeholder="error" status="error"/>
    </tipe-card>
    <component-code-block :sourcecode="statusSourcecode"/>
    <attr-title title="States"/>
    <tipe-card id="states">
      <tipe-number-input placeholder="disabled" disabled/>
      <tipe-number-input placeholder="waiting" waiting/>
    </tipe-card>
    <component-code-block :sourcecode="stateSourcecode"/>
    <attr-title title="Min/Max"/>
    <tipe-card class="flex">
      <tipe-number-input :min=0 placeholder="min"/>
      <tipe-number-input :max=5 placeholder="max"/>
      <tipe-number-input :min=-5 :max=5 placeholder="min/max"/>
    </tipe-card>
    <component-code-block :sourcecode="minmaxSourcecode"/>
    <attr-title title="Step"/>
    <tipe-card class="flex">
      <tipe-number-input :step=5 placeholder="5 step" />
      <tipe-number-input :step=10 placeholder="10 step" />
    </tipe-card>
    <component-code-block :sourcecode="stepSourcecode"/>
  </component-grid>
</template>

<script>
import { TipeCard, TipeNumberInput, TipeField } from '@tipe/ui'
import ComponentTitle from '~/components/Component/Title.vue'
import ComponentGrid from '~/components/Component/Grid.vue'
import ComponentCodeBlock from '~/components/Component/CodeBlock.vue'
import AttrTitle from '~/components/Component/AttrTitle.vue'

export default {
  layout: 'docs',
  components: {
    TipeCard,
    TipeNumberInput,
    ComponentTitle,
    ComponentGrid,
    ComponentCodeBlock,
    AttrTitle,
    TipeField
  },
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

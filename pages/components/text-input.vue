<template>
  <component-grid>
    <component-title title="Text Input" />
    <component-code-block sourcecode="import { TipeTextInput } from '@tipe/ui'"/>
    <attr-title title="Size"/>
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
    <component-code-block :sourcecode="sizeSourcecode"/>
    <attr-title title="Status"/>
    <tipe-card id="status">
        <tipe-text-input placeholder="success" status="success"/>
        <tipe-text-input placeholder="warning" status="warning"/>
        <tipe-text-input placeholder="error" status="error"/>
    </tipe-card>
    <component-code-block :sourcecode="statusSourcecode"/>
    <attr-title title="States"/>
    <tipe-card id="states">
        <tipe-text-input placeholder="disabled" disabled/>
        <tipe-text-input placeholder="waiting" waiting/>
    </tipe-card>
    <component-code-block :sourcecode="stateSourcecode"/>
  </component-grid>
</template>

<script>
import { TipeCard, TipeTextInput, TipeField } from '@tipe/ui'
import ComponentTitle from '~/components/Component/Title.vue'
import ComponentGrid from '~/components/Component/Grid.vue'
import ComponentCodeBlock from '~/components/Component/CodeBlock.vue'
import AttrTitle from '~/components/Component/AttrTitle.vue'

export default {
  layout: 'docs',
  components: {
    TipeCard,
    TipeTextInput,
    ComponentTitle,
    ComponentGrid,
    ComponentCodeBlock,
    AttrTitle,
    TipeField
  },
  data() {
    return {
      sizeSourcecode: `<tipe-card>
  <tipe-field label="small">
    <tipe-text-input size="small">Small</tipe-text-input>
  </tipe-field>
  <tipe-field label="medium">
    <tipe-text-input size="medium">Medium</tipe-text-input>
  </tipe-field>
  <tipe-field label="large">
    <tipe-text-input size="large">Large</tipe-text-input>
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

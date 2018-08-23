<template>
  <component-grid>
    <component-title title="Switch" />
    <component-code-block sourcecode="import { TipeSwitch } from '@tipe/ui'"/>
    <attr-title title="Size"/>
    <tipe-card class="flex">
      <tipe-switch label="small" size="small"/>
      <tipe-switch label="medium" size="medium"/>
      <tipe-switch label="large" size="large"/>
    </tipe-card>
    <component-code-block :sourcecode="sizeSourcecode"/>
    <attr-title title="Status"/>
    <tipe-card id="status">
        <tipe-switch label="success" status="success" size="large"/>
        <tipe-switch label="warning" status="warning" size="large"/>
        <tipe-switch label="error" status="error" size="large"/>
    </tipe-card>
    <component-code-block :sourcecode="statusSourcecode"/>
    <attr-title title="States"/>
    <tipe-card id="states">
        <tipe-switch label="disabled" size="large" disabled/>
        <tipe-switch label="waiting" size="large" waiting/>
    </tipe-card>
    <component-code-block :sourcecode="stateSourcecode"/>
  </component-grid>
</template>

<script>
import { TipeCard, TipeSwitch, TipeField } from '@tipe/ui'
import {
  AttrTitle,
  AttrDesc,
  ComponentCodeBlock,
  ComponentGrid,
  ComponentTitle
} from '~/components/Component'

export default {
  layout: 'docs',
  components: {
    TipeCard,
    TipeSwitch,
    ComponentTitle,
    ComponentGrid,
    ComponentCodeBlock,
    AttrTitle,
    TipeField
  },
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

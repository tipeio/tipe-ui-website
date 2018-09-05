<template>
  <component-grid>
    <component-title title="Switch" />
    <code-block sourcecode="import { TipeSwitch } from '@tipe/ui'"/>
    <attr-title title="Size"/>
    <tipe-card class="flex">
      <tipe-switch label="small" size="small"/>
      <tipe-switch label="medium" size="medium"/>
      <tipe-switch label="large" size="large"/>
    </tipe-card>
    <code-block :sourcecode="sizeSourcecode"/>
    <attr-title title="Status"/>
    <tipe-card id="status">
        <tipe-switch label="success" status="success" size="large"/>
        <tipe-switch label="warning" status="warning" size="large"/>
        <tipe-switch label="error" status="error" size="large"/>
    </tipe-card>
    <code-block :sourcecode="statusSourcecode"/>
    <attr-title title="States"/>
    <tipe-card id="states">
        <tipe-switch label="disabled" size="large" disabled/>
        <tipe-switch label="waiting" size="large" waiting/>
    </tipe-card>
    <code-block :sourcecode="stateSourcecode"/>
        <doc-links :left="docLink('left')" :right="docLink('right')" />

  </component-grid>
</template>

<script>
import { TipeCard, TipeSwitch, TipeField } from '@tipe/ui'
import {
  ComponentTitle,
  AttrTitle,
  CodeBlock,
  DocLinks
} from '~/components/Docs'
import ComponentGrid from '~/components/Grid.vue'

export default {
  layout: 'docs',
  components: {
    TipeCard,
    TipeSwitch,
    ComponentTitle,
    ComponentGrid,
    CodeBlock,
    AttrTitle,
    TipeField,
    DocLinks
  },
  methods: {
    docLink(side) {
      if (side === 'right') {
        return this.$store.state.docLinks[
          this.$store.state.linkIndexes['switch'] + 1
        ]
      }
      return this.$store.state.docLinks[
        this.$store.state.linkIndexes['switch'] - 1
      ]
    }
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

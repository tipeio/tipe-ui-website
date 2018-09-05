<template>
  <component-grid>
    <component-title title="Icon Button" />
    <code-block sourcecode="import { TipeButton } from '@tipe/ui'"/>
    <attr-title title="Icon Before"/>
    <tipe-card class="flex">
      <tipe-button iconBefore="plus">Before</tipe-button>
    </tipe-card>
    <code-block :sourcecode="beforeSourcecode"/>
    <attr-title title="Icon After"/>
    <tipe-card class="flex">
      <tipe-button iconAfter="plus">After</tipe-button>
    </tipe-card>
    <code-block :sourcecode="afterSourcecode"/>
    <attr-title title="Icon Only"/>
    <tipe-card class="flex">
      <tipe-button color="none" iconAfter="plus"/>
      <tipe-button iconAfter="plus"/>
    </tipe-card>
    <code-block :sourcecode="onlySourcecode"/>
    <attr-title title="Supported Icons"/>
    <tipe-card id="icons">
      <tipe-button v-for="icon in icons" :key="icon" :iconAfter=icon>{{icon}}</tipe-button>
    </tipe-card>
    <doc-links :left="docLink('left', 'icon-button')" :right="docLink('right', 'icon-button')" />
  </component-grid>
</template>

<script>
import { TipeCard, TipeButton } from '@tipe/ui'
import ComponentGrid from '~/components/Grid.vue'
import {
  AttrTitle,
  AttrDesc,
  CodeBlock,
  ComponentTitle,
  DocLinks
} from '~/components/Docs'
import docMixin from '~/mixins/doc-links'

export default {
  layout: 'docs',
  components: {
    TipeCard,
    TipeButton,
    ComponentTitle,
    ComponentGrid,
    CodeBlock,
    AttrTitle,
    DocLinks
  },
  mixins: [docMixin],
  data() {
    return {
      icons: [
        'arrow-down',
        'arrow-left',
        'arrow-right',
        'arrow-up',
        'color',
        'copy',
        'credit-card',
        'cross',
        'document',
        'edit',
        'flow',
        'folder-open',
        'folder',
        'gear',
        'grid',
        'group',
        'key',
        'link',
        'list',
        'markdown',
        'media',
        'number',
        'options',
        'pin',
        'plus',
        'search',
        'send',
        'share',
        'sign-out',
        'star-active',
        'star',
        'switch',
        'text',
        'trash',
        'user-circle',
        'user',
        'view',
        'wrench'
      ],
      beforeSourcecode: `<tipe-card>
    <tipe-button iconBefore="plus">Before</tipe-button>
  </tipe-card>`,
      afterSourcecode: `<tipe-card>
    <tipe-button iconAfter="plus">Before</tipe-button>
  </tipe-card>`,
      onlySourcecode: `<tipe-card>
  <tipe-button color="none" iconAfter="plus"/>
  <tipe-button iconAfter="plus"/>
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
  padding: 2rem 0;
  flex-wrap: wrap;
}
#icons {
  padding: 1.5rem;
  display: grid;
  width: 100%;
  align-items: center;
  justify-items: center;
  grid-auto-rows: minmax(3.5rem, auto);
  grid-template-columns: repeat(auto-fill, minmax(11rem, 1fr));
}
</style>

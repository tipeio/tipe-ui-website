<template>
  <component-grid>
    <component-title title="Icon Button" />
    <component-code-block sourcecode="import { TipeButton } from '@tipe/ui'"/>
    <attr-title title="Icon Before"/>
    <tipe-card class="flex">
      <tipe-button iconBefore="plus">Before</tipe-button>
    </tipe-card>
    <component-code-block :sourcecode="beforeSourcecode"/>
    <attr-title title="Icon After"/>
    <tipe-card class="flex">
      <tipe-button iconAfter="plus">After</tipe-button>
    </tipe-card>
    <component-code-block :sourcecode="afterSourcecode"/>
    <attr-title title="Icon Only"/>
    <tipe-card class="flex">
      <tipe-button color="none" iconAfter="plus"/>
      <tipe-button iconAfter="plus"/>
    </tipe-card>
    <component-code-block :sourcecode="onlySourcecode"/>
    <attr-title title="Supported Icons"/>
    <tipe-card id="icons">
      <tipe-button iconAfter="arrow-down">arrow-down</tipe-button>
      <tipe-button iconAfter="arrow-left">arrow-left</tipe-button>
      <tipe-button iconAfter="arrow-right">arrow-right</tipe-button>
      <tipe-button iconAfter="arrow-up">arrow-up</tipe-button>
      <tipe-button iconAfter="color">color</tipe-button>
      <tipe-button iconAfter="copy">copy</tipe-button>
      <tipe-button iconAfter="credit-card">credit-card</tipe-button>
      <tipe-button iconAfter="cross">cross</tipe-button>
      <tipe-button iconAfter="document">document</tipe-button>
      <tipe-button iconAfter="edit">edit</tipe-button>
      <tipe-button iconAfter="flow">flow</tipe-button>
      <tipe-button iconAfter="folder-open">folder-open</tipe-button>
      <tipe-button iconAfter="folder">folder</tipe-button>
      <tipe-button iconAfter="gear">gear</tipe-button>
      <tipe-button iconAfter="grid">grid</tipe-button>
      <tipe-button iconAfter="group">group</tipe-button>
      <tipe-button iconAfter="key">key</tipe-button>
      <tipe-button iconAfter="link">link</tipe-button>
      <tipe-button iconAfter="list">list</tipe-button>
      <tipe-button iconAfter="markdown">markdown</tipe-button>
      <tipe-button iconAfter="media">media</tipe-button>
      <tipe-button iconAfter="number">number</tipe-button>
      <tipe-button iconAfter="options">options</tipe-button>
      <tipe-button iconAfter="pin">pin</tipe-button>
      <tipe-button iconAfter="plus">plus</tipe-button>
      <tipe-button iconAfter="search">search</tipe-button>
      <tipe-button iconAfter="send">send</tipe-button>
      <tipe-button iconAfter="share">share</tipe-button>
      <tipe-button iconAfter="sign-out">sign-out</tipe-button>
      <tipe-button iconAfter="star-active">star-active</tipe-button>
      <tipe-button iconAfter="star">star</tipe-button>
      <tipe-button iconAfter="switch">switch</tipe-button>
      <tipe-button iconAfter="text">text</tipe-button>
      <tipe-button iconAfter="trash">trash</tipe-button>
      <tipe-button iconAfter="user-circle">user-circle</tipe-button>
      <tipe-button iconAfter="user">user</tipe-button>
      <tipe-button iconAfter="view">view</tipe-button>
      <tipe-button iconAfter="wrench">wrench</tipe-button>
    </tipe-card>
  </component-grid>
</template>

<script>
import { TipeCard, TipeButton } from '@tipe/ui'
import ComponentTitle from '~/components/Component/Title.vue'
import ComponentGrid from '~/components/Component/Grid.vue'
import ComponentCodeBlock from '~/components/Component/CodeBlock.vue'
import AttrTitle from '~/components/Component/AttrTitle.vue'
export default {
  layout: 'docs',
  components: {
    TipeCard,
    TipeButton,
    ComponentTitle,
    ComponentGrid,
    ComponentCodeBlock,
    AttrTitle
  },
  data() {
    return {
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

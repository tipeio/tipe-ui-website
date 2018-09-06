<template>
  <component-grid>
    <doc-title>Installation</doc-title>
    <doc-subtitle>npm</doc-subtitle>
    <doc-sub-text>Check out it out on <a href="https://www.npmjs.com/package/@tipe/ui" target="__blank">npm</a>.</doc-sub-text>
    <code-block sourcecode="npm install @tipe/ui"/>
    <doc-subtitle>yarn</doc-subtitle>
    <doc-sub-text>We recomend installing with <a href="https://yarnpkg.com/en/" target="__blank">yarn</a>.</doc-sub-text>
    <code-block sourcecode="yarn add @tipe/ui"/>
    <doc-links :right="docLink('right', 'installation')" :left="docLink('left', 'installation')" />
  </component-grid>
</template>

<script>
import ComponentGrid from '~/components/Grid.vue'
import {
  DocLinks,
  DocTitle,
  DocSubtitle,
  CodeBlock,
  DocSubText
} from '~/components/Docs'
import docMixin from '~/mixins/doc-links'

export default {
  layout: 'docs',
  mixins: [docMixin],
  components: {
    ComponentGrid,
    DocLinks,
    DocTitle,
    DocSubtitle,
    CodeBlock,
    DocSubText
  }
}
</script>

<style lang="postcss" scoped>
</style>

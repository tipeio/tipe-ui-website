<template>
  <component-grid>
    <doc-title title="Changelog"/>
    <vue-markdown class="markdown" v-if="changelog" >{{changelog}}</vue-markdown>
    <doc-links :right="docLink('right', 'changelog')" />
  </component-grid>
</template>

<script>
import ChangelogQuery from '~/apollo/query/ChangelogQuery.graphql'
import ComponentGrid from '~/components/Grid.vue'
import { DocLinks, DocTitle } from '~/components/Docs'
import docMixin from '~/mixins/doc-links'
import VueMarkdown from 'vue-markdown'

export default {
  layout: 'docs',
  mixins: [docMixin],
  components: {
    ComponentGrid,
    DocLinks,
    DocTitle,
    VueMarkdown
  },
  data() {
    return {
      changelog: null
    }
  },
  apollo: {
    changelog: {
      query: ChangelogQuery,
      variables: {
        changelog: '5b903be158c39600136120d2'
      },
      prefetch: true,
      manual: true,
      result({ data, loading }) {
        this.changelog = data.changelog.markdownContent
      }
    }
  }
}
</script>

<style lang="postcss" scoped>
</style>

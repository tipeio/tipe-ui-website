<template>
  <component-grid>
   <doc-title>Design Disciplines</doc-title>
   <div class="row">
     <guide-card svg="consistency" title="Consistency"/>
     <guide-card svg="feedback" title="Feedback"/>
     <guide-card svg="efficiency" title="Efficiency"/>
     <guide-card svg="controllability" title="Controllability"/>
   </div>
   <vue-markdown v-if="designDisciplines" class="design-markdown">{{designDisciplines}}</vue-markdown>
  </component-grid>
</template>

<script>
import DesignDisciplinesQuery from '~/apollo/query/DesignDisciplinesQuery.graphql'

import ComponentGrid from '~/components/Grid.vue'
import { DocTitle } from '~/components/Docs'
import GuideCard from '~/components/Guide/GuideCard'
import VueMarkdown from 'vue-markdown'

export default {
  layout: 'guide',
  components: {
    ComponentGrid,
    DocTitle,
    GuideCard,
    VueMarkdown
  },
  data() {
    return {
      designDisciplines: null
    }
  },
  apollo: {
    designDisciplines: {
      query: DesignDisciplinesQuery,
      variables: {
        changelog: '5b909e7d58c39600136120d7'
      },
      prefetch: true,
      manual: true,
      result({ data, loading }) {
        this.designDisciplines = data.designDisciplines.disciplines
      }
    }
  }
}
</script>

<style lang="postcss" scoped>
.row {
  display: flex;
}
</style>

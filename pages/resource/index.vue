<template>
  <component-grid>
   <doc-title>Resource</doc-title>
   <resource-card title="Sketch Template" desc="Apply components from Element template, 
so you can improve design efficiency while 
keeping a unified visual style."/>
  </component-grid>
</template>

<script>
import ComponentGrid from '~/components/Grid.vue'
import ResourceCard from '~/components/Resource/ResourceCard'

import { DocTitle } from '~/components/Docs'

export default {
  layout: 'resource',
  components: {
    ComponentGrid,
    DocTitle,
    ResourceCard
  }
}
</script>

<style lang="postcss" scoped>
</style>

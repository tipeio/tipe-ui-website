<template>
  <List class="list">
      <Heading>Sponsors</Heading>
      <sponsor logo="sample-logo" text="It was a humorously perilous business 
      for both of us. For, before we proceed 
      further," />
      <nuxt-link to="/guide/design-disciplines">
        <Heading>Design Disciplines</Heading>
      </nuxt-link>
        <nuxt-link to="/guide/navigation">
        <Heading>Navigation</Heading>
      </nuxt-link>
  </List>
</template>

<script>
import vueTypes from 'vue-types'
import List from '../List/List.vue'
import Heading from '../List/Heading.vue'
import Sponsor from '~/components/Sponsor.vue'

export default {
  name: 'GuideList',
  components: {
    List,
    Heading,
    Sponsor
  }
}
</script>
<style lang="postcss" scoped>
.list {
  margin-top: 60px;
  max-width: 290px;
}
.nuxt-link-active > div {
  color: var(--teal);
}
</style>

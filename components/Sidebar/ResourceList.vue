<template>
  <List class="list">
      <nuxt-link to="/resource/button">
        <Heading>Buttons</Heading>
      </nuxt-link>
        <nuxt-link to="/resource/form">
        <Heading>Form</Heading>
      </nuxt-link>
  </List>
</template>

<script>
import vueTypes from 'vue-types'
import List from '../List/List.vue'
import Heading from '../List/Heading.vue'

export default {
  name: 'GuideList',
  components: {
    List,
    Heading
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

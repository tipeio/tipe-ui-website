<template>
  <div :data-tipe-ui-docs="$options.name">
    <nuxt-link class="link" to="/changelog"><div class="flex"><left-arrow/><p class="text">Changelog</p></div></nuxt-link>
    <nuxt-link class="link" to="quick-start"><div class="flex"><p class="text">Quick Start</p><right-arrow/></div></nuxt-link>
  </div>
</template>

<script>
import vueTypes from 'vue-types'
import { LeftArrow, RightArrow } from '~/assets'

export default {
  name: 'UiDocLinks',
  props: {
    title: vueTypes.string.def('')
  },
  components: {
    LeftArrow,
    RightArrow
  }
}
</script>

<style lang="postcss" scoped>
[data-tipe-ui-docs='UiDocLinks'] {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.link {
  text-decoration: none;
}

.text {
  color: var(--text-purple-gray);
  font-family: Lato;
  font-size: 16px;
  line-height: 19px;
  margin: 0 1rem;
}

.flex {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

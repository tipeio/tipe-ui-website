<template>
  <div :data-tipe-ui-docs="$options.name">
    <nuxt-link v-if="left" class="link" :to="left.link"><div class="flex"><left-arrow/><p class="text">{{left.name}}</p></div></nuxt-link>
    <nuxt-link  v-if="right" class="link" :to="right.link"><div class="flex"><p class="text">{{right.name}}</p><right-arrow/></div></nuxt-link>
  </div>
</template>

<script>
import vueTypes from 'vue-types'
import { LeftArrow, RightArrow } from '~/assets'

export default {
  name: 'UiDocLinks',
  props: {
    right: vueTypes.shape({ name: String, link: String }),
    left: vueTypes.shape({ name: String, link: String })
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

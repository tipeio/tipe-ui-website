<template>
  <nuxt-link :to="to" class="nav-link" :class="{active}">{{text}}</nuxt-link>
</template>

<script>
import vueTypes from 'vue-types'

export default {
  name: 'UiNavLink',
  props: {
    text: vueTypes.string.def(''),
    to: vueTypes.string.required,
    active: vueTypes.bool.def(false)
  }
}
</script>

<style lang="postcss" scoped>
.nav-link {
  opacity: 0.7;
  color: #ffffff;
  font-family: 'Lato', sans-serif;
  font-size: 0.8125rem;
  font-weight: bold;
  letter-spacing: 2px;
  line-height: 16px;
  text-transform: uppercase;
  text-decoration: none;
  text-align: center;
  margin-right: 27px;
  margin-left: 27px;
}

.active {
  opacity: 1;
}
</style>

<template>
  <nuxt-link @click="$emit('support')" :to="to" class="nav-link" :class="{active, 'footer-link': footer}">{{text}}</nuxt-link>
</template>

<script>
import vueTypes from 'vue-types'

export default {
  name: 'UiNavLink',
  props: {
    text: vueTypes.string.def(''),
    to: vueTypes.string.required,
    active: vueTypes.bool.def(false),
    footer: vueTypes.bool.def(false)
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
  margin: 0 10px;
}

@media screen and (min-width: 1500px) {
  .nav-link {
    margin: 0 27px;
  }
}

.footer-link {
  font-size: 1rem;
  opacity: 1;
  margin: 0 27px;
}

.active {
  opacity: 1;
}

.nuxt-link-active {
  opacity: 1;
}
</style>

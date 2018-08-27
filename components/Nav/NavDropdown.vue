<template>
  <div class="wrapper">
    <div class="row">
      <a @click="hidden = !hidden" class="nav-link">{{text}}</a>
      <down-arrow class="icon"/>
    </div>
    <ul class="dropdown" v-if="!hidden">
      <li v-for="link in links" :key="link.path"><nuxt-link :to="link.path">{{link.name}}</nuxt-link></li>
    </ul>
  </div>

</template>

<script>
import vueTypes from 'vue-types'
import DownArrow from '~/assets/down-arrow.svg'

export default {
  name: 'UiNavDropdown',
  components: {
    DownArrow
  },
  props: {
    text: vueTypes.string.def(''),
    links: vueTypes.array
  },
  data() {
    return {
      hidden: true
    }
  }
}
</script>

<style lang="postcss" scoped>
.wrapper {
  width: 100%;
  display: flex;
  align-items: center;
}
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
}

.active {
  opacity: 1;
}

.dropdown {
  display: flex;
  flex-direction: column;
  margin: 0;
  align-items: center;
  justify-content: start;
  background-color: #fff;
  position: absolute;
  z-index: 2;
  padding: 0;
}

.dropdown > li {
  list-style-type: none;
  text-decoration: none;
  color: black;
}

.row {
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
}

.icon {
  margin-left: 1rem;
}
</style>

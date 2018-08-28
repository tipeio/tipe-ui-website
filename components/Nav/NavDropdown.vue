<template>
  <div class="wrapper">
    <div @click="hidden = !hidden" class="row">
      <a class="nav-link">{{text}}</a>
      <down-arrow class="icon"/>
    </div>
    <ul class="dropdown" v-if="!hidden" v-on-clickaway="away">
      <nuxt-link @click="hidden = true" v-for="(link, index) in links" :key="link.path" :to="link.path" :class="{last: index === links.length -1}">{{link.name}}</nuxt-link>
    </ul>
  </div>

</template>

<script>
import vueTypes from 'vue-types'
import { directive as onClickaway } from 'vue-clickaway'
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
  directives: {
    onClickaway: onClickaway
  },
  data() {
    return {
      hidden: true
    }
  },
  methods: {
    away() {
      this.hidden = true
    }
  }
}
</script>

<style lang="postcss" scoped>
.wrapper {
  display: flex;
  align-items: center;
  margin: 0 10px;
  flex-direction: column;
}

@media screen and (min-width: 1500px) {
  .wrapper {
    margin: 0 27px;
  }
}

.wrapper:hover {
  cursor: pointer;
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

.dropdown {
  display: flex;
  flex-direction: column;
  margin: 0;
  align-items: center;
  justify-content: start;
  background-color: #fff;
  padding: 0;
  z-index: 2;
  position: absolute;
  margin-top: 4rem;
  width: 148px;
  border-radius: 4px;
  background-color: #ffffff;
  box-shadow: 3px 10px 20px 0 rgba(0, 0, 0, 0.1);
}

.dropdown > a {
  list-style-type: none;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  text-decoration: none;
  color: #627098;
  font-family: 'Lato', sans-serif;
  letter-spacing: 0.5px;
  font-size: 0.8125rem;
}

.dropdown > a:hover {
  background-color: #f7f8fb;
  border-left: 3px solid #1cc5bc;
  padding-right: 3px;
}

.dropdown > .last:hover {
  border-radius: 0 0 4px 0;
}

.row {
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
}

.icon {
  margin-left: 5px;
}
</style>

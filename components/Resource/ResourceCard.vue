<template>
  <div class="card">
    <ic-sketch />
    <p class="title">{{title}}</p>
    <p class="desc">{{desc}}</p>
    <nuxt-link :to="link"><ui-button text="Download"/></nuxt-link>
  </div>
</template>

<script>
import vueTypes from 'vue-types'
import UiButton from '~/components/Button.vue'
import { IcSketch } from '~/assets'

export default {
  name: 'ProjectCard',
  components: {
    UiButton,
    IcSketch
  },
  props: {
    title: vueTypes.string.def(''),
    desc: vueTypes.string.def(''),
    link: vueTypes.string.def('')
  }
}
</script>

<style lang="postcss" scoped>
.card {
  display: grid;
  grid-row-gap: 1.2rem;
  justify-items: center;
  align-content: center;
  border-radius: 5px;
  background-color: #ffffff;
  box-shadow: 0 32px 76px 0 rgba(66, 35, 185, 0.2);
  margin: 0 17px;
  padding: 40px 20px;
  height: 379.4px;
  width: 273px;
}

.title {
  color: var(--text-purple-gray);
  font-family: Lato;
  font-size: 16.8px;
  letter-spacing: 0.7px;
  line-height: 21px;
  text-align: center;
}

.desc {
  color: var(--text-purple-gray);
  font-family: Lato;
  font-size: 9.8px;
  letter-spacing: 0.41px;
  line-height: 12px;
  text-align: center;
}
</style>

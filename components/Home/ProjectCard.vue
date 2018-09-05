<template>
  <div class="card">
    <div class="circle">
      <component :is="component" />
    </div>
    <p class="title">{{title}}</p>
    <p class="desc">{{desc}}</p>
    <nuxt-link :to="link"><ui-button text="View Details"/></nuxt-link>
  </div>
</template>

<script>
import vueTypes from 'vue-types'
import UiButton from '~/components/Button.vue'
import { IcGuide, IcComponent, IcResources } from '~/assets'

export default {
  name: 'ProjectCard',
  components: {
    UiButton,
    IcGuide,
    IcComponent,
    IcResources
  },
  props: {
    title: vueTypes.string.def(''),
    desc: vueTypes.string.def(''),
    link: vueTypes.string.def(''),
    svg: vueTypes.string.def('')
  },
  computed: {
    component() {
      const svgs = {
        guide: IcGuide,
        component: IcComponent,
        resources: IcResources
      }
      return svgs[this.svg]
    }
  }
}
</script>

<style lang="postcss" scoped>
.card {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 5px;
  background-color: #ffffff;
  box-shadow: 0 32px 76px 0 rgba(66, 35, 185, 0.2);
  margin: 0 17px;
  padding: 40px 20px;
}

.title {
  color: var(--text-purple);
  font-family: Lato;
  font-size: 24px;
  letter-spacing: 1px;
  line-height: 29px;
  text-align: center;
  margin: 20px;
}

.desc {
  color: var(--text-purple);
  font-family: Lato;
  font-size: 14px;
  letter-spacing: 0.58px;
  line-height: 17px;
  text-align: center;
  margin: 20px;
}

.circle {
  height: 165px;
  width: 165px;
  background: radial-gradient(circle, #714bfe 0%, #6047fa 51.09%, #5727e1 100%);
  border-radius: 50%;
}
</style>

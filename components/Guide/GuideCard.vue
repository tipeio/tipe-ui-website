<template>
  <div class="card">
    <div class="circle">
      <component :is="component" />
    </div>
    <p class="title">{{title}}</p>
  </div>
</template>

<script>
import vueTypes from 'vue-types'
import {
  IcConsistency,
  IcFeedback,
  IcEfficiency,
  IcControllability
} from '~/assets'

export default {
  name: 'GuideCard',
  components: {
    IcConsistency,
    IcFeedback,
    IcEfficiency,
    IcControllability
  },
  props: {
    title: vueTypes.string.def(''),
    link: vueTypes.string.def(''),
    svg: vueTypes.string.def('')
  },
  computed: {
    component() {
      const svgs = {
        consistency: IcConsistency,
        feedback: IcFeedback,
        efficiency: IcEfficiency,
        controllability: IcControllability
      }
      return svgs[this.svg]
    }
  }
}
</script>

<style lang="postcss" scoped>
.card {
  height: 211px;
  width: 190px;
  border: 1px solid #e8e8e8;
  border-radius: 5px;
  background-color: #ffffff;
  margin: 0 17px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.title {
  color: var(--text-purple);
  text-align: center;
  margin: 20px;
  font-family: Lato;
  font-size: 18px;
  line-height: 22px;
}

.circle {
  height: 90px;
  width: 90px;
  background: radial-gradient(circle, #714bfe 0%, #6047fa 51.09%, #5727e1 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

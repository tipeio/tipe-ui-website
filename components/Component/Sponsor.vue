<template>
  <div class="row">
    <component :is="component"/>
    <p class="text">{{text}}</p>
  </div>
</template>

<script>
import vueTypes from 'vue-types'
import SampleLogo from '~/assets/sample-logo.svg'

export default {
  name: 'Sponsor',
  props: {
    text: vueTypes.string.def(''),
    logo: vueTypes.string.def('')
  },
  computed: {
    component() {
      var logos = {
        'sample-logo': SampleLogo
      }
      return logos[this.logo]
    }
  }
}
</script>

<style lang="postcss" scoped>
.row {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 1rem 0;
}

.text {
  color: #627098;
  font-family: Lato;
  font-size: 10px;
  line-height: 12px;
  width: 65%;
  margin: 0 5px;
  align-self: start;
}
</style>

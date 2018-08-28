<template>
  <button :class="{outline}">{{text}}</button>
</template>

<script>
import vueTypes from 'vue-types'

export default {
  name: 'UiButton',
  props: {
    text: vueTypes.string.def(''),
    outline: vueTypes.bool.def(false)
  }
}
</script>

<style lang="postcss" scoped>
button {
  height: 50px;
  width: 200px;
  border-radius: 4px;
  background: linear-gradient(45.61deg, #12e49a 0%, #1be5b2 100%);
  color: #ffffff;
  font-family: Poppins;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 1px;
  line-height: 20px;
  text-align: center;
  margin: 19px;
  border: 1px solid #12e49a;
  text-transform: uppercase;
}

.outline {
  background-color: transparent;
  background: none;
}
</style>

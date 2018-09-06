<template>
  <div>
    <div class="links">
      <a :class="{active: htmlActive}" @click="click">HTML</a>
      <a :class="{active: resultActive}" @click="click">Result</a>
    </div>
    <div :style="containerStyle">
      <code-block v-if="htmlActive" :sourcecode="sourcecode"></code-block>
      <slot v-if="resultActive"/>
    </div>
  </div>
</template>

<script>
import vueTypes from 'vue-types'
import { CodeBlock } from '~/components/Docs'

export default {
  name: 'ComponentPreview',
  props: {
    sourcecode: vueTypes.string,
    height: vueTypes.string.def('100%'),
    width: vueTypes.string.def('100%')
  },
  components: {
    CodeBlock
  },
  data() {
    return {
      htmlActive: false,
      resultActive: true
    }
  },
  methods: {
    click() {
      this.htmlActive = !this.htmlActive
      this.resultActive = !this.resultActive
    }
  },
  computed: {
    containerStyle: props => ({
      'min-height': props.height,
      width: props.width
    })
  }
}
</script>

<style lang="postcss" scoped>
[data-tipe-ui-docs='ComponentPreview'] {
}

.links {
  display: flex;
}

.links > a {
  color: var(--text-purple);
  font-family: Lato;
  font-size: 16px;
  line-height: 19px;
  width: 76px;
  display: flex;
  justify-content: center;
  height: 30px;
}

.links > .active {
  border-bottom: 3px solid #6849fc;
}
</style>

<template>
  <tipe-scroll>
    <div :data-tipe-ui-docs="$options.name">
        <slot/>
    </div>
  </tipe-scroll>
</template>


<script>
import TipeScroll from './Scroll.vue'
export default {
  name: 'ComponentGrid',
  components: {
    TipeScroll
  }
}
</script>

<style>
[data-tipe-ui-docs='ComponentGrid'] {
  display: grid;
  width: 100%;
  grid-row-gap: 2rem;
  align-content: start;
  padding: 80px;
}

.scroll {
  padding-right: 0;
}
</style>

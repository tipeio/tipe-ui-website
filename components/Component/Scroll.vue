<template>
  <div
    :class="$style.window"
    data-tipe-ui="TipeScrollable"
  >
    <div :class="$style.scrollable">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TipeScroll'
}
</script>
<style lang="postcss" module>
.window {
  height: 100%;
  width: 100%;
  position: relative;
  overflow: hidden;
}
.scrollable {
  width: 100%;
  max-height: 80vh;
  overflow-y: scroll;
}
</style>

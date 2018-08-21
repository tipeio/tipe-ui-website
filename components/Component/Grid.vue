<template>
  <div :data-tipe-ui="$options.name">
    <slot/>
  </div>
</template>


<script>
export default {
  name: 'ComponentGrid'
}
</script>

<style>
[data-tipe-ui='ComponentGrid'] {
  display: grid;
  grid-row-gap: 2rem;
  align-content: start;
}
</style>

<template>
  <h2 :data-tipe-ui-docs="$options.name"><slot/></h2>
</template>

<script>
export default {
  name: 'DocSubtitle'
}
</script>

<style lang="postcss" scoped>
[data-tipe-ui-docs='DocSubtitle'] {
  color: var(--text-darker-gray);
  font-family: Lato;
  font-size: 24px;
  line-height: 29px;
}
</style>

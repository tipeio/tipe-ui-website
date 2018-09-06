<template>
  <h1 :data-tipe-ui-docs="$options.name"><slot/></h1>
</template>

<script>
export default {
  name: 'DocTitle'
}
</script>

<style lang="postcss" scoped>
[data-tipe-ui-docs='DocTitle'] {
  color: var(--text-purple);
  font-size: 2.5rem;
  font-family: Lato;
  font-size: 40px;
  font-weight: bold;
  line-height: 48px;
}
</style>

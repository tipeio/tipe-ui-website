<template>
  <p :data-tipe-ui-docs="$options.name"><slot/></p>
</template>

<script>
export default {
  name: 'DocSubtext'
}
</script>

<style lang="postcss" scoped>
[data-tipe-ui-docs='DocSubtext'] {
  color: var(--text-purple-gray);
  font-family: Lato;
  font-size: 16px;
  line-height: 19px;
}

[data-tipe-ui-docs='DocSubtext'] > a {
  color: var(--text-teal);
  font-family: Lato;
  font-size: 16px;
  line-height: 19px;
  text-decoration: none;
}
</style>

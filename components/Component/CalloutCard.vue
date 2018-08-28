<template>
  <div class="card">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'CalloutCard'
}
</script>

<style lang="postcss" scoped>
.card {
  display: flex;
  background-color: #f3f8f3;
  border: 1px solid #50af51;
  border-radius: 3px;
  border-left: 10px solid #1cc5bc;
  width: 100%;
  padding: 1.625rem;
}
</style>

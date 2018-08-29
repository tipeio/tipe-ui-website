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
  background-color: rgba(104, 73, 252, 0.05);
  border: 1px solid var(--teal);
  border-radius: 3px;
  border-left: 10px solid var(--teal);
  width: 100%;
  padding: 1.625rem;
}
</style>

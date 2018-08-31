<template>
  <div class="card" :class="{[color]: true}">
    <slot/>
  </div>
</template>

<script>
import vueTypes from 'vue-types'

export default {
  name: 'CalloutCard',
  props: {
    color: vueTypes.string.def('teal')
  }
}
</script>

<style lang="postcss" scoped>
.card {
  display: flex;
  background-color: #f7f8fb;
  border-radius: 3px;
  width: 100%;
  padding: 1.625rem;
}

.teal {
  border: 1px solid var(--teal);
  border-left: 10px solid var(--teal);
}

.purple {
  border: 1px solid var(--purple);
  border-left: 10px solid var(--purple);
}

.orange {
  border: 1px solid var(--orange);
  border-left: 10px solid var(--orange);
}

.red {
  border: 1px solid var(--red);
  border-left: 10px solid var(--red);
}
</style>

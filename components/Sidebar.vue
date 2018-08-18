<template>
  <div :data-tipe-ui="$options.name" >
    <div class="sidebar">
    </div>
  </div>
</template>

<script>
  import vueTypes from 'vue-types'
export default {
  name: 'UISidebar',
}
</script>

<style lang="postcss">

[data-tipe-ui='UISidebar'] {


}

.sidebar {
  height: 100%;
  background-color: var(--light-purple);
  border: 1px solid var(--light-purple);
  border-radius: 6px;
}


</style>




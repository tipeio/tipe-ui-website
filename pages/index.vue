<template>
  <section class="container">
      <side-bar class="grid-sidebar"/>
      <div class="grid-content border"/>
 </section>
</template>

<script>
import SideBar from '~/components/Sidebar.vue'

export default {
  components: {
    SideBar
  }
}
</script>

<style lang="postcss" scoped>
.container {
  min-height: 100vh;
  display: grid;
  grid-column-gap: 1rem;
  grid-template-columns: 1fr 2fr 5fr 1fr;
  grid-auto-rows: 1fr;
  grid-template-areas: '. sidebar content .';
  color: grey;
}

.grid-sidebar {
  grid-area: sidebar;
}

.grid-content {
  grid-area: content;
}

.border {
  border: 1px solid red;
}
</style>

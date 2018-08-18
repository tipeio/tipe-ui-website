<template>
  <section class="container">
      <ui-nav class="grid-nav"/>
      <ui-side-bar class="grid-sidebar"/>
      <div class="grid-content border"/>
 </section>
</template>

<script>
import UiSideBar from '~/components/Sidebar.vue'
import UiNav from '~/components/Nav.vue'

export default {
  components: {
    UiSideBar,
    UiNav
  }
}
</script>

<style lang="postcss" scoped>
.container {
  min-height: 100vh;
  display: grid;
  grid-column-gap: 1rem;
  grid-row-gap: 2rem;
  grid-template-columns: 1fr 2fr 5fr 1fr;
  grid-auto-rows: 70px 1fr;
  grid-template-areas:
    ' nav nav nav nav'
    '. sidebar content .';
  color: grey;
}

.grid-sidebar {
  grid-area: sidebar;
}

.grid-content {
  grid-area: content;
}

.grid-nav {
  grid-area: nav;
}

.border {
  border: 1px solid red;
}
</style>

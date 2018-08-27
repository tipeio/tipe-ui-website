<template>
  <section class="container">
    <ui-nav class="grid-nav"/>
    <ui-side-bar class="grid-sidebar"/>
    <nuxt class="grid-content"/>
  </section>
</template>

<script>
import UiSideBar from '~/components/Sidebar.vue'
import UiNav from '~/components/Nav'

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
    ' . nav nav .'
    '. sidebar content .';
}

.grid-sidebar {
  grid-area: sidebar;
}

.grid-content {
  grid-area: content;
  padding: 1.5rem;
}

.grid-nav {
  grid-area: nav;
}
</style>

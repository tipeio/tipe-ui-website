<template>
  <section class="container">
    <ui-nav class="grid-nav"/>
    <ui-side-bar type="component" class="grid-sidebar"/>
    <nuxt class="grid-content"/>
  </section>
</template>

<script>
import UiSideBar from '~/components/Sidebar'
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
  grid-template-columns: 2fr 5fr;
  grid-auto-rows: 100px 1fr;
  grid-template-areas:
    'nav nav'
    'sidebar content';
}

.grid-sidebar {
  grid-area: sidebar;
  display: grid;
  grid-template-columns: 50px auto;
  grid-template-areas: '. list';
}

@media screen and (min-width: 1800px) {
  .container {
    grid-template-columns: 1fr 2fr 5fr 1fr;
    grid-template-areas:
      '. nav nav .'
      '. sidebar content .';
  }

  .grid-sidebar {
    grid-template-columns: 100px auto;
  }
}

.grid-content {
  grid-area: content;
  padding: 1.5rem;
}

.grid-nav {
  grid-area: nav;
}
</style>

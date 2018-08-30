<template>
  <div class="outter-grid">
   <header-section/>
   <project-section/>
   <ui-footer/>
  </div>
</template>

<script>
import HeaderSection from '~/components/Home/HeaderSection.vue'
import ProjectSection from '~/components/Home/ProjectSection.vue'
import UiFooter from '~/components/Home/Footer.vue'
export default {
  components: {
    HeaderSection,
    ProjectSection,
    UiFooter
  }
}
</script>

<style lang="postcss" scoped>
.outter-grid {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas: 'header' 'info' ' . ' 'footer';
  grid-template-rows: auto auto 100px auto;
  grid-column-gap: 1rem;
  grid-row-gap: 2rem;
  overflow-y: hidden;
}

@media screen and (min-width: 1800px) {
  .outter-grid {
    grid-template-columns: 1fr 7fr 1fr;
    grid-template-areas: '. header .' '. info .' ' . . .' '. footer .';
  }
}
</style>

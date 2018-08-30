<template>
  <div class="outter-grid">
   <header-section/>
   <project-section/>
  </div>
</template>

<script>
import HeaderSection from '~/components/Home/HeaderSection.vue'
import ProjectSection from '~/components/Home/ProjectSection.vue'

export default {
  components: {
    HeaderSection,
    ProjectSection
  }
}
</script>

<style lang="postcss" scoped>
.outter-grid {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas: 'header' 'info';
  grid-template-rows: auto auto;
  grid-column-gap: 1rem;
}

@media screen and (min-width: 1800px) {
  .outter-grid {
    grid-template-columns: 1fr 7fr 1fr;
    grid-template-areas: '. header .' '. info .';
  }
}
</style>

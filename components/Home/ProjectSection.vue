<template>
    <section class="info">
      <purple-shape class="purple-shape"/>
      <div class="info-text">
        <tipe-logo />
        <h3 class="info-title">How Developers Use Tipe Ui</h3>
      </div>
      <div class="card-row">
        <project-card title="Guide" desc="Understand the design guidelines, helping designers 
build product that's logically sound, reasonably 
structured and easy to use." svg="guide"/>
        <project-card title="Component" desc="Understand the design guidelines, helping designers 
build product that's logically sound, reasonably 
structured and easy to use." svg="component"/>
        <project-card title="Resources" desc="Understand the design guidelines, helping designers 
build product that's logically sound, reasonably 
structured and easy to use." svg="resources"/>
      </div>
    </section>
</template>

<script>
import ProjectCard from './ProjectCard.vue'
import TipeLogo from '~/assets/tipe-logo.svg'
import PurpleShape from '~/assets/purple-shape.svg'

export default {
  name: 'ProjectSection',
  components: {
    ProjectCard,
    TipeLogo,
    PurpleShape
  }
}
</script>

<style lang="postcss" scoped>
.info {
  grid-area: info;
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-rows: auto 60px auto 10px;
  grid-template-areas: 'info-text' '.' 'card-row' 'purple';
}

.card-row {
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  grid-area: card-row;
}

.info-title {
  color: var(--text-purple);
  font-family: Lato;
  font-size: 40px;
  font-weight: bold;
  letter-spacing: 0.6px;
  line-height: 48px;
  text-align: center;
  margin: 1rem 0;
}

.info-text {
  display: flex;
  align-items: center;
  flex-direction: column;
  z-index: 2;
  grid-area: info-text;
  margin: 2rem 0;
}

.purple-shape {
  z-index: 1;
  grid-area: purple;
  grid-row-start: 4;
}
</style>

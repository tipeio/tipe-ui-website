<template>
  <div class="outter-grid">
    <section class="header-content">
      <stars class="stars" />
      <ui-nav class="home-nav" transparent/>
      <div class="container">
        <h1 class="title">Flexible Ui Library</h1>
        <h2 class="subtitle">Focus on your code while designers, writers, and content specialists take care of the message</h2>
        <div class="row">
          <ui-button text="Get Started"/> 
          <ui-button outline text="Github (v1.0.0)"/>
        </div>
      </div>
      <space-people class="space"/>
    </section>
    <section class="info">
      <purple-shape class="purple-shape"/>
      <div class="info-text">
        <h3 class="info-title">Projects that use Tipe Ui</h3>
        <logo-with-text />
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
  </div>
</template>

<script>
import UiNav from '~/components/Nav'
import UiButton from '~/components/Component/Button.vue'
import ProjectCard from '~/components/Component/ProjectCard.vue'
import SpacePeople from '~/assets/space-people.svg'
import Stars from '~/assets/stars.svg'
import LogoWithText from '~/assets/logo-with-text.svg'
import PurpleShape from '~/assets/purple-shape.svg'

export default {
  components: {
    UiNav,
    SpacePeople,
    ProjectCard,
    UiButton,
    Stars,
    LogoWithText,
    PurpleShape
  }
}
</script>

<style lang="postcss" scoped>
.outter-grid {
  display: grid;
  grid-template-columns: 1fr 7fr 1fr;
  grid-template-areas: '. header .' '. info .';
  grid-template-rows: auto auto;
  grid-column-gap: 1rem;
}

.header-content {
  z-index: 2;
  grid-area: header;
  background: var(--purple-gradient);
  border-radius: 0 0 50% 50% / 15%;
  display: grid;
  grid-template-rows: auto 60px auto 60px auto;
  grid-template-areas: 'nav' '.' 'content' 'content' 'space';
}

.title {
  color: #ffffff;
  font-family: Lato;
  font-size: 52px;
  font-weight: bold;
  letter-spacing: 0.56px;
  line-height: 62px;
  text-align: center;
}

.subtitle {
  opacity: 0.6;
  color: #ffffff;
  font-family: Lato;
  font-size: 20px;
  font-weight: bold;
  line-height: 24px;
  text-align: center;
}

.row {
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
}

.container {
  display: grid;
  grid-row-gap: 1.4375rem;
  grid-area: content;
}

.stars {
  z-index: 1;
  position: absolute;
}

.home-nav {
  z-index: 2;
  grid-area: nav;
}

.space {
  grid-area: space;
  grid-row-start: 4;
}

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
  margin: 25px 0;
}

.info-text {
  display: flex;
  align-items: center;
  flex-direction: column;
  z-index: 2;
  grid-area: info-text;
}

.purple-shape {
  z-index: 1;
  grid-area: purple;
  grid-row-start: 4;
}
</style>

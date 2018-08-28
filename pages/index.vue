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
  </div>
</template>

<script>
import UiNav from '~/components/Nav'
import UiButton from '~/components/Component/Button.vue'
import SpacePeople from '~/assets/space-people.svg'
import Stars from '~/assets/stars.svg'

export default {
  components: {
    UiNav,
    SpacePeople,
    UiButton,
    Stars
  }
}
</script>

<style lang="postcss" scoped>
.outter-grid {
  display: grid;
  grid-template-columns: 1fr 7fr 1fr;
  grid-template-areas: '. header .';
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
</style>

<template>
  <section class="header-content">
    <stars class="stars" />
    <ui-nav @click="$emit('click')" class="home-nav" transparent/>
    <div class="container">
      <h1 class="title">Flexible Ui Library</h1>
      <h2 class="subtitle">Focus on your code while designers, writers, and content specialists take care of the message</h2>
      <div class="row">
        <nuxt-link to="/development/quick-start" ><ui-button text="Get Started"/></nuxt-link>
        <a href="https://github.com/tipeio/tipe-ui" target="__blank"><ui-button outline text="Github (v1.0.0)"/></a>
      </div>
    </div>
    <space-people class="space"/>
  </section>
</template>

<script>
import UiNav from '~/components/Nav'
import UiButton from '~/components/Button.vue'
import { SpacePeople, Stars } from '~/assets'

import { TipeTextInput, TipeField, TipeTextarea, TipeButton } from '@tipe/ui'

export default {
  name: 'HeaderSection',
  components: {
    UiNav,
    SpacePeople,
    UiButton,
    Stars,
    TipeTextInput,
    TipeField,
    TipeTextarea,
    TipeButton
  }
}
</script>

<style lang="postcss" scoped>
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
  width: 100%;
}
</style>

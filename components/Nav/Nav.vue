<template>
  <nav :data-tipe-ui="$options.name" class="nav">
    <nuxt-link to="/" class="grid-logo">
      <tipe-logo  />
      <h1 class="tipe-text">Tipe</h1>
    </nuxt-link>
    <div class="right">
      <nav-link to="/guide" :active="$nuxt.$route.path.includes('guide')" text="Guide"/>
      <nav-link to="/component" :active="$nuxt.$route.path.includes('component')" text="Component"/>
      <nav-link to="/resource" :active="$nuxt.$route.path.includes('resource')" text="Resource"/>
    </div>
  </nav>
</template>

<script>
import vueTypes from 'vue-types'
import { TipeSearch } from '@tipe/ui'
import NavLink from './NavLink.vue'
import TipeLogo from '~/assets/tipe-logo.svg'

export default {
  name: 'UiNav',
  components: {
    TipeLogo,
    TipeSearch,
    NavLink
  }
}
</script>

<style lang="postcss" scoped>
[data-tipe-ui='UiNav'] {
  display: grid;
  align-items: center;
  grid-column-gap: 1rem;
  background: var(--purple-gradient);
  height: 100px;
  grid-template-columns: 1fr 2fr 5fr 1fr;
  grid-template-areas: '. logo right right';
}

.tipe-text {
  color: #fff;
  opacity: 0.9;
  font-size: 2.2rem;
  font-weight: 200;
  margin: 0 1rem;
  letter-spacing: 1px;
}

.grid-logo {
  grid-area: logo;
  display: flex;
  align-items: center;
  text-decoration: none;
}

.grid-github-logo {
  grid-area: github;
  justify-self: end;

  &:hover {
    opacity: 0.6;
  }
}

.grid-search {
  grid-area: search;
}

.right {
  grid-area: right;
  display: flex;
  justify-content: space-evenly;
}
</style>

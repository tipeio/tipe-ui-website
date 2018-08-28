<template>
  <nav :data-tipe-ui="$options.name" class="nav" :class="{transparent}">
    <nuxt-link to="/" class="grid-logo">
      <tipe-logo  />
      <h1 class="tipe-text">Tipe</h1>
    </nuxt-link>
    <search-input class="grid-search" />
    <div class="right">
      <nav-dropdown :links="versions" text="1.0.0"/>      
      <nav-link to="/guide" :active="$nuxt.$route.path.includes('guide')" text="Guide"/>
      <nav-link to="/component/quick-start" :active="$nuxt.$route.path.includes('component')" text="Component"/>
      <nav-link to="/resource" :active="$nuxt.$route.path.includes('resource')" text="Resource"/>
      <nav-dropdown :links="languages" text="English"/>      
    </div>
  </nav>
</template>

<script>
import vueTypes from 'vue-types'
import NavLink from './NavLink.vue'
import NavDropdown from './NavDropdown.vue'
import SearchInput from './SearchInput.vue'
import TipeLogo from '~/assets/tipe-logo.svg'

export default {
  name: 'UiNav',
  components: {
    TipeLogo,
    NavLink,
    NavDropdown,
    SearchInput
  },
  props: {
    transparent: vueTypes.bool.def(false)
  },
  data() {
    return {
      languages: [
        { path: '/language/english', name: 'English' },
        { path: '/language/spanish', name: 'Spanish' }
      ],
      versions: [
        { path: '/version/1.0.1', name: '1.0.1' },
        { path: '/version/1.0.2', name: '1.0.2' },
        { path: '/version/1.0.3', name: '1.0.3' }
      ]
    }
  }
}
</script>

<style lang="postcss" scoped>
[data-tipe-ui='UiNav'] {
  display: grid;
  align-items: center;
  justify-content: end;
  grid-column-gap: 1rem;
  background: var(--purple-gradient);
  height: 100px;
  grid-template-columns: 1rem auto 1fr 2fr 1rem;
  grid-template-areas: '. logo search right .';
}

@media screen and (min-width: 1500px) {
  [data-tipe-ui='UiNav'] {
    grid-template-columns: 100px auto 1fr 2fr 100px;
    grid-template-areas: '. logo search right .';
  }
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

.transparent {
  background: none;
}
</style>

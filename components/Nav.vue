<template>
  <nav :data-tipe-ui="$options.name" class="nav">
    <nuxt-link to="/" class="grid-logo">
      <tipe-logo  />
      <h1 class="tipe-text">tipe-ui</h1>
    </nuxt-link>
    <div class="right">
      <tipe-search class="grid-search" />
      <a class="grid-github-logo" href="https://github.com/tipeio/tipe-ui"><github-logo /></a>
    </div>
  </nav>
</template>

<script>
import vueTypes from 'vue-types'
import { TipeSearch } from '@tipe/ui'
import TipeLogo from '~/assets/tipe-logo.svg'
import GithubLogo from '~/assets/github-logo.svg'

export default {
  name: 'UiNav',
  components: {
    TipeLogo,
    GithubLogo,
    TipeSearch
  }
}
</script>

<style lang="postcss" scoped>
[data-tipe-ui='UiNav'] {
  display: grid;
  align-items: end;
  grid-column-gap: 1rem;
  grid-template-columns: 1fr 2fr 5fr 1fr;
  grid-template-areas: '. logo right .';
}

.tipe-text {
  color: var(--text-purple);
  font-size: 2.2rem;
  font-weight: 300;
  margin: 0 1rem;
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
  justify-content: flex-end;
}
</style>

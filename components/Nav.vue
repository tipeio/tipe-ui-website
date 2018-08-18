<template>
  <nav :data-tipe-ui="$options.name" class="nav">
    <div class="grid-logo">
    <tipe-logo  />
    <h1 class="tipe-text">tipe-ui</h1>
    </div>
    <a class="grid-github-logo" href="https://github.com/tipeio/tipe-ui"><github-logo /></a>
  </nav>
</template>

<script>
import vueTypes from 'vue-types'
import TipeLogo from '~/assets/tipe-logo.svg'
import GithubLogo from '~/assets/github-logo.svg'

export default {
  name: 'UiNav',
  components: {
    TipeLogo,
    GithubLogo
  }
}
</script>

<style lang="postcss">
[data-tipe-ui='UiNav'] {
  display: grid;
  align-items: center;
  grid-column-gap: 1rem;
  grid-template-columns: 1fr 2fr 5fr 1fr;
  grid-template-areas: '. logo github .';
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
}

.grid-github-logo {
  grid-area: github;
  justify-self: end;

  &:hover {
    opacity: 0.6;
  }
}
</style>

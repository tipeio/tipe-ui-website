<template>
  <nav :data-tipe-ui="$options.name" class="nav">
    <tipe-logo class="grid-logo" />
    <github-logo class="grid-github-logo" />
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
  background-image: var(--purple-gradient);
}

.grid-logo {
  grid-area: logo;
}

.grid-github-logo {
  grid-area: github;
  justify-self: end;
}

.sidebar {
  height: 100%;
  background-color: var(--light-purple);
  border: 1px solid var(--light-purple);
  border-radius: 6px;
}
</style>

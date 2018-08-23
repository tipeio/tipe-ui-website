<template>
  <div :data-tipe-ui="$options.name" >
    <tipe-scroll class="sidebar">
      <div class="list">
        <div class="item heading">Getting Started</div>

        <nuxt-link class="link" to="/getting-started/install">
          <div class="item list-item">Install</div>
        </nuxt-link>

        <nuxt-link class="link" to="/getting-started/quick-start">
          <div class="item list-item">Quick Start</div>
        </nuxt-link>

        <div class="item heading">Components</div>

        <div class="item sub-heading">Buttons</div>

        <nuxt-link class="link" to="/components/button">
          <div class="item list-item">Button</div>
        </nuxt-link>

        <nuxt-link class="link" to="/components/icon-button">
          <div class="item list-item">Icon Button</div>
        </nuxt-link>

        <div class="item sub-heading">Form</div>

        <nuxt-link class="link" to="/components/text-input">
          <div class="item list-item">Text Input</div>
        </nuxt-link>

        <nuxt-link class="link" to="/components/number-input">
          <div class="item list-item">Number Input</div>
        </nuxt-link>

        <nuxt-link class="link" to="/components/textarea">
          <div class="item list-item">Textarea</div>
        </nuxt-link>

        <nuxt-link class="link" to="/components/radio">
          <div class="item list-item">Radio</div>
        </nuxt-link>

        <nuxt-link class="link" to="/components/checkbox">
          <div class="item list-item">Checkbox</div>
        </nuxt-link>

        <nuxt-link class="link" to="/components/switch">
          <div class="item list-item">Switch</div>
        </nuxt-link>

        <nuxt-link class="link" to="/components/select">
          <div class="item list-item">Select</div>
        </nuxt-link>

        <nuxt-link class="link" to="/components/select-button">
          <div class="item list-item">Select Button</div>
        </nuxt-link>

        <nuxt-link class="link" to="/components/search">
          <div class="item list-item">Search</div>
        </nuxt-link>

      </div>
    </tipe-scroll>
  </div>
</template>

<script>
import vueTypes from 'vue-types'
import TipeScroll from './Component/Scroll.vue'

export default {
  name: 'UiSidebar',
  components: {
    TipeScroll
  }
}
</script>

<style lang="postcss" scoped>
[data-tipe-ui='UiSidebar'] {
}

.sidebar {
  height: 100%;
  background-color: var(--light-purple);
  border: 1px solid var(--light-purple);
  border-radius: 6px;
  padding-left: 3rem;
  padding-top: 3rem;
}

.list {
  padding: 0;
  margin: 0;

  & .link {
    font-size: 1rem;
    text-decoration: none;
  }
  & .item {
    padding: 0;
    display: flex;
    align-items: center;
    height: 2rem;
  }

  & .list-item {
    color: var(--text-purple-gray);
    padding-left: 5px;
  }
  & .heading {
    color: var(--text-purple);
    font-size: 1.2rem;
    font-weight: 700;
    height: 2.5rem;
  }
  & .sub-heading {
    font-size: 0.8rem;
    color: var(--text-black);
    font-weight: 500;
  }
}

.list-item:hover {
  background-color: #e6ebff;
  border-right: 3px solid var(--dark-purple);
}
</style>

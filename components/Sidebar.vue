<template>
  <div :data-tipe-ui="$options.name" >
    <div class="sidebar">
      <ul>
        <li class="heading">Getting Started</li>
        <li class="list-item"><nuxt-link class="link" to="/install">Install</nuxt-link></li>
        <li class="list-item"><nuxt-link class="link" to="/quick-start">Quick Start</nuxt-link></li>
        <li class="heading">Components</li>
        <li class="sub-heading">Buttons</li>
        <li class="list-item"><nuxt-link class="link" to="/button">Default Button</nuxt-link></li>
        <li class="list-item"><nuxt-link class="link" to="/icon-button">Icon Button</nuxt-link></li>
        <li class="sub-heading">Form</li>
        <li class="list-item"><nuxt-link class="link" to="/input">Input</nuxt-link></li>
        <li class="list-item"><nuxt-link class="link" to="/number-input">Number Input</nuxt-link></li>
        <li class="list-item"><nuxt-link class="link" to="/textarea">Textarea</nuxt-link></li>
        <li class="list-item"><nuxt-link class="link" to="/radio">Radio</nuxt-link></li>
        <li class="list-item"><nuxt-link class="link" to="/checkbox">Checkbox</nuxt-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
import vueTypes from 'vue-types'
export default {
  name: 'UiSidebar'
}
</script>

<style lang="postcss">
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

ul {
  list-style: none;
  padding: 0;

  & li {
    height: 2rem;
    padding: 0;
    display: flex;
    align-items: center;
  }
}

.heading {
  color: var(--text-purple);
  font-size: 1.2rem;
  font-weight: 700;
  height: 2.5rem;
}

.link {
  font-size: 1rem;
  color: var(--text-gray);
  text-decoration: none;
  margin-left: 5px;
}

.list-item:hover {
  background-color: #e6ebff;
  border-right: 3px solid var(--dark-purple);
}

.sub-heading {
  font-size: 0.8rem;
  color: var(--text-black);
  font-weight: 500;
}
</style>

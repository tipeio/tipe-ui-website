<template>
  <div :data-tipe-ui="$options.name" >
    <div class="sidebar">
      <ul>
        <li class="heading">Getting Started</li>
        <li class="list-item">Install</li>
        <li class="list-item">Quick Start</li>
        <li class="heading">Components</li>
        <li class="sub-heading">Buttons</li>
        <li class="list-item">Default Button</li>
        <li class="list-item">Icon Button</li>
        <li class="sub-heading">Form</li>
        <li class="list-item">Input</li>
        <li class="list-item">Number Input</li>
        <li class="list-item">Textarea</li>
        <li class="list-item">Radio</li>
        <li class="list-item">Checkbox</li>
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
  padding: 3rem;
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

.list-item {
  font-size: 1rem;
  color: var(--text-gray);
}

.sub-heading {
  font-size: 0.8rem;
  color: var(--text-black);
  font-weight: 500;
}
</style>

<template>
  <div :data-tipe-ui="$options.name" >
    <tipe-scroll class="sidebar">
      <List>
        <Heading>Getting Started</Heading>

        <nuxt-link to="/getting-started/install">
          <Item>Install</Item>
        </nuxt-link>

        <nuxt-link to="/getting-started/quick-start">
          <Item>Quick Start</Item>
        </nuxt-link>

        <Heading>Components</Heading>

        <SubHeading>Buttons</SubHeading>

        <nuxt-link to="/components/button">
          <Item>Button</Item>
        </nuxt-link>

        <nuxt-link to="/components/icon-button">
          <Item>Icon Button</Item>
        </nuxt-link>

        <SubHeading>Form</SubHeading>

        <nuxt-link to="/components/text-input">
          <Item>Text Input</Item>
        </nuxt-link>

        <nuxt-link to="/components/number-input">
          <Item>Number Input</Item>
        </nuxt-link>

        <nuxt-link to="/components/textarea">
          <Item>Textarea</Item>
        </nuxt-link>

        <nuxt-link to="/components/radio">
          <Item>Radio</Item>
        </nuxt-link>

        <nuxt-link to="/components/checkbox">
          <Item>Checkbox</Item>
        </nuxt-link>

        <nuxt-link to="/components/switch">
          <Item>Switch</Item>
        </nuxt-link>

        <nuxt-link to="/components/select">
          <Item>Select</Item>
        </nuxt-link>

        <nuxt-link to="/components/select-button">
          <Item>Select Button</Item>
        </nuxt-link>

        <nuxt-link to="/components/search">
          <Item>Search</Item>
        </nuxt-link>

      </List>
    </tipe-scroll>
  </div>
</template>

<script>
import vueTypes from 'vue-types'
import TipeScroll from './Component/Scroll.vue'
import List from './List/List.vue'
import Heading from './List/Heading.vue'
import SubHeading from './List/SubHeading.vue'
import Item from './List/Item.vue'

export default {
  name: 'UiSidebar',
  components: {
    TipeScroll,
    List,
    Heading,
    SubHeading,
    Item
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
</style>

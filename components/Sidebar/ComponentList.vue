<template>
<List class="list">
        <Heading>Sponsors</Heading>
        <sponsor logo="sample-logo" text="It was a humorously perilous business 
        for both of us. For, before we proceed 
        further," />
        <nuxt-link to="/changelog">
          <Heading>Changelog</Heading>
        </nuxt-link>
        <Heading>Development</Heading>

        <nuxt-link to="/development/installation">
          <Item>Installation</Item>
        </nuxt-link>

        <nuxt-link to="/development/quick-start">
          <Item>Quick Start</Item>
        </nuxt-link>

        <Heading>Components</Heading>

        <SubHeading>Buttons</SubHeading>

        <nuxt-link to="/component/button">
          <Item>Button</Item>
        </nuxt-link>

        <nuxt-link to="/component/icon-button">
          <Item>Icon Button</Item>
        </nuxt-link>

        <SubHeading>Form</SubHeading>

        <nuxt-link to="/component/text-input">
          <Item>Text Input</Item>
        </nuxt-link>

        <nuxt-link to="/component/number-input">
          <Item>Number Input</Item>
        </nuxt-link>

        <nuxt-link to="/component/textarea">
          <Item>Textarea</Item>
        </nuxt-link>

        <nuxt-link to="/component/radio">
          <Item>Radio</Item>
        </nuxt-link>

        <nuxt-link to="/component/checkbox">
          <Item>Checkbox</Item>
        </nuxt-link>

        <nuxt-link to="/component/switch">
          <Item>Switch</Item>
        </nuxt-link>

        <nuxt-link to="/component/select">
          <Item>Select</Item>
        </nuxt-link>

        <nuxt-link to="/component/select-button">
          <Item>Select Button</Item>
        </nuxt-link>

        <nuxt-link to="/component/search">
          <Item>Search</Item>
        </nuxt-link>
      </List>
</template>

<script>
import vueTypes from 'vue-types'
import List from '../List/List.vue'
import Heading from '../List/Heading.vue'
import SubHeading from '../List/SubHeading.vue'
import Item from '../List/Item.vue'
import Sponsor from '~/components/Sponsor.vue'

export default {
  name: 'ComponentList',
  components: {
    List,
    Heading,
    SubHeading,
    Item,
    Sponsor
  }
}
</script>
<style lang="postcss" scoped>
.list {
  margin-top: 60px;
  max-width: 290px;
}
.nuxt-link-active > div {
  color: var(--teal);
}
</style>

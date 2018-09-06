<template>
  <div>
    <tipe-scroll class="sidebar">
    <component :data-tipe-ui="$options.name" v-bind="$props" :is="is"/>
    </tipe-scroll>
  </div>
</template>

<script>
import vueTypes from 'vue-types'
import SidebarGuide from './GuideList'
import SidebarComponent from './ComponentList'
import SidebarResource from './ResourceList'
import TipeScroll from '../Scroll.vue'
export default {
  name: 'UiSidebar',
  components: {
    SidebarGuide,
    SidebarComponent,
    SidebarResource,
    TipeScroll
  },
  props: {
    type: vueTypes.string
  },
  computed: {
    is() {
      if (this.type === 'component') return 'sidebar-component'
      if (this.type === 'guide') return 'sidebar-guide'

      return 'sidebar-resource'
    }
  }
}
</script>

<style lang="postcss">
.sidebar {
  height: 100%;
  border-right: 1px solid rgba(56, 74, 101, 0.5);
  grid-area: list;
  display: flex;
  justify-content: flex-end;
}
</style>

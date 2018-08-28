<template>
  <div class="wrapper" :class={open} @click="open = true">
    <input v-on-clickaway="away" v-if="open" class="search-input" placeholder="Search" />
    <search-icon class="icon"/>
  </div>
</template>

<script>
import { directive as onClickaway } from 'vue-clickaway'
import SearchIcon from '~/assets/search.svg'

export default {
  name: 'UiSearchInput',
  components: {
    SearchIcon
  },
  directives: {
    onClickaway: onClickaway
  },
  data() {
    return {
      open: false
    }
  },
  methods: {
    away() {
      this.open = false
    }
  }
}
</script>

<style lang="postcss" scoped>
.wrapper {
  background-color: #fff;
  height: 40px;
  width: 40px;
  border-radius: 20px;
  align-self: center;
  justify-self: end;
  display: flex;
  align-items: center;
  justify-content: center;
}

.open {
  transition: width 500ms;
  width: 100%;
}

.search-input {
  height: 40px;
  width: 100%;
  border-radius: 20px;
  background-color: #ffffff;
  border: none;
  padding-left: 28px;
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: repeat(auto-fill, minmax(15px, 1fr));
}

.open > .icon {
  margin-right: 13px;
}
.icon {
  z-index: 2;
}

::placeholder {
  color: #b5baca;
  font-family: Lato;
  font-size: 0.8125rem;
  font-weight: bold;
  line-height: 16px;
}
</style>

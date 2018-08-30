<template>
  <div class="outter-grid">
    <tipe-modal height="500px" width="600px" class="modal" v-if="open" @close="toggle">
      <tipe-field label="Full Name">
        <tipe-text-input size="medium"/>
      </tipe-field>
      <tipe-field label="Email">
        <tipe-text-input size="medium"/>
      </tipe-field>
      <tipe-field label="Message">
        <tipe-textarea size="medium"/>
      </tipe-field>
      <tipe-button>Submit</tipe-button>
    </tipe-modal>
   <header-section @click="toggle"/>
   <project-section/>
   <ui-footer/>
  </div>
</template>

<script>
import HeaderSection from '~/components/Home/HeaderSection.vue'
import ProjectSection from '~/components/Home/ProjectSection.vue'
import UiFooter from '~/components/Home/Footer.vue'
import { TipeModal } from '@tipe/ui'
import { TipeTextInput, TipeField, TipeTextarea, TipeButton } from '@tipe/ui'

export default {
  components: {
    HeaderSection,
    ProjectSection,
    UiFooter,
    TipeModal,
    TipeTextInput,
    TipeField,
    TipeTextarea,
    TipeButton
  },
  data() {
    return {
      open: false
    }
  },
  methods: {
    toggle() {
      console.log('HELLOOOP')
      this.open = !this.open
    }
  }
}
</script>

<style lang="postcss" scoped>
.outter-grid {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas: 'header' 'info' ' . ' 'footer';
  grid-template-rows: auto auto 100px auto;
  grid-column-gap: 1rem;
  grid-row-gap: 2rem;
  overflow-y: hidden;
}

.modal {
  z-index: 10;
}

@media screen and (min-width: 1800px) {
  .outter-grid {
    grid-template-columns: 1fr 7fr 1fr;
    grid-template-areas: '. header .' '. info .' ' . . .' '. footer .';
  }
}
</style>

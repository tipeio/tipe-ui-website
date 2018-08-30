<template>
  <div class="outter-grid">
    <tipe-modal height="500px" width="600px" class="modal" v-if="open" @close="toggle">
      <div class="inputs">
        <tipe-field label="Full Name">
          <tipe-text-input size="medium"/>
        </tipe-field>
        <tipe-field label="Email">
          <tipe-text-input size="medium"/>
        </tipe-field>
        <tipe-field label="Message">
          <tipe-textarea size="medium"/>
        </tipe-field>
        <tipe-button class="submit-btn">Submit</tipe-button>
      </div>
    </tipe-modal>
   <header-section/>
   <project-section/>
   <ui-footer @support="toggle"/>
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

.inputs {
  padding: 0 4rem;
}

.submit-btn {
  width: 100% !important;
}

@media screen and (min-width: 1800px) {
  .outter-grid {
    grid-template-columns: 1fr 7fr 1fr;
    grid-template-areas: '. header .' '. info .' ' . . .' '. footer .';
  }
}
</style>

<template>
  <div class="outter-grid">
    <section class="header-content">
      <ui-nav transparent/>
      <div class="container">
        <h1 class="title">Flexible Ui Library</h1>
        <h2 class="subtitle">Focus on your code while designers, writers, and content specialists take care of the message</h2>
        <div class="row">
          <ui-button text="Get Started"/> 
          <ui-button outline text="Github (v1.0.0)"/>
        </div>
      </div>
      <space-people />
    </section>
  </div>
</template>

<script>
import UiNav from '~/components/Nav'
import UiButton from '~/components/Component/Button.vue'
import SpacePeople from '~/assets/space-people.svg'

export default {
  components: {
    UiNav,
    SpacePeople,
    UiButton
  }
}
</script>

<style lang="postcss" scoped>
.outter-grid {
  display: grid;
  grid-template-columns: 1fr 7fr 1fr;
  grid-template-areas: '. header .';
  grid-column-gap: 1rem;
}

.header-content {
  grid-area: header;
  background: var(--purple-gradient);
  border-radius: 0 0 50% 50% / 15%;
  display: grid;
  grid-row-gap: 2rem;
}

.title {
  color: #ffffff;
  font-family: Lato;
  font-size: 52px;
  font-weight: bold;
  letter-spacing: 0.56px;
  line-height: 62px;
  text-align: center;
}

.subtitle {
  opacity: 0.6;
  color: #ffffff;
  font-family: Lato;
  font-size: 20px;
  font-weight: bold;
  line-height: 24px;
  text-align: center;
}

.row {
  display: flex;
  align-items: center;
  justify-content: center;
}

.container {
  display: grid;
  grid-row-gap: 1.4375rem;
}
</style>

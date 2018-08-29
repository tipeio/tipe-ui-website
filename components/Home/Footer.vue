<template>
  <footer class="footer">
    <div class="overlay">
    </div>
    <div class="overlay-2">
    </div>
    <div class="content">
      <div class="links">
        <nav-link footer to="/changelog" text="Changelog"/>
        <nav-link footer to="/faq" text="FAQ"/>
        <nav-link footer to="/github" text="Github"/>
        <nav-dropdown footer :links="versions" text="1.0.0"/>  
        <nav-dropdown footer :links="languages" text="English"/>      
        <nav-link footer to="/support" text="Support"/>
      </div>
    </div>
  </footer>
</template>

<script>
import NavLink from '~/components/Nav/NavLink.vue'
import NavDropdown from '~/components/Nav/NavDropdown.vue'

export default {
  name: 'Footer',
  components: {
    NavLink,
    NavDropdown
  },
  data() {
    return {
      languages: [
        { path: '/language/english', name: 'English' },
        { path: '/language/spanish', name: 'Spanish' }
      ],
      versions: [
        { path: '/version/1.0.1', name: '1.0.1' },
        { path: '/version/1.0.2', name: '1.0.2' },
        { path: '/version/1.0.3', name: '1.0.3' }
      ]
    }
  }
}
</script>

<style lang="postcss" scoped>
.footer {
  grid-area: footer;
  background: linear-gradient(135.24deg, #714bfe 0%, #3e4ff9 100%);
  z-index: 2;
  width: 100%;
  height: 400px;
  grid-row-end: 6;
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 175px auto 300px;
}

.overlay {
  background: linear-gradient(
    95.92deg,
    rgba(255, 128, 246, 0.05) 0%,
    rgba(140, 55, 255, 0.09) 100%
  );
  width: 100%;
  z-index: 3;
  grid-column-start: 2;
  grid-row-start: 1;
}

.overlay-2 {
  opacity: 0.53;
  border-radius: 0 50px 0 0;
  background: radial-gradient(
    circle,
    rgba(202, 187, 255, 0.36) 0%,
    rgba(46, 50, 236, 0.41) 100%
  );
  z-index: 4;
  grid-row-start: 2;
  grid-column-start: 1;
  grid-column-end: 3;
  width: 100%;
}

.content {
  grid-row-start: 1;
  grid-column-start: 2;
  width: 100%;
  z-index: 5;
  align-items: center;
  justify-content: center;
}

.links {
  grid-area: right;
  display: flex;
  justify-content: space-evenly;
}
</style>

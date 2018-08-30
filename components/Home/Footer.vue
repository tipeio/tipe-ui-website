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
      <div class="line-break"><line-break/></div>
      <div class="logo">
        <tipe-logo />
        <p>Join Us On</p>
      </div>
      <div class="social">
        <div class="social-link"><google /></div>
        <div class="social-link"><google /></div>
        <div class="social-link"><google /></div>
        <div class="social-link"><google /></div>
      </div>
      <p class="copyright">©2018 Tipe. All Rights reserved.</p>
    </div>
  </footer>
</template>

<script>
import NavLink from '~/components/Nav/NavLink.vue'
import NavDropdown from '~/components/Nav/NavDropdown.vue'
import TipeLogo from '~/assets/tipe-logo.svg'
import Google from '~/assets/google.svg'

export default {
  name: 'Footer',
  components: {
    NavLink,
    NavDropdown,
    TipeLogo,
    Google
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
  grid-template-rows: 1fr auto 1fr;
  grid-template-columns: 175px auto 300px;
  grid-template-areas:
    '. overlay overlay'
    'content content content'
    'overlay-2 overlay-2 .';
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
  grid-area: overlay;
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
  grid-area: overlay-2;
}

.content {
  grid-row-start: 1;
  grid-column-start: 2;
  z-index: 5;
  align-items: center;
  justify-content: center;
  grid-area: content;
  grid-row-start: 1 !important;
  grid-row-end: 4 !important;
  display: grid;
  grid-template-rows: 1fr 3px 1fr 1fr;
  grid-template-areas: 'links' 'line-break' 'logo' 'social';
}

.links {
  grid-area: right;
  display: flex;
  justify-content: space-evenly;
  grid-area: links;
}

.logo {
  grid-area: logo;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.logo > p {
  opacity: 0.5;
  color: #ffffff;
  font-family: Lato;
  font-size: 13px;
  letter-spacing: 0.46px;
  line-height: 28px;
  text-align: center;
  text-transform: uppercase;
  margin: 28px;
}

.social {
  grid-area: social;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: start;
}

.social-link {
  height: 40px;
  width: 40px;
  background-color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
}

.copyright {
  opacity: 0.5;
  color: #ffffff;
  font-family: Lato;
  font-size: 13px;
  letter-spacing: 0.46px;
  line-height: 28px;
  text-align: center;
}

.line-break {
  grid-area: line-break;
  border: 0.5px solid #fff;
  border-radius: 50%;
  height: 3px;
  opacity: 0.2;
  justify-self: center;
  width: 60%;
  margin-bottom: 2rem;
}
</style>

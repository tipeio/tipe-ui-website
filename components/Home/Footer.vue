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
        <a class="external-link" href="https://github.com/tipeio/tipe-ui" target="__blank">Github</a>
        <nav-dropdown footer :links="versions" text="1.0.0"/>  
        <nav-dropdown footer :links="languages" text="English"/>      
        <a class="external-link" @click="$emit('support')">Support</a>
      </div>
      <div class="line-break"/>
      <div class="logo">
        <tipe-logo />
        <p>Join Us On</p>
      </div>
      <div class="social">
        <a href="https://github.com/tipeio" target="__blank"><div class="social-link"><github /></div></a>
        <a href="https://twitter.com/tipeio?lang=en" target="__blank"><div class="social-link"><twitter /></div></a>
        <a href="https://www.producthunt.com/upcoming/tipe" target="__blank"><div class="social-link"><product-hunt /></div></a>
      </div>
      <p class="copyright">©2018 Tipe. All Rights reserved.</p>
    </div>
  </footer>
</template>

<script>
import NavLink from '~/components/Nav/NavLink.vue'
import NavDropdown from '~/components/Nav/NavDropdown.vue'
import { TipeLogo, Google, Twitter, Github, ProductHunt } from '~/assets'

export default {
  name: 'Footer',
  components: {
    NavLink,
    NavDropdown,
    TipeLogo,
    Google,
    Twitter,
    Github,
    ProductHunt
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
  width: 100%;
  opacity: 0.5;
  border-style: solid;
  border-width: 1px;
  border-image-source: linear-gradient(
    270deg,
    rgba(88, 77, 251, 0),
    #fff 52%,
    rgba(89, 77, 252, 0)
  );
  border-image-slice: 1;
  margin-bottom: 30px;
}

.external-link {
  color: #ffffff;
  font-family: 'Lato', sans-serif;
  font-size: 1rem;
  font-weight: bold;
  letter-spacing: 2px;
  line-height: 16px;
  text-transform: uppercase;
  text-decoration: none;
  text-align: center;
  margin: 0 27px;
}
</style>

<!--suppress JSVoidFunctionReturnValueUsed -->
<template>
  <v-app light class="gp-full-height">
    <TheSiteHeader />
    <v-main>
      <nuxt :keep-alive="!isDev" />
    </v-main>
    <TheCookieNotification />
    <TheSiteFooter />
  </v-app>
</template>

<!--
Code by GitHub user mediafreakch
From https://github.com/vuetifyjs/vuetify/issues/11452#issuecomment-847894243https://github.com/vuetifyjs/vuetify/issues/11452#issuecomment-847894243
-->
<script>
import Vue from 'vue'
import debounce from 'lodash/debounce'

// From https://cli.vuejs.org/guide/browser-compatibility.html
// import 'core-js/stable'
// import 'regenerator-runtime/runtime'

import TheSiteHeader from '~/components/singletons/TheSiteHeader.vue'
import TheSiteFooter from '~/components/singletons/TheSiteFooter.vue'
import TheCookieNotification from '~/components/singletons/TheCookieNotification.vue'

export default Vue.extend({
  name: 'FullHeight',
  components: {
    TheSiteHeader,
    TheSiteFooter,
    TheCookieNotification,
  },
  data() {
    return {
      componentId: 'layout-default',
    }
  },
  head() {
    return {
      title: 'FAIRtracks.net',
      noscript: [
        {
          vmid: 'noscript-style',
          innerHTML: `<style type="text/css"> .hide-with-noscript {display: none;}</style>`,
        },
      ],
      script: [
        {
          src: 'https://plausible.io/js/script.js',
          'data-domain': 'fairtracks.net',
          async: true,
          defer: true,
          type: 'text/javascript',
        },
        {
          vmid: 'script-plausible',
          innerHTML:
            `window.plausible = window.plausible || function() {` +
            `(window.plausible.q = window.plausible.q || []).push(arguments) }`,
          type: 'text/javascript',
        },
      ],
      __dangerouslyDisableSanitizersByTagID: {
        'noscript-stype': ['innerHTML'],
        'script-plausible': ['innerHTML'],
      },
    }
  },
  computed: {
    isDev() {
      return process.env.NODE_ENV === 'development'
    },
  },
  watch: {
    $route(to, from) {
      if (to.path === from.path && to.query !== from.query) {
        this.$nuxt.$emit('queryChanged')
      }
    },
  },
  mounted() {
    this.setViewHeight()

    const debouncedSetHeight = debounce(this.setViewHeight, 50)
    window.addEventListener('resize', debouncedSetHeight)

    this.$once('destroyed', () => {
      window.removeEventListener('resize', debouncedSetHeight)
    })
  },
  methods: {
    setViewHeight() {
      const vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', `${vh}px`)
    },
  },
})
</script>

<style scoped lang="scss">
/**
    Overwrite vuetify's default v-application--wrap min-height: 100vh;
    Due to the many problems with vh on mobile devices.
   */
.gp-full-height :v-deep(.v-application--wrap) {
  min-height: 100vh;
  min-height: calc(var(--vh, 1vh) * 100);
}
</style>

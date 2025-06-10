// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate : "2024-04-03",

  future: {
    compatibilityVersion: 4
  },

  // ssr: false,

  devtools: { enabled: true },

  // buildDir: 'nuxt-build',

  experimental: {
    scanPageMeta: 'after-resolve',
    sharedPrerenderData: false,
    compileTemplate: true,
    resetAsyncDataToUndefined: true,
    templateUtils: true,
    relativeWatchPaths: true,
    normalizeComponentNames: false,
    spaLoadingTemplateLocation: 'within',
    defaults: {
      useAsyncData: {
        deep: true
      }
    },
    viewTransition: true,
    componentIslands: true,
  },

  image: {
    // Remove any path manipulation - use default settings
    provider: 'ipx',
    domains: ['localhost'],
    format: ['webp', 'avif', 'jpg', 'png'],
    quality: 80,
    screens: {
      'xs': 320,
      'sm': 640,
      'md': 768,
      'lg': 1024,
      'xl': 1280,
      'xxl': 1536
    },
    presets: {
      avatar: {
        modifiers: {
          format: 'webp',
          width: 80,
          height: 80,
        }
      },
      hero: {
        modifiers: {
          format: 'webp',
          width: 1920,
          height: 1080,
          quality: 90
        }
      }
    }
  },

  features: {
    inlineStyles: true
  },

  unhead: {
    renderSSRHeadOptions: {
      omitLineBreaks: false
    }
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxt/icon',
    '@nuxt/image',
  ],

  
  googleFonts: {
    families: {
      Inter: true,
      Roboto: true,
      'Roboto Mono': true,
      'Space Mono': true,
      }
    },

  

  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: './icon_DAF.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }
      ]
    },
    // pageTransition: { name: 'page', mode: 'out-in' }
  },

  // routeRules: {
  //   '/': { prerender: true },
  //   '/about': { prerender: true }
  // },

  nitro: {
    compressPublicAssets: true,
    minify: true,
  },

  runtimeConfig: {
    // Server-side environment variables
    smtpUser: process.env.SMTP_USER,
    smtpPass: process.env.SMTP_PASS,
  },

});
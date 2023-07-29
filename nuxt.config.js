import { defineNuxtConfig } from 'nuxt/config';
import colors from 'tailwindcss/colors';
export default defineNuxtConfig({
  // Target: https://go.nuxtjs.dev/config-target
  target: "static", 

  // Global page headers: https://go.nuxtjs.dev/config-head
  meta: {
    title: "officeblock.github.io",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [{ rel: "icon", type: "image/svg+xml", href: "/logo.svg" }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/css/tailwind.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  //components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    
  ],

  modules: ['@pinia/nuxt', '@nuxtjs/color-mode', '@nuxtjs/tailwindcss', 'nuxt-headlessui'],
  colorMode: {
    classSuffix: ''
  },

  build: {
    postcss: {
      postcssOptions: require('./postcss.config.js'),
    },
  },
  tailwindcss: {
    jit: true,
    config: {
      content: [
        './assets/**/*.{vue,js,css}',
        './components/**/*.{vue,js}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './nuxt.config.{js,ts}',
        ],

      darkMode: 'class',

      theme: {
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px"
        },
        extend: {
          colors: {
            orange: colors.orange
          }
        }
      }
    }
  }
});

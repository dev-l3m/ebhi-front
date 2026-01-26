<template>
  <v-app>
    <router-view />
    <CookieConsent />
    <ScrollToTop />
  </v-app>
</template>

<script setup>
import CookieConsent from './components/layout/CookieConsent.vue'
import ScrollToTop from './components/layout/ScrollToTop.vue'
</script>

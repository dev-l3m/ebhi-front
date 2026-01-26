<template>
  <div>
    <AppHeader />
    <BlogHeroSection />
    <BlogArticlesSection />
    <BlogCTASection />
    <AppFooter />
  </div>
</template>

<script setup>
import AppHeader from '../components/layout/AppHeader.vue'
import AppFooter from '../components/layout/AppFooter.vue'
import BlogHeroSection from '../components/sections/blog/BlogHeroSection.vue'
import BlogArticlesSection from '../components/sections/blog/BlogArticlesSection.vue'
import BlogCTASection from '../components/sections/blog/BlogCTASection.vue'
</script>

<template>
  <div>
    <AppHeader />
    <JoinUsHeroSection />
    <JobCategoriesSection />
    <WhyJoinUsSection />
    <JoinUsCTASection />
    <AppFooter />
  </div>
</template>

<script setup>
import AppHeader from '../components/layout/AppHeader.vue'
import AppFooter from '../components/layout/AppFooter.vue'
import JoinUsHeroSection from '../components/sections/join-us/JoinUsHeroSection.vue'
import JobCategoriesSection from '../components/sections/join-us/JobCategoriesSection.vue'
import WhyJoinUsSection from '../components/sections/join-us/WhyJoinUsSection.vue'
import JoinUsCTASection from '../components/sections/join-us/JoinUsCTASection.vue'
</script>

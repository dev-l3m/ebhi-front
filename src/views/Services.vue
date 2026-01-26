<template>
  <div>
    <AppHeader />
    <ServicesHeroSection />
    <WhatWeDoSection />
    <ExpertisesSection />
    <MethodologySection />
    <DomainsSection />
    <WhyChooseSection />
    <ServicesCTASection />
    <AppFooter />
  </div>
</template>

<script setup>
import AppHeader from '../components/layout/AppHeader.vue'
import AppFooter from '../components/layout/AppFooter.vue'
import ServicesHeroSection from '../components/sections/services/ServicesHeroSection.vue'
import WhatWeDoSection from '../components/sections/services/WhatWeDoSection.vue'
import ExpertisesSection from '../components/sections/services/ExpertisesSection.vue'
import MethodologySection from '../components/sections/services/MethodologySection.vue'
import DomainsSection from '../components/sections/services/DomainsSection.vue'
import WhyChooseSection from '../components/sections/services/WhyChooseSection.vue'
import ServicesCTASection from '../components/sections/services/ServicesCTASection.vue'
</script>

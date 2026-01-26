<template>
  <div>
    <AppHeader />
    <LocationsHeroSection />
    <LocationsNetworkSection />
    <LocationsHubsSection />
    <LocationsServicesSection />
    <LocationsCTASection />
    <AppFooter />
  </div>
</template>

<script setup>
import AppHeader from '../components/layout/AppHeader.vue'
import AppFooter from '../components/layout/AppFooter.vue'
import LocationsHeroSection from '../components/sections/locations/LocationsHeroSection.vue'
import LocationsNetworkSection from '../components/sections/locations/LocationsNetworkSection.vue'
import LocationsHubsSection from '../components/sections/locations/LocationsHubsSection.vue'
import LocationsServicesSection from '../components/sections/locations/LocationsServicesSection.vue'
import LocationsCTASection from '../components/sections/locations/LocationsCTASection.vue'
</script>

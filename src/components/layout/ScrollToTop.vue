<template>
  <v-fab
    v-model="showButton"
    location="bottom end"
    size="large"
    color="primary"
    icon="mdi-arrow-up"
    class="scroll-to-top-btn"
    @click="scrollToTop"
  ></v-fab>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const showButton = ref(false)

const handleScroll = () => {
  showButton.value = window.scrollY > 300
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.scroll-to-top-btn {
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 1000;
  transition: all 0.3s ease;
}

.scroll-to-top-btn:hover {
  transform: translateY(-4px);
}

@media (max-width: 600px) {
  .scroll-to-top-btn {
    bottom: 16px;
    right: 16px;
  }
}
</style>

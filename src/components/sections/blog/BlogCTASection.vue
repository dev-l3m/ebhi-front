<template>
  <section class="blog-cta-section section-padding">
    <div class="blog-cta-background"></div>
    <v-container class="blog-cta-content">
      <v-row align="center" justify="center" class="ma-0">
        <v-col cols="12" md="10" lg="8" class="text-center text-white">
          <v-icon color="white" size="64" class="mb-6">mdi-email-newsletter</v-icon>
          <h2 class="blog-cta-title mb-6">
            Restez informé de nos<br>
            <span class="gradient-text-white">dernières actualités</span>
          </h2>
          <p class="blog-cta-subtitle mb-8">
            Abonnez-vous à notre newsletter pour recevoir nos articles sur l'externalisation, 
            le recrutement international et les stratégies de croissance.
          </p>
          <v-form @submit.prevent="subscribe" class="newsletter-form">
            <v-row class="ma-0">
              <v-col cols="12" md="8" class="pa-0 pr-md-4">
                <v-text-field
                  v-model="email"
                  type="email"
                  placeholder="Votre adresse email"
                  variant="outlined"
                  rounded="xl"
                  hide-details
                  class="newsletter-input"
                  bg-color="white"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="4" class="pa-0">
                <v-btn
                  type="submit"
                  color="white"
                  size="x-large"
                  variant="elevated"
                  rounded="xl"
                  class="newsletter-btn w-100"
                  :loading="loading"
                >
                  S'abonner
                </v-btn>
              </v-col>
            </v-row>
          </v-form>
          <div class="d-flex flex-column flex-md-row gap-4 justify-center mt-8">
            <v-btn
              color="white"
              size="large"
              variant="outlined"
              rounded="xl"
              class="cta-btn"
              to="/nos-services"
            >
              <v-icon start>mdi-arrow-right-circle</v-icon>
              Découvrez nos services
            </v-btn>
            <v-btn
              color="white"
              size="large"
              variant="outlined"
              rounded="xl"
              class="cta-btn"
              @click="scrollToContact"
            >
              <v-icon start>mdi-email</v-icon>
              Contactez-nous
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')
const loading = ref(false)

const subscribe = async () => {
  if (!email.value) return
  
  loading.value = true
  // TODO: Implement newsletter subscription
  setTimeout(() => {
    loading.value = false
    alert('Merci pour votre abonnement !')
    email.value = ''
  }, 1000)
}

const scrollToContact = () => {
  const contactSection = document.getElementById('contact')
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' })
  } else {
    window.location.href = '/#contact'
  }
}
</script>

<style scoped>
.blog-cta-section {
  position: relative;
  min-height: 400px;
  overflow: hidden;
  display: flex;
  align-items: center;
}

.blog-cta-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #1a237e 0%, #283593 30%, #3f51b5 60%, #5c6bc0 100%);
  background-size: 200% 200%;
  animation: gradientShift 15s ease infinite;
  z-index: 0;
}

.blog-cta-background::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 30% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
}

.blog-cta-background::after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 70% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
}

@keyframes gradientShift {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.blog-cta-content {
  position: relative;
  z-index: 1;
}

.blog-cta-title {
  font-size: clamp(2rem, 4vw, 3.5rem);
  font-weight: 800;
  line-height: 1.2;
  letter-spacing: -0.02em;
}

.gradient-text-white {
  background: linear-gradient(135deg, #ffffff 0%, #e3f2fd 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.blog-cta-subtitle {
  font-size: clamp(1rem, 2vw, 1.25rem);
  opacity: 0.95;
  line-height: 1.8;
  max-width: 800px;
  margin: 0 auto;
}

.newsletter-form {
  max-width: 700px;
  margin: 0 auto;
}

.newsletter-input :deep(.v-field) {
  font-size: 1.1rem;
  padding: 8px 16px;
}

.newsletter-btn {
  font-weight: 600;
  letter-spacing: 0.5px;
  padding: 20px 40px !important;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3) !important;
  transition: all 0.3s ease;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
}

.newsletter-btn:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.4) !important;
}

.cta-btn {
  font-weight: 600;
  letter-spacing: 0.5px;
  padding: 16px 32px !important;
  border: 2px solid white !important;
  background: rgba(255, 255, 255, 0.1) !important;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
}

.cta-btn:hover {
  background: rgba(255, 255, 255, 0.2) !important;
  transform: translateY(-4px);
}

@media (max-width: 960px) {
  .newsletter-form .v-row {
    flex-direction: column;
  }
  
  .newsletter-form .v-col {
    padding: 0 !important;
    margin-bottom: 16px;
  }
}
</style>

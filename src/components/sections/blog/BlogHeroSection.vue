<template>
  <section class="blog-hero section-padding">
    <div class="blog-hero-background"></div>
    <v-container class="blog-hero-content">
      <v-row align="center" justify="center" class="ma-0">
        <v-col cols="12" md="10" lg="8" class="text-center text-white">
          <v-chip
            color="white"
            variant="flat"
            size="large"
            class="mb-6 text-primary font-weight-bold"
          >
            <v-icon start>mdi-book-open-variant</v-icon>
            Blog
          </v-chip>
          <h1 class="blog-hero-title mb-8">
            Actualités &<br />
            <span class="gradient-text-white">Insights</span>
          </h1>
          <p class="blog-hero-description text-h6" style="opacity: 0.95; line-height: 1.8">
            Découvrez nos articles sur l'externalisation, le recrutement international, et les
            stratégies de croissance pour votre entreprise.
          </p>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup></script>

<style scoped>
.blog-hero {
  position: relative;
  min-height: 60vh;
  overflow: hidden;
  display: flex;
  align-items: center;
}

.blog-hero-background {
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

.blog-hero-background::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 30% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
}

.blog-hero-background::after {
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

.blog-hero-content {
  position: relative;
  z-index: 1;
}

.blog-hero-title {
  font-size: clamp(2rem, 5vw, 3.5rem);
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

.blog-hero-description {
  max-width: 800px;
  margin: 0 auto;
}
</style>

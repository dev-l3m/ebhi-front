<template>
  <section class="blog-hero section-padding">
    <div class="blog-hero-background">
      <div class="floating-shapes">
        <div class="shape shape-1"></div>
        <div class="shape shape-2"></div>
        <div class="shape shape-3"></div>
        <div class="shape shape-4"></div>
        <div class="shape shape-5"></div>
      </div>
      <div class="particles">
        <div class="particle particle-1"></div>
        <div class="particle particle-2"></div>
        <div class="particle particle-3"></div>
        <div class="particle particle-4"></div>
        <div class="particle particle-5"></div>
        <div class="particle particle-6"></div>
      </div>
    </div>
    <v-container class="blog-hero-content">
      <v-row align="center" justify="center" class="ma-0">
        <v-col cols="12" md="10" lg="8" class="text-center text-white">
          <div class="hero-chip-wrapper mb-8">
            <v-chip
              color="white"
              variant="flat"
              size="large"
              class="hero-chip text-primary font-weight-bold"
            >
              <v-icon start class="chip-icon">mdi-book-open-variant</v-icon>
              {{ $t('blog.hero.chip') }}
            </v-chip>
          </div>
          <h1 class="blog-hero-title mb-10" v-html="$t('blog.hero.title')"></h1>
          <p
            class="blog-hero-description text-h6 description-text"
            style="opacity: 0.95; line-height: 1.8"
          >
            {{ $t('blog.hero.description') }}
          </p>
          <div class="hero-features mt-10">
            <div class="feature-badge">
              <v-icon color="white" size="24" class="mr-2">mdi-newspaper-variant</v-icon>
              <span>{{ $t('blog.hero.features.articles') }}</span>
            </div>
            <div class="feature-badge">
              <v-icon color="white" size="24" class="mr-2">mdi-lightbulb-on</v-icon>
              <span>{{ $t('blog.hero.features.insights') }}</span>
            </div>
            <div class="feature-badge">
              <v-icon color="white" size="24" class="mr-2">mdi-trending-up</v-icon>
              <span>{{ $t('blog.hero.features.strategies') }}</span>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup></script>

<style scoped>
.blog-hero {
  position: relative;
  min-height: 70vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  padding: 80px 0;
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

/* Floating Shapes */
.floating-shapes {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 1;
}

.shape {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  animation: float 25s ease-in-out infinite;
  border: 2px solid rgba(255, 255, 255, 0.1);
}

.shape-1 {
  width: 350px;
  height: 350px;
  top: 5%;
  left: 3%;
  animation-delay: 0s;
}

.shape-2 {
  width: 250px;
  height: 250px;
  top: 55%;
  right: 8%;
  animation-delay: 5s;
}

.shape-3 {
  width: 180px;
  height: 180px;
  bottom: 15%;
  left: 12%;
  animation-delay: 10s;
}

.shape-4 {
  width: 120px;
  height: 120px;
  top: 25%;
  right: 18%;
  animation-delay: 15s;
}

.shape-5 {
  width: 200px;
  height: 200px;
  bottom: 30%;
  right: 5%;
  animation-delay: 20s;
}

@keyframes float {
  0%,
  100% {
    transform: translate(0, 0) rotate(0deg) scale(1);
    opacity: 0.3;
  }
  25% {
    transform: translate(40px, -40px) rotate(90deg) scale(1.1);
    opacity: 0.5;
  }
  50% {
    transform: translate(-30px, 30px) rotate(180deg) scale(0.9);
    opacity: 0.4;
  }
  75% {
    transform: translate(30px, 40px) rotate(270deg) scale(1.05);
    opacity: 0.6;
  }
}

/* Particles */
.particles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.particle {
  position: absolute;
  width: 4px;
  height: 4px;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 50%;
  animation: particleFloat 15s ease-in-out infinite;
}

.particle-1 {
  top: 20%;
  left: 10%;
  animation-delay: 0s;
}

.particle-2 {
  top: 40%;
  left: 80%;
  animation-delay: 3s;
}

.particle-3 {
  top: 60%;
  left: 20%;
  animation-delay: 6s;
}

.particle-4 {
  top: 80%;
  left: 70%;
  animation-delay: 9s;
}

.particle-5 {
  top: 30%;
  left: 50%;
  animation-delay: 12s;
}

.particle-6 {
  top: 70%;
  left: 40%;
  animation-delay: 15s;
}

@keyframes particleFloat {
  0%,
  100% {
    transform: translate(0, 0);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  50% {
    transform: translate(50px, -50px);
    opacity: 0.8;
  }
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
  z-index: 2;
  animation: fadeInUp 1s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Hero Chip */
.hero-chip-wrapper {
  animation: fadeInDown 0.8s ease-out 0.2s both;
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-chip {
  position: relative;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.hero-chip::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  animation: shine 3s infinite;
}

@keyframes shine {
  0% {
    transform: translateX(-100%) translateY(-100%) rotate(45deg);
  }
  100% {
    transform: translateX(100%) translateY(100%) rotate(45deg);
  }
}

.hero-chip:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.3);
}

.chip-icon {
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}

/* Hero Title */
.blog-hero-title {
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 800;
  line-height: 1.2;
  letter-spacing: -0.02em;
  animation: fadeInUp 1s ease-out 0.4s both;
  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.gradient-text-white {
  background: linear-gradient(135deg, #ffffff 0%, #e3f2fd 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
  display: inline-block;
}

.gradient-text-white::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, #ffffff 0%, #e3f2fd 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  opacity: 0.5;
  filter: blur(10px);
  z-index: -1;
  animation: glow 2s ease-in-out infinite alternate;
}

@keyframes glow {
  from {
    opacity: 0.3;
  }
  to {
    opacity: 0.6;
  }
}

/* Description */
.blog-hero-description {
  max-width: 800px;
  margin: 0 auto;
  animation: fadeInUp 1s ease-out 0.6s both;
}

.description-text {
  animation: fadeInUp 1s ease-out 0.8s both;
}

/* Hero Features */
.hero-features {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  flex-wrap: wrap;
  animation: fadeInUp 1s ease-out 1s both;
}

.feature-badge {
  display: flex;
  align-items: center;
  padding: 12px 24px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 50px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
  font-weight: 600;
  font-size: 0.9375rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
}

.feature-badge:hover {
  transform: translateY(-4px) scale(1.05);
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
  border-color: rgba(255, 255, 255, 0.3);
}

.feature-badge .v-icon {
  animation: floatIcon 3s ease-in-out infinite;
}

.feature-badge:nth-child(1) .v-icon {
  animation-delay: 0s;
}

.feature-badge:nth-child(2) .v-icon {
  animation-delay: 1s;
}

.feature-badge:nth-child(3) .v-icon {
  animation-delay: 2s;
}

@keyframes floatIcon {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-6px);
  }
}

/* Responsive */
@media (max-width: 960px) {
  .blog-hero {
    min-height: 65vh;
    padding: 60px 0;
  }

  .hero-features {
    gap: 16px;
  }

  .feature-badge {
    padding: 10px 20px;
    font-size: 0.875rem;
  }

  .shape-1,
  .shape-2,
  .shape-3,
  .shape-4,
  .shape-5 {
    opacity: 0.2;
  }
}

@media (max-width: 600px) {
  .blog-hero {
    min-height: 55vh;
    padding: 40px 0;
  }

  .hero-chip-wrapper {
    margin-bottom: 24px !important;
  }

  .blog-hero-title {
    margin-bottom: 32px !important;
  }

  .hero-features {
    flex-direction: column;
    gap: 12px;
    width: 100%;
  }

  .feature-badge {
    width: 100%;
    justify-content: center;
    padding: 12px 20px;
    font-size: 0.8125rem;
  }

  .shape {
    display: none;
  }

  .particle {
    display: none;
  }
}
</style>

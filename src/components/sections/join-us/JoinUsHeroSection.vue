<template>
  <section class="join-us-hero section-padding">
    <div class="join-us-hero-background"></div>
    <v-container class="join-us-hero-content">
      <v-row align="center" justify="center" class="ma-0">
        <v-col cols="12" md="10" lg="8" class="text-center text-white">
          <v-chip
            color="white"
            variant="flat"
            size="large"
            class="mb-6 text-primary font-weight-bold"
          >
            <v-icon start>mdi-account-plus</v-icon>
            Carrières
          </v-chip>
          <h1 class="join-us-hero-title mb-6">
            Rejoindre<br />
            <span class="gradient-text-white">EBHI</span>
          </h1>
          <p class="join-us-hero-subtitle mb-8">
            <strong>Vous avez du talent ? Nous avons des opportunités.</strong>
          </p>
          <div class="join-us-hero-description">
            <p class="text-body-1" style="opacity: 0.95; line-height: 1.8">
              EBHI est un hub international qui accompagne la croissance des entreprises ambitieuses
              grâce à des équipes locales qualifiées, engagées et passionnées. Pour répondre à une
              forte demande de nos clients en France et à l'international, nous recrutons
              régulièrement des profils dans les domaines suivants :
            </p>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup></script>

<style scoped>
.join-us-hero {
  position: relative;
  min-height: 70vh;
  overflow: hidden;
  display: flex;
  align-items: center;
}

.join-us-hero-background {
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

.join-us-hero-background::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 30% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
}

.join-us-hero-background::after {
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

.join-us-hero-content {
  position: relative;
  z-index: 1;
}

.join-us-hero-title {
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

.join-us-hero-subtitle {
  font-size: clamp(1.25rem, 2.5vw, 1.75rem);
  opacity: 0.95;
  line-height: 1.4;
  font-weight: 600;
}

.join-us-hero-description {
  max-width: 900px;
  margin: 0 auto;
  text-align: left;
}
</style>

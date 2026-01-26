<template>
  <section class="stats-section section-padding">
    <div class="stats-background"></div>
    <v-container class="stats-container">
      <div class="section-header text-center mb-12">
        <h2 class="section-title mb-4 text-white">
          Prêt à prendre un bond<br>
          <span class="gradient-text-white">dans votre business</span>
        </h2>
        <p class="section-subtitle text-white mx-auto" style="opacity: 0.95;">
          Accélérez votre croissance avec des solutions sur mesure
        </p>
      </div>

      <v-row class="stats-grid">
        <v-col
          v-for="(stat, index) in stats"
          :key="index"
          cols="6"
          md="3"
          class="stat-col"
        >
          <div class="stat-card">
            <div class="stat-icon-wrapper">
              <v-icon :color="stat.iconColor" size="48" class="stat-icon">
                {{ stat.icon }}
              </v-icon>
            </div>
            <div class="stat-value">{{ stat.value }}</div>
            <div class="stat-label">{{ stat.label }}</div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup>
const stats = [
  { 
    value: '+250', 
    label: 'Projets complétés', 
    icon: 'mdi-check-circle',
    iconColor: 'success'
  },
  { 
    value: '+12', 
    label: 'Pôles d\'expertise', 
    icon: 'mdi-domain',
    iconColor: 'info'
  },
  { 
    value: '+20', 
    label: 'Partenariats', 
    icon: 'mdi-handshake',
    iconColor: 'warning'
  },
  { 
    value: '+100', 
    label: 'Collaborateurs', 
    icon: 'mdi-account-group',
    iconColor: 'error'
  }
]
</script>

<style scoped>
.stats-section {
  position: relative;
  overflow: hidden;
  min-height: 400px;
}

.stats-background {
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

.stats-background::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 30% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
}

.stats-background::after {
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

.stats-container {
  position: relative;
  z-index: 1;
}

.section-title {
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

.section-subtitle {
  font-size: clamp(1rem, 2vw, 1.25rem);
  max-width: 700px;
  line-height: 1.6;
}

.stats-grid {
  margin-top: 60px;
}

.stat-col {
  margin-bottom: 32px;
}

.stat-card {
  text-align: center;
  padding: 32px 16px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.stat-card::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
  opacity: 0;
  transition: opacity 0.4s ease;
}

.stat-card:hover::before {
  opacity: 1;
}

.stat-card:hover {
  transform: translateY(-8px) scale(1.05);
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 16px 32px rgba(0, 0, 0, 0.2);
}

.stat-icon-wrapper {
  margin-bottom: 16px;
  display: flex;
  justify-content: center;
}

.stat-icon {
  transition: all 0.4s ease;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));
}

.stat-card:hover .stat-icon {
  transform: scale(1.2) rotate(10deg);
}

.stat-value {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 900;
  color: white;
  line-height: 1;
  margin-bottom: 12px;
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.stat-label {
  font-size: clamp(0.875rem, 1.5vw, 1.125rem);
  color: white;
  opacity: 0.95;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  font-weight: 600;
}

@media (max-width: 960px) {
  .stat-card {
    padding: 24px 12px;
  }
}
</style>

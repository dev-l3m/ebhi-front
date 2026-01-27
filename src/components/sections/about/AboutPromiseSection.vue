<template>
  <section class="about-promise-section section-padding bg-grey-lighten-5">
    <v-container>
      <div class="section-header text-center mb-16">
        <h2 class="section-title mb-6">
          Notre<br />
          <span class="gradient-text">promesse</span>
        </h2>
        <p
          class="text-h5 font-weight-bold text-primary mb-12"
          style="max-width: 800px; margin: 0 auto"
        >
          EBHI est votre partenaire stratégique, pas un simple prestataire. Nous centralisons la
          complexité pour vous permettre de vous concentrer sur l'essentiel : votre croissance.
        </p>
      </div>

      <v-row>
        <v-col v-for="(step, index) in steps" :key="index" cols="12" md="6" lg="3" class="step-col">
          <v-card :elevation="8" class="step-card h-100 text-center" rounded="xl">
            <v-card-item class="pa-6">
              <div class="step-number-wrapper mb-4">
                <div class="step-number">{{ String(index + 1).padStart(2, '0') }}</div>
              </div>
              <v-card-title
                class="text-h6 mb-3 pa-0 step-title"
                style="white-space: normal; word-wrap: break-word; overflow-wrap: break-word"
              >
                {{ step.title }}
              </v-card-title>
            </v-card-item>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup>
const steps = [
  { title: 'Vous définissez les priorités.' },
  { title: "Nous structurons l'ensemble." },
  { title: 'Vous gardez le contrôle stratégique.' },
  { title: "Nous assurons l'exécution avec rigueur, confidentialité et performance." }
]
</script>

<style scoped>
.about-promise-section {
  position: relative;
}

.section-header {
  margin-bottom: 80px;
}

.section-title {
  font-size: clamp(2rem, 4vw, 3.5rem);
  font-weight: 800;
  line-height: 1.2;
  letter-spacing: -0.02em;
}

.gradient-text {
  background: linear-gradient(135deg, #1a237e 0%, #3f51b5 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.step-col {
  margin-bottom: 32px;
}

.step-card {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.step-card:hover {
  transform: translateY(-12px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12) !important;
}

.step-number-wrapper {
  display: flex;
  justify-content: center;
}

.step-number {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, #1a237e 0%, #3f51b5 100%);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: 900;
  box-shadow: 0 8px 24px rgba(26, 35, 126, 0.3);
  border: 4px solid white;
}

.step-title {
  font-weight: 700;
  min-height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  word-wrap: break-word;
  overflow-wrap: break-word;
  white-space: normal;
  line-height: 1.5;
  font-size: clamp(1rem, 1.5vw, 1.25rem);
  text-align: center;
}

@media (max-width: 960px) {
  .step-card {
    margin-bottom: 24px;
  }

  .step-number {
    width: 64px;
    height: 64px;
    font-size: 1.5rem;
  }
}
</style>

<template>
  <section id="contact" class="contact-section section-padding">
    <v-container>
      <div class="section-header text-center mb-16">
        <v-chip
          color="primary"
          variant="flat"
          size="large"
          class="mb-6"
        >
          <v-icon start>mdi-email</v-icon>
          Contact
        </v-chip>
        <h2 class="section-title mb-6">
          Contactez-nous
        </h2>
        <p class="section-subtitle mx-auto">
          Une question ? Un projet ? N'hésitez pas à nous contacter, nous serons ravis de vous aider
        </p>
      </div>

      <v-row>
        <v-col cols="12" md="5" class="contact-info-col">
          <v-card :elevation="8" class="contact-info-card h-100" rounded="xl">
            <v-card-item class="pa-8">
              <div class="text-h4 font-weight-bold mb-8 d-flex align-center">
                <v-icon color="primary" size="32" class="mr-3">mdi-information</v-icon>
                Informations
              </div>
              
              <div class="contact-item mb-8">
                <div class="d-flex align-start mb-4">
                  <div class="contact-icon-wrapper primary">
                    <v-icon color="white" size="24">mdi-map-marker</v-icon>
                  </div>
                  <div class="ml-4 flex-grow-1">
                    <div class="text-h6 font-weight-bold mb-2">Notre adresse</div>
                    <div class="text-body-1 text-grey-darken-1" style="line-height: 1.6;">
                      Bureau 7, CENTRE D'AFFAIRE JIHANE<br>
                      AVENUE DU 11 JANVIER MARRAKECH
                    </div>
                  </div>
                </div>
              </div>

              <div class="contact-item mb-8">
                <div class="d-flex align-start mb-4">
                  <div class="contact-icon-wrapper success">
                    <v-icon color="white" size="24">mdi-phone</v-icon>
                  </div>
                  <div class="ml-4 flex-grow-1">
                    <div class="text-h6 font-weight-bold mb-2">Téléphone</div>
                    <a href="tel:+33184603850" class="text-body-1 text-primary text-decoration-none">
                      +33 1 84 60 38 50
                    </a>
                  </div>
                </div>
              </div>

              <div class="contact-item mb-8">
                <div class="d-flex align-start">
                  <div class="contact-icon-wrapper info">
                    <v-icon color="white" size="24">mdi-email</v-icon>
                  </div>
                  <div class="ml-4 flex-grow-1">
                    <div class="text-h6 font-weight-bold mb-2">Email</div>
                    <a href="mailto:contact@ebhi.fr" class="text-body-1 text-primary text-decoration-none">
                      contact@ebhi.fr
                    </a>
                  </div>
                </div>
              </div>

              <v-divider class="my-8"></v-divider>

              <div class="text-h6 font-weight-bold mb-4">Suivez-nous</div>
              <div class="d-flex gap-3">
                <v-btn
                  icon
                  variant="elevated"
                  color="primary"
                  size="large"
                  class="social-btn"
                >
                  <v-icon>mdi-facebook</v-icon>
                </v-btn>
                <v-btn
                  icon
                  variant="elevated"
                  color="primary"
                  size="large"
                  class="social-btn"
                >
                  <v-icon>mdi-linkedin</v-icon>
                </v-btn>
                <v-btn
                  icon
                  variant="elevated"
                  color="primary"
                  size="large"
                  class="social-btn"
                >
                  <v-icon>mdi-twitter</v-icon>
                </v-btn>
              </div>
            </v-card-item>
          </v-card>
        </v-col>

        <v-col cols="12" md="7" class="contact-form-col">
          <v-card :elevation="8" class="contact-form-card" rounded="xl">
            <v-card-item class="pa-8">
              <div class="text-h4 font-weight-bold mb-8 d-flex align-center">
                <v-icon color="primary" size="32" class="mr-3">mdi-email-edit</v-icon>
                Formulaire de contact
              </div>
              
              <v-form ref="form" v-model="valid">
                <v-row>
                  <v-col cols="12" md="6">
                    <v-text-field
                      v-model="formData.nom"
                      label="Votre nom *"
                      :rules="[rules.required]"
                      variant="outlined"
                      prepend-inner-icon="mdi-account"
                      class="mb-4"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-text-field
                      v-model="formData.prenom"
                      label="Votre prénom *"
                      :rules="[rules.required]"
                      variant="outlined"
                      prepend-inner-icon="mdi-account"
                      class="mb-4"
                    ></v-text-field>
                  </v-col>
                </v-row>

                <v-text-field
                  v-model="formData.email"
                  label="Votre email *"
                  type="email"
                  :rules="[rules.required, rules.email]"
                  variant="outlined"
                  prepend-inner-icon="mdi-email"
                  class="mb-4"
                ></v-text-field>

                <v-text-field
                  v-model="formData.telephone"
                  label="Numéro de téléphone"
                  variant="outlined"
                  prepend-inner-icon="mdi-phone"
                  class="mb-4"
                ></v-text-field>

                <v-textarea
                  v-model="formData.message"
                  label="Message *"
                  :rules="[rules.required]"
                  variant="outlined"
                  prepend-inner-icon="mdi-message-text"
                  rows="6"
                  class="mb-6"
                ></v-textarea>

                <v-btn
                  color="primary"
                  size="x-large"
                  variant="elevated"
                  :loading="loading"
                  :disabled="!valid"
                  block
                  rounded="xl"
                  class="submit-btn"
                  @click="submitForm"
                >
                  <v-icon start v-if="!loading">mdi-send</v-icon>
                  {{ loading ? 'Envoi en cours...' : 'Envoyer le message' }}
                </v-btn>
              </v-form>
            </v-card-item>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const form = ref(null)
const valid = ref(false)
const loading = ref(false)

const formData = ref({
  nom: '',
  prenom: '',
  email: '',
  telephone: '',
  message: ''
})

const rules = {
  required: value => !!value || 'Ce champ est requis',
  email: value => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return pattern.test(value) || 'Email invalide'
  }
}

const submitForm = async () => {
  const { valid: isValid } = await form.value.validate()
  if (isValid) {
    loading.value = true
    // Simuler l'envoi
    setTimeout(() => {
      loading.value = false
      alert('Message envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.')
      // Réinitialiser le formulaire
      formData.value = {
        nom: '',
        prenom: '',
        email: '',
        telephone: '',
        message: ''
      }
      form.value.reset()
    }, 2000)
  }
}
</script>

<style scoped>
.contact-section {
  background: linear-gradient(to bottom, #fafafa 0%, #ffffff 100%);
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

.section-subtitle {
  font-size: clamp(1rem, 2vw, 1.25rem);
  color: #616161;
  max-width: 700px;
  line-height: 1.6;
}

.contact-info-col {
  padding-right: 24px;
}

.contact-info-card {
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.contact-icon-wrapper {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.contact-icon-wrapper.primary {
  background: linear-gradient(135deg, #1a237e 0%, #3f51b5 100%);
}

.contact-icon-wrapper.success {
  background: linear-gradient(135deg, #4caf50 0%, #81c784 100%);
}

.contact-icon-wrapper.info {
  background: linear-gradient(135deg, #2196F3 0%, #64b5f6 100%);
}

.social-btn {
  transition: all 0.3s ease;
}

.social-btn:hover {
  transform: translateY(-4px) scale(1.1);
}

.contact-form-col {
  padding-left: 24px;
}

.contact-form-card {
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.submit-btn {
  font-weight: 600;
  letter-spacing: 0.5px;
  box-shadow: 0 8px 16px rgba(26, 35, 126, 0.3) !important;
  transition: all 0.3s ease;
}

.submit-btn:hover:not(:disabled) {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(26, 35, 126, 0.4) !important;
}

@media (max-width: 960px) {
  .contact-info-col,
  .contact-form-col {
    padding: 0;
    margin-bottom: 32px;
  }
}
</style>

<template>
  <section id="contact" class="contact-section section-padding">
    <v-container>
      <div class="section-header text-center mb-16">
        <v-chip color="primary" variant="flat" size="large" class="mb-6">
          <v-icon start>mdi-email</v-icon>
          Contact
        </v-chip>
        <h2 class="section-title mb-6">Contactez-nous</h2>
        <p class="section-subtitle mx-auto">
          Une question ? Un projet ? N'hésitez pas à nous contacter, nous serons ravis de vous aider
        </p>
      </div>

      <v-row>
        <v-col cols="12" md="5" class="contact-info-col">
          <v-card :elevation="8" class="contact-info-card h-100" rounded="xl">
            <v-card-item class="pa-8">
              <div class="contact-section-title d-flex align-center">
                <v-icon color="primary" size="32" class="section-title-icon"
                  >mdi-information</v-icon
                >
                <span class="section-title-text">Informations</span>
              </div>

              <div class="contact-item">
                <div class="contact-item-content">
                  <div class="contact-icon-wrapper primary">
                    <v-icon color="white" size="24" class="contact-item-icon"
                      >mdi-map-marker</v-icon
                    >
                  </div>
                  <div class="contact-item-text">
                    <div class="contact-item-label">Notre adresse</div>
                    <div class="contact-item-value text-grey-darken-1">
                      Bureau 7, CENTRE D'AFFAIRE JIHANE<br />
                      AVENUE DU 11 JANVIER MARRAKECH
                    </div>
                  </div>
                </div>
              </div>

              <div class="contact-item">
                <div class="contact-item-content">
                  <div class="contact-icon-wrapper success">
                    <v-icon color="white" size="24" class="contact-item-icon">mdi-phone</v-icon>
                  </div>
                  <div class="contact-item-text">
                    <div class="contact-item-label">Téléphone</div>
                    <a
                      href="tel:+33184603850"
                      class="contact-item-value contact-link text-primary text-decoration-none"
                    >
                      +33 1 84 60 38 50
                    </a>
                  </div>
                </div>
              </div>

              <div class="contact-item">
                <div class="contact-item-content">
                  <div class="contact-icon-wrapper info">
                    <v-icon color="white" size="24" class="contact-item-icon">mdi-email</v-icon>
                  </div>
                  <div class="contact-item-text">
                    <div class="contact-item-label">Email</div>
                    <a
                      href="mailto:contact@ebhi.fr"
                      class="contact-item-value contact-link text-primary text-decoration-none"
                    >
                      contact@ebhi.fr
                    </a>
                  </div>
                </div>
              </div>

              <v-divider class="contact-divider"></v-divider>

              <div class="social-section-title mb-4">Suivez-nous</div>
              <div class="social-buttons-wrapper">
                <v-btn icon variant="elevated" color="primary" size="large" class="social-btn">
                  <v-icon>mdi-facebook</v-icon>
                </v-btn>
                <v-btn icon variant="elevated" color="primary" size="large" class="social-btn">
                  <v-icon>mdi-linkedin</v-icon>
                </v-btn>
                <v-btn icon variant="elevated" color="primary" size="large" class="social-btn">
                  <v-icon>mdi-twitter</v-icon>
                </v-btn>
              </div>
            </v-card-item>
          </v-card>
        </v-col>

        <v-col cols="12" md="7" class="contact-form-col">
          <v-card :elevation="8" class="contact-form-card" rounded="xl">
            <v-card-item class="pa-8">
              <div class="contact-section-title d-flex align-center mb-8">
                <v-icon color="primary" size="32" class="section-title-icon">mdi-email-edit</v-icon>
                <span class="section-title-text">Formulaire de contact</span>
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
                  <v-icon start v-if="!loading" class="submit-btn-icon">mdi-send</v-icon>
                  <span class="submit-btn-text">{{
                    loading ? 'Envoi en cours...' : 'Envoyer le message'
                  }}</span>
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
  background: linear-gradient(135deg, #2196f3 0%, #64b5f6 100%);
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

/* Section Title Styles */
.contact-section-title {
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 32px;
}

.section-title-icon {
  margin-right: 12px;
  flex-shrink: 0;
}

.section-title-text {
  line-height: 1.3;
}

/* Contact Item Styles */
.contact-item {
  margin-bottom: 32px;
}

.contact-item-content {
  display: flex;
  align-items: flex-start;
  gap: 16px;
}

.contact-item-text {
  flex: 1;
  min-width: 0;
}

.contact-item-label {
  font-size: 1.125rem;
  font-weight: 700;
  margin-bottom: 8px;
  line-height: 1.4;
}

.contact-item-value {
  font-size: 1rem;
  line-height: 1.6;
  word-wrap: break-word;
  overflow-wrap: break-word;
}

.contact-link {
  display: inline-block;
  word-break: break-all;
}

/* Divider Styles */
.contact-divider {
  margin: 32px 0;
}

/* Social Section Styles */
.social-section-title {
  font-size: 1.125rem;
  font-weight: 700;
}

.social-buttons-wrapper {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

/* Submit Button Styles */
.submit-btn-icon {
  flex-shrink: 0;
  margin-right: 8px;
}

.submit-btn-text {
  white-space: normal;
  line-height: 1.3;
}

@media (max-width: 960px) {
  .contact-info-col,
  .contact-form-col {
    padding: 0;
    margin-bottom: 32px;
  }

  .contact-info-card .v-card-item,
  .contact-form-card .v-card-item {
    padding: 24px !important;
  }

  .contact-section-title {
    font-size: 1.5rem;
    margin-bottom: 24px;
  }

  .section-title-icon {
    font-size: 28px !important;
    margin-right: 10px;
  }

  .contact-item {
    margin-bottom: 24px;
  }

  .contact-item-content {
    gap: 12px;
  }

  .contact-icon-wrapper {
    width: 44px;
    height: 44px;
  }

  .contact-item-icon {
    font-size: 20px !important;
  }

  .contact-item-label {
    font-size: 1rem;
    margin-bottom: 6px;
  }

  .contact-item-value {
    font-size: 0.9375rem;
    line-height: 1.5;
  }

  .contact-divider {
    margin: 24px 0;
  }

  .social-section-title {
    font-size: 1rem;
    margin-bottom: 12px;
  }

  .social-btn {
    width: 48px !important;
    height: 48px !important;
  }

  .social-btn .v-icon {
    font-size: 20px !important;
  }

  .submit-btn {
    font-size: 0.9375rem !important;
    min-height: 52px !important;
    padding: 14px 20px !important;
  }

  .submit-btn-icon {
    font-size: 20px !important;
  }
}

@media (max-width: 600px) {
  .section-header {
    margin-bottom: 48px;
  }

  .contact-info-card .v-card-item,
  .contact-form-card .v-card-item {
    padding: 20px 16px !important;
  }

  .contact-section-title {
    font-size: 1.25rem;
    margin-bottom: 20px;
  }

  .section-title-icon {
    font-size: 24px !important;
    margin-right: 8px;
  }

  .contact-item {
    margin-bottom: 20px;
  }

  .contact-item-content {
    gap: 10px;
  }

  .contact-icon-wrapper {
    width: 40px;
    height: 40px;
    border-radius: 10px;
  }

  .contact-item-icon {
    font-size: 18px !important;
  }

  .contact-item-label {
    font-size: 0.9375rem;
    margin-bottom: 4px;
  }

  .contact-item-value {
    font-size: 0.875rem;
    line-height: 1.5;
  }

  .contact-divider {
    margin: 20px 0;
  }

  .social-section-title {
    font-size: 0.9375rem;
    margin-bottom: 12px;
  }

  .social-buttons-wrapper {
    gap: 8px;
  }

  .social-btn {
    width: 44px !important;
    height: 44px !important;
  }

  .social-btn .v-icon {
    font-size: 18px !important;
  }

  .submit-btn {
    font-size: 0.875rem !important;
    min-height: 48px !important;
    padding: 12px 16px !important;
    border-radius: 12px !important;
  }

  .submit-btn-icon {
    font-size: 18px !important;
    margin-right: 6px !important;
  }

  /* Form Fields Mobile */
  .v-text-field,
  .v-textarea {
    margin-bottom: 16px !important;
  }

  .v-text-field :deep(.v-field),
  .v-textarea :deep(.v-field) {
    font-size: 0.9375rem;
  }

  .v-text-field :deep(.v-label),
  .v-textarea :deep(.v-label) {
    font-size: 0.875rem;
  }
}
</style>

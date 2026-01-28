<template>
  <section id="contact" class="contact-section section-padding">
    <div class="contact-bg" aria-hidden="true">
      <div class="contact-shapes">
        <span class="contact-shape shape-1"></span>
        <span class="contact-shape shape-2"></span>
        <span class="contact-shape shape-3"></span>
        <span class="contact-shape shape-4"></span>
      </div>
    </div>
    <v-container class="contact-container">
      <div class="section-header text-center mb-16">
        <v-chip color="primary" variant="flat" size="large" class="mb-6">
          <v-icon start>mdi-email</v-icon>
          {{ $t('common.contact') }}
        </v-chip>
        <h2 class="section-title mb-6">{{ $t('contact.title') }}</h2>
        <p class="section-subtitle mx-auto">
          {{ $t('contact.subtitle') }}
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
                <span class="section-title-text">{{ $t('contact.information') }}</span>
              </div>

              <div class="contact-item">
                <div class="contact-item-content">
                  <div class="contact-icon-wrapper primary">
                    <v-icon color="white" size="24" class="contact-item-icon"
                      >mdi-map-marker</v-icon
                    >
                  </div>
                  <div class="contact-item-text">
                    <div class="contact-item-label">{{ $t('contact.ourAddress') }}</div>
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

              <div class="social-section-title mb-4">{{ $t('contact.followUs') }}</div>
              <div class="social-buttons-wrapper">
                <v-btn icon variant="elevated" color="primary" size="large" class="social-btn">
                  <v-icon>mdi-facebook</v-icon>
                </v-btn>
                <v-btn icon variant="elevated" color="primary" size="large" class="social-btn">
                  <v-icon>mdi-linkedin</v-icon>
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
                      :label="$t('contact.name') + ' *'"
                      :rules="[rules.required]"
                      variant="outlined"
                      prepend-inner-icon="mdi-account"
                      class="mb-4"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-text-field
                      v-model="formData.prenom"
                      :label="$t('contact.firstName') + ' *'"
                      :rules="[rules.required]"
                      variant="outlined"
                      prepend-inner-icon="mdi-account"
                      class="mb-4"
                    ></v-text-field>
                  </v-col>
                </v-row>

                <v-text-field
                  v-model="formData.email"
                  :label="$t('contact.email') + ' *'"
                  type="email"
                  :rules="[rules.required, rules.email]"
                  variant="outlined"
                  prepend-inner-icon="mdi-email"
                  class="mb-4"
                ></v-text-field>

                <v-text-field
                  v-model="formData.telephone"
                  :label="$t('contact.phone')"
                  variant="outlined"
                  prepend-inner-icon="mdi-phone"
                  class="mb-4"
                ></v-text-field>

                <v-textarea
                  v-model="formData.message"
                  :label="$t('contact.message') + ' *'"
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
                    loading ? $t('contact.sending') : $t('contact.send')
                  }}</span>
                </v-btn>
              </v-form>
            </v-card-item>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <!-- Dialog de succès -->
    <v-dialog v-model="successDialog" max-width="500" persistent>
      <v-card rounded="xl">
        <v-card-item class="pa-6">
          <div class="d-flex align-center mb-4">
            <v-icon color="success" size="48" class="mr-4">mdi-check-circle</v-icon>
            <v-card-title class="pa-0">{{ $t('contact.success') }}</v-card-title>
          </div>
          <v-card-text class="pa-0 pb-4">
            {{ $t('contact.success') }}
          </v-card-text>
          <v-card-actions class="pa-0">
            <v-spacer></v-spacer>
            <v-btn color="primary" variant="elevated" rounded="lg" @click="successDialog = false">
              OK
            </v-btn>
          </v-card-actions>
        </v-card-item>
      </v-card>
    </v-dialog>

    <!-- Dialog d'erreur -->
    <v-dialog v-model="errorDialog" max-width="500" persistent>
      <v-card rounded="xl">
        <v-card-item class="pa-6">
          <div class="d-flex align-center mb-4">
            <v-icon color="error" size="48" class="mr-4">mdi-alert-circle</v-icon>
            <v-card-title class="pa-0">{{ $t('common.error') }}</v-card-title>
          </div>
          <v-card-text class="pa-0 pb-4">
            {{ errorMessage || $t('contact.error') }}
          </v-card-text>
          <v-card-actions class="pa-0">
            <v-spacer></v-spacer>
            <v-btn color="primary" variant="elevated" rounded="lg" @click="errorDialog = false">
              OK
            </v-btn>
          </v-card-actions>
        </v-card-item>
      </v-card>
    </v-dialog>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import api from '../../services/api.js'

const { t } = useI18n()

const form = ref(null)
const valid = ref(false)
const loading = ref(false)
const successDialog = ref(false)
const errorDialog = ref(false)
const errorMessage = ref('')

const formData = ref({
  nom: '',
  prenom: '',
  email: '',
  telephone: '',
  message: ''
})

const rules = {
  required: value => !!value || t('contact.required'),
  email: value => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return pattern.test(value) || t('contact.invalidEmail')
  }
}

const submitForm = async () => {
  const { valid: isValid } = await form.value.validate()
  if (isValid) {
    loading.value = true
    try {
      await api.createContact(formData.value)
      // Réinitialiser le formulaire
      formData.value = {
        nom: '',
        prenom: '',
        email: '',
        telephone: '',
        message: ''
      }
      form.value.reset()
      // Afficher un message de succès
      successDialog.value = true
    } catch (error) {
      console.error('Error submitting contact form:', error)
      errorMessage.value =
        error.message || "Une erreur est survenue lors de l'envoi du message. Veuillez réessayer."
      errorDialog.value = true
    } finally {
      loading.value = false
    }
  }
}
</script>

<style scoped>
.contact-section {
  background: linear-gradient(to bottom, #ffffff 0%, #f5f7fb 100%);
  position: relative;
  overflow: hidden;
}

.contact-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}

.contact-bg::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 10% 15%, rgba(26, 35, 126, 0.08) 0%, transparent 55%),
    radial-gradient(circle at 90% 25%, rgba(33, 150, 243, 0.07) 0%, transparent 55%),
    radial-gradient(circle at 50% 90%, rgba(76, 175, 80, 0.05) 0%, transparent 55%);
}

.contact-shapes {
  position: absolute;
  inset: 0;
}

.contact-shape {
  position: absolute;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.35);
  backdrop-filter: blur(12px);
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.06);
  animation: contact-float 20s ease-in-out infinite;
  opacity: 0.85;
}

.contact-shape.shape-1 {
  width: 260px;
  height: 260px;
  top: -80px;
  left: -60px;
}

.contact-shape.shape-2 {
  width: 200px;
  height: 200px;
  top: 25%;
  right: -90px;
}

.contact-shape.shape-3 {
  width: 180px;
  height: 180px;
  bottom: -90px;
  left: 20%;
}

.contact-shape.shape-4 {
  width: 140px;
  height: 140px;
  bottom: 8%;
  right: 18%;
}

.contact-container {
  position: relative;
  z-index: 1;
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

@keyframes contact-float {
  0%,
  100% {
    transform: translateY(0) translateX(0);
  }
  50% {
    transform: translateY(-14px) translateX(10px);
  }
}

@media (max-width: 960px) {
  .contact-info-col,
  .contact-form-col {
    padding: 0;
    margin-bottom: 32px;
  }

  .contact-shape {
    opacity: 0.5;
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

  .contact-shape {
    display: none;
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

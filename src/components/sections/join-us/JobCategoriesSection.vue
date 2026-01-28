<template>
  <section id="job-categories" class="job-categories-section section-padding">
    <v-container>
      <div class="section-header text-center mb-16">
        <v-chip color="primary" variant="flat" size="large" class="mb-6">
          <v-icon start>mdi-briefcase</v-icon>
          {{ $t('joinUsPage.jobCategories.chip') }}
        </v-chip>
        <h2 class="section-title mb-6" v-html="$t('joinUsPage.jobCategories.title')"></h2>
      </div>

      <v-row>
        <v-col
          v-for="(category, index) in jobCategories"
          :key="index"
          cols="12"
          md="6"
          lg="4"
          class="category-col"
        >
          <v-card :elevation="8" class="category-card h-100" rounded="xl">
            <v-card-item class="pa-6">
              <div class="d-flex align-start mb-4">
                <div class="category-icon-wrapper mr-4">
                  <v-icon :color="category.color" size="48">{{ category.icon }}</v-icon>
                </div>
                <div class="flex-grow-1">
                  <v-card-title
                    class="text-h6 mb-4 pa-0 category-title"
                    style="white-space: normal; word-wrap: break-word; overflow-wrap: break-word"
                  >
                    {{ category.title }}
                  </v-card-title>
                  <v-card-text class="pa-0 mb-4">
                    <ul class="category-jobs-list">
                      <li
                        v-for="(job, jobIndex) in category.jobs"
                        :key="jobIndex"
                        class="category-job-item mb-2"
                      >
                        {{ job }}
                      </li>
                    </ul>
                  </v-card-text>
                  <v-btn
                    :color="category.color"
                    variant="elevated"
                    rounded="xl"
                    class="category-btn"
                    block
                    @click="openApplicationDialog(category)"
                  >
                    <v-icon start class="category-btn-icon">mdi-send</v-icon>
                    <span class="category-btn-text">{{
                      $t('joinUsPage.jobCategories.button')
                    }}</span>
                  </v-btn>
                </div>
              </div>
            </v-card-item>
          </v-card>
        </v-col>
      </v-row>

      <!-- Application Dialog -->
      <v-dialog v-model="applicationDialog" max-width="800" scrollable persistent>
        <v-card rounded="xl" v-if="selectedCategory">
          <v-card-title class="dialog-header">
            <div class="dialog-header-content">
              <div class="dialog-header-main">
                <div class="dialog-icon-wrapper">
                  <v-icon :color="selectedCategory.color" size="32" class="dialog-icon">{{
                    selectedCategory.icon
                  }}</v-icon>
                </div>
                <span class="dialog-title-text font-weight-bold">
                  {{
                    $t('joinUsPage.jobCategories.dialog.title').replace(
                      '{category}',
                      selectedCategory.title
                    )
                  }}
                </span>
              </div>
              <v-btn
                icon
                variant="text"
                size="small"
                @click="applicationDialog = false"
                class="close-btn"
              >
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </div>
          </v-card-title>

          <v-divider></v-divider>

          <v-card-text class="pa-6">
            <div class="dialog-jobs-section mb-6">
              <h3 class="dialog-jobs-title mb-4 font-weight-bold">
                {{ $t('joinUsPage.jobCategories.dialog.jobsTitle') }}
              </h3>
              <ul class="dialog-jobs-list">
                <li
                  v-for="(job, index) in selectedCategory.jobs"
                  :key="index"
                  class="dialog-job-item mb-2"
                >
                  {{ job }}
                </li>
              </ul>
            </div>

            <v-form @submit.prevent="submitApplication" ref="applicationForm">
              <v-row>
                <v-col cols="12" md="6">
                  <v-text-field
                    v-model="applicationFormData.firstName"
                    :label="$t('joinUsPage.jobCategories.dialog.form.firstName')"
                    variant="outlined"
                    rounded="lg"
                    required
                    :rules="[
                      v =>
                        !!v ||
                        $t('joinUsPage.jobCategories.dialog.form.validation.firstNameRequired')
                    ]"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                    v-model="applicationFormData.lastName"
                    :label="$t('joinUsPage.jobCategories.dialog.form.lastName')"
                    variant="outlined"
                    rounded="lg"
                    required
                    :rules="[
                      v =>
                        !!v ||
                        $t('joinUsPage.jobCategories.dialog.form.validation.lastNameRequired')
                    ]"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                    v-model="applicationFormData.email"
                    :label="$t('joinUsPage.jobCategories.dialog.form.email')"
                    type="email"
                    variant="outlined"
                    rounded="lg"
                    required
                    :rules="[
                      v =>
                        !!v || $t('joinUsPage.jobCategories.dialog.form.validation.emailRequired'),
                      v =>
                        /.+@.+\..+/.test(v) ||
                        $t('joinUsPage.jobCategories.dialog.form.validation.emailInvalid')
                    ]"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                    v-model="applicationFormData.phone"
                    :label="$t('joinUsPage.jobCategories.dialog.form.phone')"
                    variant="outlined"
                    rounded="lg"
                    required
                    :rules="[
                      v =>
                        !!v || $t('joinUsPage.jobCategories.dialog.form.validation.phoneRequired')
                    ]"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-select
                    v-model="applicationFormData.position"
                    :items="selectedCategory.jobs"
                    :label="$t('joinUsPage.jobCategories.dialog.form.position')"
                    variant="outlined"
                    rounded="lg"
                    required
                    :rules="[
                      v =>
                        !!v ||
                        $t('joinUsPage.jobCategories.dialog.form.validation.positionRequired')
                    ]"
                  ></v-select>
                </v-col>
                <v-col cols="12">
                  <v-textarea
                    v-model="applicationFormData.message"
                    :label="$t('joinUsPage.jobCategories.dialog.form.message')"
                    variant="outlined"
                    rounded="lg"
                    rows="4"
                    :placeholder="$t('joinUsPage.jobCategories.dialog.form.messagePlaceholder')"
                  ></v-textarea>
                </v-col>
                <v-col cols="12">
                  <v-file-input
                    v-model="applicationFormData.cv"
                    :label="$t('joinUsPage.jobCategories.dialog.form.cv')"
                    variant="outlined"
                    rounded="lg"
                    accept=".pdf,.doc,.docx"
                    prepend-icon="mdi-file-document"
                    show-size
                  ></v-file-input>
                </v-col>
              </v-row>
            </v-form>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions class="dialog-actions">
            <v-spacer></v-spacer>
            <v-btn
              variant="outlined"
              rounded="lg"
              class="dialog-cancel-btn"
              @click="applicationDialog = false"
            >
              <span class="btn-text">{{
                $t('joinUsPage.jobCategories.dialog.buttons.cancel')
              }}</span>
            </v-btn>
            <v-btn
              :color="selectedCategory.color"
              variant="elevated"
              rounded="lg"
              class="dialog-submit-btn"
              @click="submitApplication"
              :loading="submitting"
            >
              <v-icon start class="btn-icon">mdi-send</v-icon>
              <span class="btn-text">{{
                $t('joinUsPage.jobCategories.dialog.buttons.submit')
              }}</span>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <!-- Dialog de succès -->
      <v-dialog v-model="successDialog" max-width="500" persistent>
        <v-card rounded="xl">
          <v-card-item class="pa-6">
            <div class="d-flex align-center mb-4">
              <v-icon color="success" size="48" class="mr-4">mdi-check-circle</v-icon>
              <v-card-title class="pa-0">{{
                $t('joinUsPage.jobCategories.dialog.success.title')
              }}</v-card-title>
            </div>
            <v-card-text class="pa-0 pb-4">
              {{ $t('joinUsPage.jobCategories.dialog.success.message') }}
            </v-card-text>
            <v-card-actions class="pa-0">
              <v-spacer></v-spacer>
              <v-btn color="primary" variant="elevated" rounded="lg" @click="successDialog = false">
                {{ $t('joinUsPage.jobCategories.dialog.success.ok') }}
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
              <v-card-title class="pa-0">{{
                $t('joinUsPage.jobCategories.dialog.error.title')
              }}</v-card-title>
            </div>
            <v-card-text class="pa-0 pb-4">
              {{ errorMessage || $t('joinUsPage.jobCategories.dialog.error.message') }}
            </v-card-text>
            <v-card-actions class="pa-0">
              <v-spacer></v-spacer>
              <v-btn color="primary" variant="elevated" rounded="lg" @click="errorDialog = false">
                {{ $t('joinUsPage.jobCategories.dialog.success.ok') }}
              </v-btn>
            </v-card-actions>
          </v-card-item>
        </v-card>
      </v-dialog>
    </v-container>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import api from '../../../services/api.js'

const { tm, t } = useI18n()

const applicationDialog = ref(false)
const selectedCategory = ref(null)
const submitting = ref(false)
const applicationForm = ref(null)
const successDialog = ref(false)
const errorDialog = ref(false)
const errorMessage = ref('')
const applicationFormData = ref({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  position: '',
  message: '',
  cv: null
})

const jobCategories = computed(() => {
  const categoriesData = tm('joinUsPage.jobCategories.categories') || []
  const icons = ['mdi-headset', 'mdi-palette', 'mdi-code-tags', 'mdi-cart', 'mdi-bullhorn']
  const colors = ['primary', 'secondary', 'success', 'info', 'warning']
  return categoriesData.map((category, index) => ({
    title: category.title,
    jobs: category.jobs || [],
    color: colors[index] || 'primary',
    icon: icons[index] || 'mdi-circle'
  }))
})

const openApplicationDialog = category => {
  selectedCategory.value = category
  applicationFormData.value = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    position: '',
    message: '',
    cv: null
  }
  if (applicationForm.value) {
    applicationForm.value.reset()
  }
  applicationDialog.value = true
}

const submitApplication = async () => {
  if (!applicationForm.value) return

  const { valid: isValid } = await applicationForm.value.validate()
  if (!isValid) return

  submitting.value = true
  try {
    // Note: categoryId devrait être l'ID de la catégorie depuis l'API
    // Pour l'instant, on utilise null ou on peut mapper le titre à un ID
    // v-file-input retourne un tableau de fichiers
    const cvFile = Array.isArray(applicationFormData.value.cv)
      ? applicationFormData.value.cv[0]
      : applicationFormData.value.cv

    await api.createJobApplication({
      firstName: applicationFormData.value.firstName,
      lastName: applicationFormData.value.lastName,
      email: applicationFormData.value.email,
      phone: applicationFormData.value.phone,
      position: applicationFormData.value.position,
      categoryId: selectedCategory.value.id || null, // À adapter selon votre structure
      message: applicationFormData.value.message || null,
      cv: cvFile || null
    })

    // Réinitialiser le formulaire
    applicationFormData.value = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      position: '',
      message: '',
      cv: null
    }
    applicationForm.value.reset()
    applicationDialog.value = false
    successDialog.value = true
  } catch (error) {
    console.error('Error submitting application:', error)
    errorMessage.value = error.message || t('joinUsPage.jobCategories.dialog.error.message')
    errorDialog.value = true
  } finally {
    submitting.value = false
  }
}
</script>

<style scoped>
.job-categories-section {
  background: linear-gradient(to bottom, #ffffff 0%, #fafafa 100%);
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

.category-col {
  margin-bottom: 32px;
}

.category-card {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.category-card:hover {
  transform: translateY(-12px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12) !important;
}

.category-icon-wrapper {
  width: 80px;
  height: 80px;
  border-radius: 20px;
  background: rgba(26, 35, 126, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: all 0.3s ease;
}

.category-card:hover .category-icon-wrapper {
  transform: scale(1.1);
  background: rgba(26, 35, 126, 0.15);
}

.category-title {
  font-weight: 700;
  line-height: 1.5;
  word-wrap: break-word;
  overflow-wrap: break-word;
  white-space: normal;
  min-height: auto;
  font-size: clamp(1rem, 1.5vw, 1.25rem);
}

.category-jobs-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.category-job-item {
  display: flex;
  align-items: flex-start;
  line-height: 1.7;
  color: #424242;
  padding-left: 8px;
  position: relative;
}

.category-job-item::before {
  content: '•';
  color: var(--v-primary-base);
  font-weight: bold;
  position: absolute;
  left: 0;
}

.category-btn {
  font-weight: 600;
  letter-spacing: 0.5px;
  margin-top: 16px;
}

.category-btn-icon {
  flex-shrink: 0;
  margin-right: 8px;
}

.category-btn-text {
  white-space: normal;
  line-height: 1.3;
}

/* Dialog Styles */
.dialog-header {
  background: linear-gradient(135deg, rgba(26, 35, 126, 0.05) 0%, rgba(63, 81, 181, 0.05) 100%);
  padding: 24px;
}

.dialog-header-content {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  width: 100%;
}

.dialog-header-main {
  display: flex;
  align-items: center;
  flex: 1;
  min-width: 0;
  gap: 16px;
}

.dialog-icon-wrapper {
  width: 56px;
  height: 56px;
  border-radius: 16px;
  background: linear-gradient(135deg, rgba(26, 35, 126, 0.1) 0%, rgba(63, 81, 181, 0.1) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.dialog-icon {
  flex-shrink: 0;
}

.dialog-title-text {
  font-size: 1.5rem;
  line-height: 1.3;
  word-wrap: break-word;
  overflow-wrap: break-word;
  white-space: normal;
  flex: 1;
  min-width: 0;
}

.close-btn {
  transition: all 0.3s ease;
  color: rgba(0, 0, 0, 0.7) !important;
  flex-shrink: 0;
  min-width: 40px;
  min-height: 40px;
}

.close-btn:hover {
  transform: rotate(90deg);
  background-color: rgba(0, 0, 0, 0.05) !important;
}

.dialog-jobs-section {
  width: 100%;
}

.dialog-jobs-title {
  font-size: 1.25rem;
  line-height: 1.4;
  word-wrap: break-word;
  overflow-wrap: break-word;
}

.dialog-jobs-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.dialog-job-item {
  display: flex;
  align-items: center;
  line-height: 1.7;
  color: #424242;
  padding-left: 24px;
  position: relative;
  word-wrap: break-word;
  overflow-wrap: break-word;
}

.dialog-job-item::before {
  content: '✓';
  color: var(--v-primary-base);
  font-weight: bold;
  position: absolute;
  left: 0;
  font-size: 1.2rem;
}

.dialog-actions {
  padding: 24px;
  display: flex;
  align-items: center;
  gap: 12px;
}

.dialog-cancel-btn,
.dialog-submit-btn {
  white-space: normal;
  word-wrap: break-word;
}

.btn-text {
  white-space: normal;
  line-height: 1.3;
}

.btn-icon {
  flex-shrink: 0;
}

@media (max-width: 960px) {
  .section-header {
    margin-bottom: 48px;
  }

  .category-card {
    margin-bottom: 24px;
  }

  .category-card .v-card-item {
    padding: 20px !important;
  }

  .category-icon-wrapper {
    width: 64px;
    height: 64px;
    margin-right: 12px !important;
  }

  .category-icon-wrapper .v-icon {
    font-size: 40px !important;
  }

  .category-title {
    font-size: 1.125rem !important;
    margin-bottom: 16px !important;
  }

  .category-job-item {
    font-size: 0.9375rem !important;
    line-height: 1.6;
    margin-bottom: 8px !important;
  }

  .category-btn {
    font-size: 0.9375rem !important;
    min-height: 44px;
    margin-top: 12px !important;
  }

  .category-btn-icon {
    font-size: 20px !important;
  }

  .dialog-header {
    padding: 20px !important;
  }

  .dialog-header-content {
    gap: 10px;
  }

  .dialog-header-main {
    gap: 12px;
  }

  .dialog-icon-wrapper {
    width: 48px;
    height: 48px;
  }

  .dialog-icon {
    font-size: 28px !important;
  }

  .dialog-title-text {
    font-size: 1.125rem !important;
    line-height: 1.3;
  }

  .close-btn {
    min-width: 36px;
    min-height: 36px;
  }

  .close-btn .v-icon {
    font-size: 20px !important;
  }

  .v-card-text {
    padding: 20px !important;
  }

  .dialog-jobs-title {
    font-size: 1rem !important;
    margin-bottom: 14px !important;
  }

  .dialog-job-item {
    font-size: 0.875rem !important;
    padding-left: 20px;
    margin-bottom: 6px !important;
    line-height: 1.5;
  }

  .dialog-job-item::before {
    font-size: 1rem;
  }

  .v-text-field :deep(.v-label),
  .v-select :deep(.v-label),
  .v-textarea :deep(.v-label),
  .v-file-input :deep(.v-label) {
    font-size: 0.875rem !important;
  }

  .v-text-field :deep(.v-field),
  .v-select :deep(.v-field),
  .v-textarea :deep(.v-field),
  .v-file-input :deep(.v-field) {
    font-size: 0.9375rem !important;
  }

  .dialog-actions {
    padding: 18px 20px !important;
    flex-wrap: wrap;
  }

  .dialog-cancel-btn,
  .dialog-submit-btn {
    font-size: 0.875rem !important;
    min-height: 44px;
  }

  .btn-icon {
    font-size: 18px !important;
  }

  .btn-text {
    font-size: 0.875rem !important;
  }
}

@media (max-width: 600px) {
  .section-header {
    margin-bottom: 32px;
  }

  .section-title {
    font-size: clamp(1.5rem, 6vw, 2rem) !important;
    margin-bottom: 24px;
  }

  .category-col {
    margin-bottom: 16px;
  }

  .category-card {
    margin-bottom: 16px;
  }

  .category-card .v-card-item {
    padding: 16px !important;
  }

  .category-icon-wrapper {
    width: 56px;
    height: 56px;
    border-radius: 16px;
    margin-right: 10px !important;
  }

  .category-icon-wrapper .v-icon {
    font-size: 36px !important;
  }

  .category-title {
    font-size: 1rem !important;
    line-height: 1.4;
    margin-bottom: 12px !important;
    min-height: auto !important;
  }

  .category-job-item {
    font-size: 0.875rem !important;
    line-height: 1.5;
    margin-bottom: 6px !important;
  }

  .category-btn {
    font-size: 0.875rem !important;
    min-height: 44px;
    padding: 12px 16px !important;
    margin-top: 12px !important;
    border-radius: 12px !important;
  }

  .category-btn-icon {
    font-size: 18px !important;
    margin-right: 6px !important;
  }

  .category-btn-text {
    font-size: 0.875rem !important;
  }

  .v-dialog {
    margin: 8px !important;
  }

  .v-dialog > .v-card {
    max-width: calc(100vw - 16px) !important;
    margin: 0 !important;
  }

  .dialog-header {
    padding: 16px !important;
  }

  .dialog-header-content {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }

  .dialog-header-main {
    width: 100%;
    gap: 10px;
  }

  .dialog-icon-wrapper {
    width: 40px;
    height: 40px;
    border-radius: 12px;
  }

  .dialog-icon {
    font-size: 24px !important;
  }

  .dialog-title-text {
    font-size: 1rem !important;
    line-height: 1.2;
  }

  .close-btn {
    position: absolute;
    top: 12px;
    right: 12px;
    min-width: 36px;
    min-height: 36px;
  }

  .close-btn .v-icon {
    font-size: 20px !important;
  }

  .v-card-text {
    padding: 16px !important;
  }

  .dialog-jobs-section {
    margin-bottom: 16px !important;
  }

  .dialog-jobs-title {
    font-size: 0.9375rem !important;
    margin-bottom: 10px !important;
    line-height: 1.4;
  }

  .dialog-job-item {
    font-size: 0.8125rem !important;
    padding-left: 16px;
    line-height: 1.4;
    margin-bottom: 4px !important;
  }

  .dialog-job-item::before {
    font-size: 0.875rem;
  }

  .v-text-field,
  .v-select,
  .v-textarea,
  .v-file-input {
    margin-bottom: 10px !important;
  }

  .v-text-field :deep(.v-field),
  .v-select :deep(.v-field),
  .v-textarea :deep(.v-field),
  .v-file-input :deep(.v-field) {
    font-size: 0.875rem !important;
  }

  .v-text-field :deep(.v-label),
  .v-select :deep(.v-label),
  .v-textarea :deep(.v-label),
  .v-file-input :deep(.v-label) {
    font-size: 0.8125rem !important;
  }

  .v-text-field :deep(.v-input__details),
  .v-select :deep(.v-input__details),
  .v-textarea :deep(.v-input__details),
  .v-file-input :deep(.v-input__details) {
    font-size: 0.75rem !important;
  }

  .v-textarea {
    min-height: 90px;
  }

  .v-textarea :deep(textarea) {
    font-size: 0.875rem !important;
  }

  .dialog-actions {
    padding: 14px 16px !important;
    flex-direction: column;
    gap: 8px;
  }

  .v-spacer {
    display: none;
  }

  .dialog-cancel-btn,
  .dialog-submit-btn {
    width: 100% !important;
    font-size: 0.8125rem !important;
    min-height: 42px;
    padding: 10px 14px !important;
  }

  .btn-icon {
    font-size: 16px !important;
    margin-right: 6px !important;
  }

  .btn-text {
    font-size: 0.8125rem !important;
    line-height: 1.2;
  }
}
</style>

<template>
  <v-footer color="grey-darken-4" class="text-white">
    <v-container>
      <v-row>
        <v-col cols="12" md="3">
          <div class="mb-4">
            <img
              src="/assets/logo.png"
              alt="EBHI Logo"
              class="logo-footer"
              style="height: 60px; max-width: 180px; object-fit: contain"
            />
          </div>
          <p class="text-body-2 mb-4">
            {{ $t('footer.description') }}
          </p>
          <div class="d-flex gap-2">
            <v-btn
              icon
              variant="text"
              color="white"
              class="social-btn"
              href="https://www.facebook.com/people/EBHI/61579068624281/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <v-icon>mdi-facebook</v-icon>
            </v-btn>
            <v-btn
              icon
              variant="text"
              color="white"
              class="social-btn"
              href="https://www.linkedin.com/company/ebhi/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <v-icon>mdi-linkedin</v-icon>
            </v-btn>
          </div>
        </v-col>

        <v-col cols="12" md="3">
          <div class="text-h6 mb-4">{{ $t('footer.quickLinks') }}</div>
          <v-list density="compact" class="bg-transparent">
            <v-list-item
              v-for="link in quickLinks"
              :key="link.title"
              :to="link.to"
              :title="link.title"
              class="pa-0 mb-2 footer-link"
            ></v-list-item>
          </v-list>
        </v-col>

        <v-col cols="12" md="3">
          <div class="text-h6 mb-4">{{ $t('footer.services') }}</div>
          <v-list density="compact" class="bg-transparent">
            <v-list-item
              v-for="service in services"
              :key="service"
              :title="service"
              class="pa-0 mb-2"
            ></v-list-item>
          </v-list>
        </v-col>

        <v-col cols="12" md="3">
          <div class="text-h6 mb-4">{{ $t('footer.contactUs') }}</div>
          <div class="text-body-2 mb-2">
            <v-icon size="small" class="mr-2">mdi-map-marker</v-icon>
            {{ $t('footer.address') }}
          </div>
          <div class="text-body-2 mb-2">
            <v-icon size="small" class="mr-2">mdi-phone</v-icon>
            +33 1 84 60 38 50
          </div>
          <div class="text-body-2">
            <v-icon size="small" class="mr-2">mdi-email</v-icon>
            contact@ebhi.fr
          </div>
        </v-col>
      </v-row>

      <v-divider class="my-4"></v-divider>

      <div class="text-center text-body-2">
        {{ $t('footer.copyright', { year: new Date().getFullYear() }) }}
      </div>
    </v-container>
  </v-footer>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const quickLinks = computed(() => [
  { title: t('footer.links.aboutUs'), to: '/a-propos' },
  { title: t('footer.links.blog'), to: '/blog' },
  { title: t('footer.links.cookiePolicy'), to: '/cookie-policy' },
  { title: t('footer.links.terms'), to: '/cgu' },
  { title: t('footer.links.privacyPolicy'), to: '/politique-de-confidentialite' },
  { title: t('footer.links.legalNotice'), to: '/legal-notice' }
])

const services = computed(() => [
  t('footer.footerServices.efficiency'),
  t('footer.footerServices.structuredBusiness'),
  t('footer.footerServices.talentHub'),
  t('footer.footerServices.innovation')
])
</script>

<style scoped>
:deep(.v-list-item) {
  min-height: auto;
  padding: 0;
}

.social-btn {
  color: white !important;
}

.social-btn :deep(.v-icon) {
  color: white !important;
}

.social-btn:hover {
  background-color: rgba(255, 255, 255, 0.1) !important;
}

.social-btn:hover :deep(.v-icon) {
  color: white !important;
}

.social-btn:active {
  background-color: rgba(255, 255, 255, 0.2) !important;
}

.social-btn:active :deep(.v-icon) {
  color: white !important;
}

.social-btn:focus {
  background-color: rgba(255, 255, 255, 0.1) !important;
}

.social-btn:focus :deep(.v-icon) {
  color: white !important;
}

.footer-link {
  color: rgba(255, 255, 255, 0.8) !important;
  text-decoration: none;
  transition: all 0.3s ease;
}

.footer-link:hover {
  color: white !important;
  text-decoration: underline;
}

.footer-link :deep(.v-list-item-title) {
  color: inherit !important;
}

.footer-link :deep(.v-list-item--active),
.footer-link :deep(.router-link-active) {
  color: white !important;
}

.footer-link :deep(.v-list-item--active .v-list-item-title),
.footer-link :deep(.router-link-active .v-list-item-title) {
  color: white !important;
  text-decoration: underline;
}

.footer-link :deep(.v-list-item--active:hover),
.footer-link :deep(.router-link-active:hover) {
  color: white !important;
  text-decoration: underline;
}
</style>

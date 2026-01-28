<template>
  <section class="blog-articles-section section-padding">
    <div class="blog-articles-bg" aria-hidden="true">
      <div class="blog-articles-shapes">
        <span class="shape shape-1"></span>
        <span class="shape shape-2"></span>
        <span class="shape shape-3"></span>
        <span class="shape shape-4"></span>
      </div>
    </div>
    <v-container class="blog-container blog-articles-content">
      <v-row>
        <v-col
          v-for="(article, index) in articles"
          :key="index"
          cols="12"
          md="6"
          lg="4"
          class="article-col"
        >
          <v-card
            :elevation="8"
            class="article-card h-100"
            rounded="xl"
            @click="openArticle(article)"
          >
            <v-img
              :src="article.image"
              :alt="article.title"
              height="240"
              cover
              class="article-image"
            >
              <div class="article-overlay"></div>
              <div class="article-category">
                <v-chip
                  :color="article.categoryColor"
                  variant="flat"
                  size="small"
                  class="text-white"
                >
                  {{ article.category }}
                </v-chip>
              </div>
            </v-img>
            <v-card-item class="pa-6">
              <div class="d-flex align-center mb-3">
                <v-icon color="grey-darken-1" size="16" class="mr-2">mdi-calendar</v-icon>
                <span class="text-body-2 text-grey-darken-1">{{ article.date }}</span>
                <v-spacer></v-spacer>
                <v-icon color="grey-darken-1" size="16" class="mr-2">mdi-comment-outline</v-icon>
                <span class="text-body-2 text-grey-darken-1">{{ article.comments }}</span>
              </div>
              <v-card-title
                class="text-h5 mb-3 pa-0 article-title"
                style="white-space: normal; word-wrap: break-word; overflow-wrap: break-word"
              >
                {{ article.title }}
              </v-card-title>
              <v-card-text class="text-body-1 text-grey-darken-1 pa-0 mb-4 article-excerpt">
                {{ article.excerpt }}
              </v-card-text>
              <v-btn
                color="primary"
                variant="text"
                class="article-read-more"
                @click.stop="openArticleDialog(article)"
              >
                {{ $t('blog.articles.readMore') }}
                <v-icon end>mdi-arrow-right</v-icon>
              </v-btn>
            </v-card-item>
          </v-card>
        </v-col>
      </v-row>

      <!-- Pagination -->
      <v-row v-if="totalPages > 1" class="mt-8">
        <v-col cols="12" class="text-center">
          <v-pagination
            v-model="currentPage"
            :length="totalPages"
            :total-visible="7"
            color="primary"
            rounded="circle"
          ></v-pagination>
        </v-col>
      </v-row>

      <!-- Article Details Dialog -->
      <v-dialog v-model="articleDialog" max-width="1200" scrollable persistent>
        <v-card rounded="xl" v-if="selectedArticle">
          <v-card-title class="dialog-header">
            <div class="dialog-header-content">
              <div class="dialog-header-main">
                <v-chip
                  :color="selectedArticle.categoryColor"
                  variant="flat"
                  size="small"
                  class="dialog-chip"
                >
                  {{ selectedArticle.category }}
                </v-chip>
                <span class="dialog-date">{{ selectedArticle.date }}</span>
              </div>
              <v-btn
                icon
                variant="text"
                size="small"
                @click="articleDialog = false"
                class="close-btn"
              >
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </div>
          </v-card-title>

          <v-divider></v-divider>

          <v-card-text class="pa-0">
            <v-img
              :src="selectedArticle.image"
              :alt="selectedArticle.title"
              height="400"
              cover
              class="dialog-image"
            >
              <div class="dialog-image-overlay"></div>
            </v-img>

            <div class="pa-8 dialog-content">
              <h1 class="text-h3 font-weight-bold mb-6 dialog-title">
                {{ selectedArticle.title }}
              </h1>

              <div class="dialog-meta-info d-flex align-center mb-6">
                <v-icon color="grey-darken-1" size="20" class="dialog-meta-icon mr-2"
                  >mdi-calendar</v-icon
                >
                <span class="dialog-meta-text text-grey-darken-1 mr-4">{{
                  selectedArticle.date
                }}</span>
                <v-icon color="grey-darken-1" size="20" class="dialog-meta-icon mr-2"
                  >mdi-comment-outline</v-icon
                >
                <span class="dialog-meta-text text-grey-darken-1">{{
                  selectedArticle.comments
                }}</span>
              </div>

              <div class="article-full-content">
                <p class="article-content-text mb-6">
                  {{ selectedArticle.fullContent }}
                </p>
              </div>
            </div>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions class="pa-6">
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              variant="elevated"
              rounded="lg"
              size="large"
              @click="articleDialog = false"
            >
              {{ $t('blog.articles.close') }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-container>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const currentPage = ref(1)
const articlesPerPage = 6
const articleDialog = ref(false)
const selectedArticle = ref(null)

const articles = ref([
  {
    id: 1,
    title:
      "L'externalisation : un levier d'agilité et d'efficacité accessible à toutes les entreprises françaises",
    excerpt:
      "Rester performantes en toute circonstance ! C'est le défi des entreprises françaises dans un environnement économique en pleine mutation. La situation actuelle impose en effet...",
    fullContent:
      "Rester performantes en toute circonstance ! C'est le défi des entreprises françaises dans un environnement économique en pleine mutation. La situation actuelle impose en effet aux entreprises de s'adapter rapidement, d'optimiser leurs coûts tout en maintenant leur compétitivité. L'externalisation représente aujourd'hui une solution stratégique pour répondre à ces enjeux. Chez EBHI, nous accompagnons les entreprises dans leur transformation en leur offrant des solutions d'externalisation sur mesure. Que ce soit pour la gestion de vos ressources humaines, le développement de vos projets techniques, ou encore l'optimisation de vos processus opérationnels, notre expertise internationale vous permet d'accéder à des talents qualifiés tout en maîtrisant vos coûts. L'externalisation n'est plus réservée aux grandes entreprises. Les PME et les start-ups peuvent également bénéficier de ces avantages pour accélérer leur croissance et renforcer leur position sur le marché.",
    date: '16 janvier 2026',
    comments: t('blog.articles.noComments'),
    category: t('blog.articles.categories.outsourcing'),
    categoryColor: 'primary',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop',
    slug: 'externalisation-levier-agilite-efficacite'
  },
  {
    id: 2,
    title: 'Recrutement international : les enjeux que les entreprises sous-estiment',
    excerpt:
      "En 2026, la France fait face à une réalité implacable. 375 000 postes restent en effet vacants, paralysant des pans entiers de l'économie. Selon le...",
    fullContent:
      "En 2026, la France fait face à une réalité implacable. 375 000 postes restent en effet vacants, paralysant des pans entiers de l'économie. Selon les dernières statistiques, cette pénurie de talents affecte particulièrement les secteurs de la technologie, de l'ingénierie et des services. Face à ce défi, de nombreuses entreprises se tournent vers le recrutement international. Cependant, cette démarche comporte des enjeux que beaucoup sous-estiment. Le recrutement international ne se limite pas à trouver des candidats qualifiés. Il implique une compréhension approfondie des différences culturelles, des réglementations locales, et des processus administratifs complexes. Chez EBHI, nous avons développé une expertise unique dans ce domaine. Notre réseau international nous permet d'identifier et de recruter les meilleurs talents, tout en gérant l'ensemble des aspects administratifs et juridiques. Nous accompagnons nos clients à chaque étape, de la définition du besoin à l'intégration des nouveaux collaborateurs, en garantissant une transition fluide et conforme aux réglementations en vigueur.",
    date: '14 janvier 2026',
    comments: t('blog.articles.noComments'),
    category: t('blog.articles.categories.recruitment'),
    categoryColor: 'secondary',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
    slug: 'recrutement-international-enjeux-entreprises'
  }
])

const totalPages = computed(() => {
  return Math.ceil(articles.value.length / articlesPerPage)
})

const openArticle = article => {
  openArticleDialog(article)
}

const openArticleDialog = article => {
  selectedArticle.value = article
  articleDialog.value = true
}
</script>

<style scoped>
.blog-articles-section {
  position: relative;
  overflow: hidden;
  background: linear-gradient(to bottom, #f5f5f5 0%, #ffffff 100%);
}

.blog-articles-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}

.blog-articles-bg::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 15% 20%, rgba(26, 35, 126, 0.06) 0%, transparent 55%),
    radial-gradient(circle at 85% 35%, rgba(63, 81, 181, 0.06) 0%, transparent 55%),
    radial-gradient(circle at 50% 85%, rgba(76, 175, 80, 0.04) 0%, transparent 55%);
  background-size: 140% 140%;
  animation: blogArticlesBgDrift 26s ease-in-out infinite alternate;
}

.blog-articles-content {
  position: relative;
  z-index: 1;
}

.blog-articles-shapes {
  position: absolute;
  inset: 0;
}

.shape {
  position: absolute;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.55);
  border: 1px solid rgba(255, 255, 255, 0.35);
  backdrop-filter: blur(10px);
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.06);
  animation: float 18s ease-in-out infinite;
  opacity: 0.7;
}

.shape-1 {
  width: 240px;
  height: 240px;
  top: 6%;
  left: -60px;
  animation-delay: 0s;
}

.shape-2 {
  width: 180px;
  height: 180px;
  top: 22%;
  right: -50px;
  animation-delay: 4s;
}

.shape-3 {
  width: 120px;
  height: 120px;
  bottom: 18%;
  left: 8%;
  animation-delay: 8s;
}

.shape-4 {
  width: 140px;
  height: 140px;
  bottom: 6%;
  right: 10%;
  animation-delay: 12s;
}

@keyframes float {
  0%,
  100% {
    transform: translate(0, 0) scale(1);
  }
  50% {
    transform: translate(14px, -18px) scale(1.03);
  }
}

@keyframes blogArticlesBgDrift {
  0% {
    background-position: 0% 0%;
  }
  50% {
    background-position: 40% 60%;
  }
  100% {
    background-position: 80% 20%;
  }
}

.blog-container {
  max-width: 1400px !important;
}

.article-col {
  margin-bottom: 32px;
}

.article-card {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.05);
  cursor: pointer;
  overflow: hidden;
}

.article-card:hover {
  transform: translateY(-12px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12) !important;
}

.article-image {
  position: relative;
  overflow: hidden;
}

.article-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.3) 100%);
  transition: all 0.3s ease;
}

.article-card:hover .article-overlay {
  background: linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.5) 100%);
}

.article-category {
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 2;
}

.article-title {
  font-weight: 700;
  line-height: 1.5;
  min-height: 84px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  word-wrap: break-word !important;
  overflow-wrap: break-word !important;
  white-space: normal !important;
  font-size: clamp(1.125rem, 1.75vw, 1.5rem);
  max-width: 100% !important;
  width: 100% !important;
  box-sizing: border-box;
}

.article-excerpt {
  line-height: 1.7;
  min-height: 80px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.article-read-more {
  font-weight: 600;
  text-transform: none;
  letter-spacing: 0.5px;
}

.article-read-more:hover {
  transform: translateX(4px);
}

/* Dialog Styles */
.dialog-header {
  background: linear-gradient(135deg, rgba(26, 35, 126, 0.05) 0%, rgba(63, 81, 181, 0.05) 100%);
  padding: 24px;
  position: relative;
}

.dialog-header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  width: 100%;
}

.dialog-header-main {
  display: flex;
  align-items: center;
  flex: 1;
  min-width: 0;
  gap: 12px;
}

.dialog-chip {
  flex-shrink: 0;
}

.dialog-date {
  font-size: 1.25rem;
  font-weight: 500;
  white-space: nowrap;
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

.dialog-meta-info {
  flex-wrap: wrap;
  gap: 8px;
}

.dialog-meta-icon {
  flex-shrink: 0;
}

.dialog-meta-text {
  font-size: 1rem;
  white-space: nowrap;
}

.article-content-text {
  font-size: 1.25rem;
  line-height: 1.8;
  color: #424242;
  word-wrap: break-word;
  overflow-wrap: break-word;
  white-space: normal;
}

.dialog-image {
  position: relative;
}

.dialog-image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.2) 100%);
}

.dialog-content {
  max-width: 900px;
  margin: 0 auto;
}

.dialog-title {
  color: #1a237e;
  line-height: 1.3;
  word-wrap: break-word;
  overflow-wrap: break-word;
  white-space: normal;
}

.article-full-content {
  line-height: 1.8;
  color: #424242;
}

@media (max-width: 960px) {
  .article-col {
    margin-bottom: 24px;
  }

  .article-card {
    margin-bottom: 24px;
  }

  .article-card .v-card-item {
    padding: 20px !important;
  }

  .article-image {
    height: 200px !important;
  }

  .article-title {
    min-height: auto !important;
    font-size: 1.125rem !important;
    line-height: 1.4;
    margin-bottom: 12px !important;
    -webkit-line-clamp: 4;
    line-clamp: 4;
  }

  .article-excerpt {
    font-size: 0.9375rem !important;
    min-height: auto !important;
    margin-bottom: 16px !important;
  }

  .article-read-more {
    font-size: 0.9375rem !important;
  }

  .article-read-more .v-icon {
    font-size: 18px !important;
  }

  .blog-container {
    max-width: 100% !important;
  }

  .dialog-content {
    padding: 24px !important;
  }

  .dialog-title {
    font-size: 1.75rem !important;
  }

  .dialog-header {
    padding: 20px !important;
  }

  .dialog-header-content {
    gap: 10px;
  }

  .dialog-header-main {
    gap: 10px;
  }

  .dialog-date {
    font-size: 1.125rem !important;
  }

  .close-btn {
    min-width: 36px;
    min-height: 36px;
  }

  .dialog-meta-text {
    font-size: 0.9375rem !important;
  }

  .dialog-meta-icon {
    font-size: 18px !important;
  }

  .article-content-text {
    font-size: 1.125rem !important;
    line-height: 1.7;
  }

  .dialog-image {
    height: 300px !important;
  }
}

@media (max-width: 600px) {
  .article-col {
    margin-bottom: 16px;
  }

  .article-card {
    margin-bottom: 16px;
  }

  .article-card .v-card-item {
    padding: 16px !important;
  }

  .article-image {
    height: 180px !important;
  }

  .article-category {
    top: 12px !important;
    right: 12px !important;
  }

  .article-category .v-chip {
    font-size: 0.75rem !important;
    padding: 4px 8px !important;
  }

  .article-title {
    font-size: 1rem !important;
    line-height: 1.4;
    margin-bottom: 10px !important;
    min-height: auto !important;
    -webkit-line-clamp: 4;
    line-clamp: 4;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .article-excerpt {
    font-size: 0.875rem !important;
    line-height: 1.6;
    min-height: auto !important;
    margin-bottom: 12px !important;
    -webkit-line-clamp: 3;
    line-clamp: 3;
  }

  .article-read-more {
    font-size: 0.875rem !important;
    padding: 8px 12px !important;
    min-height: 40px !important;
  }

  .article-read-more .v-icon {
    font-size: 16px !important;
  }

  .v-pagination {
    margin-top: 24px !important;
  }

  .v-pagination :deep(.v-btn) {
    min-width: 36px !important;
    height: 36px !important;
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
    padding: 16px 48px 16px 16px !important;
    position: relative;
  }

  .dialog-header-content {
    flex-direction: row;
    align-items: center;
    gap: 8px;
  }

  .dialog-header-main {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    flex: 1;
    min-width: 0;
  }

  .dialog-chip {
    font-size: 0.75rem !important;
    padding: 4px 8px !important;
    height: auto !important;
  }

  .dialog-date {
    font-size: 0.875rem !important;
    white-space: normal;
    word-wrap: break-word;
    line-height: 1.3;
  }

  .close-btn {
    position: absolute !important;
    top: 12px !important;
    right: 12px !important;
    min-width: 36px !important;
    min-height: 36px !important;
    z-index: 10;
  }

  .close-btn .v-icon {
    font-size: 20px !important;
  }

  .dialog-image {
    height: 200px !important;
  }

  .dialog-content {
    padding: 16px !important;
  }

  .dialog-title {
    font-size: 1.125rem !important;
    margin-bottom: 12px !important;
    line-height: 1.3;
    word-wrap: break-word !important;
    overflow-wrap: break-word !important;
  }

  .dialog-meta-info {
    margin-bottom: 16px !important;
    flex-wrap: wrap;
    gap: 6px;
  }

  .dialog-meta-icon {
    font-size: 16px !important;
    margin-right: 4px !important;
  }

  .dialog-meta-text {
    font-size: 0.8125rem !important;
    margin-right: 12px !important;
    white-space: normal;
  }

  .article-content-text {
    font-size: 0.9375rem !important;
    line-height: 1.6;
    margin-bottom: 16px !important;
  }

  .v-card-actions {
    padding: 14px 16px !important;
  }

  .v-card-actions .v-btn {
    font-size: 0.875rem !important;
    min-height: 44px;
    padding: 12px 20px !important;
    width: 100%;
  }

  .v-spacer {
    display: none;
  }
}
</style>

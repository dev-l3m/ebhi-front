<template>
  <section class="blog-articles-section section-padding">
    <v-container class="blog-container">
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
              <v-card-title class="text-h5 mb-3 pa-0 article-title" style="white-space: normal; word-wrap: break-word; overflow-wrap: break-word;">
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
                Lire la suite
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
      <v-dialog
        v-model="articleDialog"
        max-width="1200"
        scrollable
        persistent
      >
        <v-card rounded="xl" v-if="selectedArticle">
          <v-card-title class="d-flex align-center justify-space-between pa-6 dialog-header">
            <div class="d-flex align-center">
              <v-chip
                :color="selectedArticle.categoryColor"
                variant="flat"
                size="small"
                class="mr-3"
              >
                {{ selectedArticle.category }}
              </v-chip>
              <span class="text-h6">{{ selectedArticle.date }}</span>
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
              
              <div class="d-flex align-center mb-6">
                <v-icon color="grey-darken-1" size="20" class="mr-2">mdi-calendar</v-icon>
                <span class="text-body-1 text-grey-darken-1 mr-4">{{ selectedArticle.date }}</span>
                <v-icon color="grey-darken-1" size="20" class="mr-2">mdi-comment-outline</v-icon>
                <span class="text-body-1 text-grey-darken-1">{{ selectedArticle.comments }}</span>
              </div>

              <div class="article-full-content">
                <p class="text-h6 mb-6" style="line-height: 1.8; color: #424242;">
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
              Fermer
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-container>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const currentPage = ref(1)
const articlesPerPage = 6
const articleDialog = ref(false)
const selectedArticle = ref(null)

const articles = ref([
  {
    id: 1,
    title: 'L\'externalisation : un levier d\'agilité et d\'efficacité accessible à toutes les entreprises françaises',
    excerpt: 'Rester performantes en toute circonstance ! C\'est le défi des entreprises françaises dans un environnement économique en pleine mutation. La situation actuelle impose en effet...',
    fullContent: 'Rester performantes en toute circonstance ! C\'est le défi des entreprises françaises dans un environnement économique en pleine mutation. La situation actuelle impose en effet aux entreprises de s\'adapter rapidement, d\'optimiser leurs coûts tout en maintenant leur compétitivité. L\'externalisation représente aujourd\'hui une solution stratégique pour répondre à ces enjeux. Chez EBHI, nous accompagnons les entreprises dans leur transformation en leur offrant des solutions d\'externalisation sur mesure. Que ce soit pour la gestion de vos ressources humaines, le développement de vos projets techniques, ou encore l\'optimisation de vos processus opérationnels, notre expertise internationale vous permet d\'accéder à des talents qualifiés tout en maîtrisant vos coûts. L\'externalisation n\'est plus réservée aux grandes entreprises. Les PME et les start-ups peuvent également bénéficier de ces avantages pour accélérer leur croissance et renforcer leur position sur le marché.',
    date: '16 janvier 2026',
    comments: 'Aucun commentaire',
    category: 'Externalisation',
    categoryColor: 'primary',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop',
    slug: 'externalisation-levier-agilite-efficacite'
  },
  {
    id: 2,
    title: 'Recrutement international : les enjeux que les entreprises sous-estiment',
    excerpt: 'En 2026, la France fait face à une réalité implacable. 375 000 postes restent en effet vacants, paralysant des pans entiers de l\'économie. Selon le...',
    fullContent: 'En 2026, la France fait face à une réalité implacable. 375 000 postes restent en effet vacants, paralysant des pans entiers de l\'économie. Selon les dernières statistiques, cette pénurie de talents affecte particulièrement les secteurs de la technologie, de l\'ingénierie et des services. Face à ce défi, de nombreuses entreprises se tournent vers le recrutement international. Cependant, cette démarche comporte des enjeux que beaucoup sous-estiment. Le recrutement international ne se limite pas à trouver des candidats qualifiés. Il implique une compréhension approfondie des différences culturelles, des réglementations locales, et des processus administratifs complexes. Chez EBHI, nous avons développé une expertise unique dans ce domaine. Notre réseau international nous permet d\'identifier et de recruter les meilleurs talents, tout en gérant l\'ensemble des aspects administratifs et juridiques. Nous accompagnons nos clients à chaque étape, de la définition du besoin à l\'intégration des nouveaux collaborateurs, en garantissant une transition fluide et conforme aux réglementations en vigueur.',
    date: '14 janvier 2026',
    comments: 'Aucun commentaire',
    category: 'Recrutement',
    categoryColor: 'secondary',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
    slug: 'recrutement-international-enjeux-entreprises'
  }
])

const totalPages = computed(() => {
  return Math.ceil(articles.value.length / articlesPerPage)
})

const openArticle = (article) => {
  openArticleDialog(article)
}

const openArticleDialog = (article) => {
  selectedArticle.value = article
  articleDialog.value = true
}
</script>

<style scoped>
.blog-articles-section {
  background: linear-gradient(to bottom, #ffffff 0%, #fafafa 100%);
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
  word-wrap: break-word;
  overflow-wrap: break-word;
  white-space: normal;
  font-size: clamp(1.125rem, 1.75vw, 1.5rem);
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
}

.close-btn {
  transition: all 0.3s ease;
  color: rgba(0, 0, 0, 0.7) !important;
}

.close-btn:hover {
  transform: rotate(90deg);
  background-color: rgba(0, 0, 0, 0.05) !important;
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
  .article-card {
    margin-bottom: 24px;
  }
  
  .article-title {
    min-height: auto;
  }

  .blog-container {
    max-width: 100% !important;
  }

  .dialog-content {
    padding: 24px !important;
  }

  .dialog-title {
    font-size: 1.75rem;
  }
}
</style>

# EBHI-Front

Refonte moderne et professionnelle du site web EBHI (https://ebhi.fr/) avec Vue 3 et Vuetify.

## 🚀 Technologies

- **Vue 3** - Framework JavaScript progressif
- **Vuetify 3** - Framework de composants Material Design
- **Vue Router** - Routing pour Vue.js
- **Pinia** - State management pour Vue
- **Vite** - Build tool moderne et rapide
- **Yarn** - Gestionnaire de paquets

## 📦 Installation

1. Installer les dépendances avec Yarn :
```bash
yarn install
```

2. Lancer le serveur de développement :
```bash
yarn dev
```

3. Build pour la production :
```bash
yarn build
```

4. Prévisualiser le build de production :
```bash
yarn preview
```

## 🎨 Fonctionnalités

- ✅ Design moderne et professionnel
- ✅ Interface responsive (mobile, tablette, desktop)
- ✅ Navigation fluide avec scroll smooth
- ✅ Sections principales :
  - Hero section avec call-to-action
  - Services d'externalisation
  - Approche méthodologique (EBHI)
  - Processus en 4 étapes
  - Témoignages clients
  - À propos et secteurs d'intervention
  - Statistiques
  - Formulaire de contact
- ✅ Header fixe avec navigation
- ✅ Footer complet avec informations de contact
- ✅ Animations et transitions fluides

## 📁 Structure du projet

```
ebhi-front/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── AppHeader.vue
│   │   │   └── AppFooter.vue
│   │   └── sections/
│   │       ├── HeroSection.vue
│   │       ├── ServicesSection.vue
│   │       ├── ApproachSection.vue
│   │       ├── ProcessSection.vue
│   │       ├── TestimonialsSection.vue
│   │       ├── AboutSection.vue
│   │       ├── StatsSection.vue
│   │       └── ContactSection.vue
│   ├── views/
│   │   └── Home.vue
│   ├── router/
│   │   └── index.js
│   ├── plugins/
│   │   └── vuetify.js
│   ├── App.vue
│   ├── main.js
│   └── style.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🎯 Prochaines étapes

- [ ] Intégration avec l'API backend pour le formulaire de contact
- [ ] Ajout de pages supplémentaires (Blog, Ressources)
- [ ] Optimisation SEO
- [ ] Tests unitaires
- [ ] Déploiement

## 📝 Notes

Le site utilise Vuetify via CDN pour les icônes Material Design Icons. Les dépendances sont installées localement avec Yarn.

## 👥 Auteur

EBHI - Entrepreneur Business Hub International

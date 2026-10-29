IUFMES — Frontend

Ce dépôt contient le frontend du site officiel de l'Institut Universitaire de Formation aux Métiers de l'Éducation et de la Santé. L'objectif : une vitrine moderne, accessible et entièrement connectée au backend pour gérer les programmes, les admissions et les messages de contact.

Tech stack

Framework : Next.js 14 (App Router)

Langage : TypeScript

Styling : Tailwind CSS

Icônes : Lucide React

Formulaires : React Hook Form + Zod

HTTP client : Axios

Arborescence principale
src/
├── app/
│   ├── about/
│   ├── admin/
│   │   └── login/
│   ├── admissions/
│   ├── contact/
│   ├── programs/
│   │   └── [slug]/
│   ├── team/
│   ├── mentions-legales/
│   ├── politique-confidentialite/
│   ├── layout.tsx
│   ├── page.tsx
│   └── not-found.tsx
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Stats.tsx
│   │   ├── ProgramCards.tsx
│   │   ├── About.tsx
│   │   ├── Team.tsx
│   │   ├── Stages.tsx
│   │   ├── Partners.tsx
│   │   ├── Contact.tsx
│   │   ├── Admissions.tsx
│   │   └── VideoModal.tsx
│   └── ContactForm.tsx
├── lib/
│   ├── api.ts
│   └── utils.ts
└── types/
    └── index.ts
Pages disponibles
Publiques

/ — Accueil (Hero, Stats, Programmes, À propos, Équipe, Stages, Partenaires, Contact)

/about — À propos

/programs — Liste des filières

/programs/[slug] — Détail d'un programme (page dynamique, alimentée par le backend)

/team — Notre équipe (présentation en pyramide hiérarchique)

/admissions — Tarifs et procédure d'inscription

/contact — Formulaire de contact

/mentions-legales — Mentions légales

/politique-confidentialite — Politique de confidentialité

Admin

/admin/login — Connexion administrateur

/admin — Dashboard (gestion des messages de contact)

Système

/not-found — Page 404 personnalisée

Connexion au backend

Le frontend communique avec l'API via Axios.

Endpoints utilisés

GET /api/programs — liste des programmes (affichées dans ProgramCards)

GET /api/programs/:slug — détail d'un programme

POST /api/contact — envoi d'un message de contact

POST /api/auth/login — authentification admin

GET /api/contact — récupération des messages (admin)

PATCH /api/contact/:id — mise à jour du statut d'un message (admin)

Configuration

Dans .env.local :

NEXT_PUBLIC_API_URL=http://localhost:8000/api
Design system
Couleurs

Primary : #00337a (bleu profond)

Secondary : #0066cc (bleu clair)

Accent : #00e68a (vert menthe)

Typographie

Police : Inter (Google Fonts)

Tailles : gérées de façon responsive avec Tailwind

Commandes
# Développement
npm run dev

# Build production
npm run build

# Démarrer en production
npm start

# Linter
npm run lint
Fonctionnalités notables
Accessibilité

Navigation clavier optimisée

Lien « skip to main content »

Contraste conforme WCAG AA

Attributs ARIA pertinents

SEO

Métadonnées optimisées pour chaque page

Sitemap automatique

URLs propres (slugs lisibles)

Performance & responsive

Images optimisées avec Next.js Image

Code splitting et lazy loading

Mobile-first, menu hamburger, breakpoints Tailwind

Notes rapides

Les programmes sont dynamiques : les pages détails sont alimentées par le backend.

L’équipe est affichée sous forme de pyramide hiérarchique.

Toutes les pages sont complètes, fonctionnelles et 100 % responsive.

SEO et accessibilité pris en compte sur l’ensemble du site.
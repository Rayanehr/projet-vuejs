# Application Web de Gestion d'une École de Formation

Application web dynamique développée dans le cadre d'un projet universitaire à l'Université de La Rochelle.

Le projet consiste à concevoir une plateforme web destinée à une école de formation, permettant de présenter les formations et de gérer différentes informations relatives aux étudiants, enseignants et formations.

L'application repose sur une architecture **MVC (Model-View-Controller)** avec un backend développé en **Symfony** et une interface dynamique développée avec **Vue.js**.

## Fonctionnalités

* Présentation des formations proposées par l'école
* Gestion et affichage des formations
* Gestion des étudiants
* Gestion des enseignants
* Consultation des détails d'un étudiant
* Consultation des détails d'une formation
* Inscription à une formation
* Navigation dynamique entre les différentes pages
* Interface utilisateur développée avec Vue.js

## Architecture

Le projet utilise le modèle architectural **MVC (Model-View-Controller)** afin de séparer les différentes responsabilités de l'application.

```text
Utilisateur
     |
     v
 Vue.js
     |
     v
Contrôleur Symfony
     |
     v
   Modèle
     |
     v
Base de données
```

Cette architecture permet de séparer la logique métier, la gestion des données et la présentation de l'application.

## Technologies utilisées

### Backend

* PHP
* Symfony
* Architecture MVC
* Doctrine ORM

### Frontend

* Vue.js
* JavaScript
* HTML5
* CSS3

### Outils

* Git
* GitLab
* GitHub
* Vite
* Composer
* npm

## Structure du projet

```text
.
├── public/
├── src/
│   ├── components/
│   ├── router/
│   └── stores/
├── package.json
├── package-lock.json
├── vite.config.js
└── ...
```

## Installation

### Prérequis

* PHP
* Composer
* Node.js
* npm
* Symfony CLI
* Base de données

### Installation du frontend

```bash
npm install
```

### Lancement du serveur de développement

```bash
npm run dev
```

### Installation des dépendances Symfony

```bash
composer install
```

### Lancement de l'application Symfony

```bash
symfony server:start
```

## Contexte

**Projet universitaire — Université de La Rochelle**

Ce projet m'a permis de mettre en pratique le développement d'une application web dynamique en utilisant une architecture MVC, ainsi que la communication entre un backend Symfony et une interface frontend développée avec Vue.js.

## Compétences développées

* Développement backend avec Symfony
* Développement frontend avec Vue.js
* Architecture MVC
* Développement d'applications web dynamiques
* Gestion des données avec Doctrine ORM
* Création et utilisation de composants Vue.js
* Routage côté frontend
* Gestion de projet avec Git

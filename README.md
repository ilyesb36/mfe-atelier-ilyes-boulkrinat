
# Micro Frontend - Atelier Ilyes Boulkrinat

## Description

Ce projet illustre l'utilisation de la technologie Micro Frontend (MFE) avec Webpack Module Federation. L'objectif est d'exposer un composant `Header` dans un micro frontend appelé `child` et de l'utiliser dans une application principale (le `host`).

## Prérequis

Avant de commencer, assurez-vous d'avoir les éléments suivants installés sur votre machine :

- [Node.js](https://nodejs.org/) (version 14 ou supérieure)
- [npm](https://www.npmjs.com/) (le gestionnaire de paquets de Node.js)

## Lancer le projet

### Étape 1 : Lancer l'application `child`

1. Ouvrez un terminal et allez dans le répertoire `child` :

   ```bash
   cd child
   ```

2. Installez les dépendances du projet :

   ```bash
   npm install
   ```

3. Lancez l'application :

   ```bash
   npm start
   ```

### Étape 2 : Lancer l'application `host`

1. Ouvrez un autre terminal et allez dans le répertoire `host` :

   ```bash
   cd ../host
   ```

2. Installez les dépendances du projet :

   ```bash
   npm install
   ```

3. Lancez l'application :

   ```bash
   npm start
   ```

## Résultat

Vous verrez ensuite le composant `Header` du projet `child` s'afficher dans l'application `host`. 🎉

## Contribuer

N'hésitez pas à proposer des améliorations ou à ouvrir des issues en cas de problèmes.

---

Bonne exploration des Micro Frontends ! 😄

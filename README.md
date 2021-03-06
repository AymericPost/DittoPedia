# DittoPedia

Ceci est mon rendu pour un des checkpoint (évaltuation, test individuel) de la Wild Code School. Les consignes sont ci-dessous. Les instructions d'installation et de compilation sont à la fin du document.

# Checkpoint n°2 nov 2018 - **4h**

Pour ce travail tu as 4h devant toi. Ce checkpoint n'est pas un examen, il va nous permettre de valider tes compétences, essaye donc de le faire au maximum de ton côté.
Ce checkpoint est très consistant, si tu n'arrives pas à tout faire ce n'est pas grave, fais de ton mieux ;)



## **!!! PREMIERE ÉTAPE OBLIGATOIRE AVANT DE COMMENCER LE PREMIER EXERCICE !!!**


* Clone ce projet
* Crée une branche "ville_nom_prenom", qui va contenir ton avancée. (ville_nom_prenom sera remplacé par la ville de ton campus, ton nom et ton prénom...)



## Pré-requis (outils installés)

* NodeJS
* NPM
* [Angular CLI ](https://github.com/facebook/create-react-app)

## Étape 1 - Angular

<img src="https://media.giphy.com/media/DJM88aCmEeaNG/giphy.gif" height="40">


Pour cet exercice tu vas devoir créer un projet se nommant **pokeAng** grâce à `ng new`.
Ce projet aura pour but de travailler avec deux composants : `<app-pokemon>` et `<app-pokemon-list>`.

Pour récupérer les informations, tu devras te servir de l'API https://pokeapi.co *via* l'URL http://pokeapi.salestock.net/api/v2/pokemon/ , celle-ci ne nécessite aucune authentification tu peux donc l'utiliser sans problème.
Tu utiliseras un service et httpClient pour récupérer les données.

* `<app-pokemon-list>` devra récupérer les Pokemons de l'API et devra appeler autant de composants `<app-pokemon>` qu'il y a d'éléments dans le tableau récupéré depuis l'API.
* `<app-pokemon>` devra récupérer via le service ou le composant parent (@Input) le nom, l'image et les différents mouvements disponible pour ce Pokemon et les afficher dans la page sous le format de ton choix.
* `<app-pokemon-list>` devra également permettre une pagination en bas de page qui sera gérée grace à un boutton 'voir la suite'. Il permettra ainsi d'afficher les vingt premiers puis les vingts suivants etc... Pour cela tu peux regarder dans la documentation sur les [ressources](https://pokeapi.co/docs/v2.html#resource-lists) ou bien récupérer tous les pokemons et faire un [slice()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/slice) dessus.

## Étape 2 - Bonus

Il te reste du temps ? Parfait ! Tu vas pouvoir ajouter quelques fonctionnalités utiles à ton projet Angular !


* Créer une page pour afficher la liste des baies (http://pokeapi.salestock.net/api/v2/berry) et mettre en place le routing _via_ [router-outlet](https://angular.io/guide/router)

## Étape 3 - Et voilà...

Tu peux aller te désaltérer à la brasserie, tu l'as amplement mérité !!

**NB : Tu ne dois pas commencer par cette étape... ;)**

![Good Luck](https://media.giphy.com/media/AC1PtbdsJZyOQ/giphy.gif)

# Installation & execution

## Installation du projet

1. Téléchargez le projet à l'endroit de votre choix
2. Rendez-vous dans le dossier "pokeAng" du projet téléchargé
3. Téléchargez les dépendances en entrant dans le termial : 
- ```npm install``` 
- ```npm install bootstrap```
- ```npm install jquery@1.9.1```
- ```npm install popper.js@^1.14.3```

## Compilation du projet

1. Rendez-vous dans le dossier "pokeAng" du projet téléchargé
2. Entrez dans le terminal : ```ng serve -o```
3. Une fenètre de votre navigateur s'ouvrira automatiquement une fois la compilation faite

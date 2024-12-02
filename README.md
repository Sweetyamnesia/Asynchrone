# Notion d'Asynchrone en JavaScript

## Description :

Ce repository regroupe une série de challenges visant à explorer et comprendre les concepts fondamentaux de 
JavaScript asynchrone. Ces exercices mettent l'accent sur la gestion des tâches non bloquantes, la création et 
l'utilisation de promesses, ainsi que la manipulation d'async/await. 

L'objectif est de pratiquer les notions théoriques à travers des exemples concrets pour mieux appréhender 
l'exécution du code asycnhrone en JavaScript.

## Technologie utilisée :

* **Langage** : JavaScript ES6+

## Concepts abordés : 
* Promises
* Async/Await
* Gestion des erreurs
* Event Loop et Callbacks


## Challenges réalisés

## 1. Introduction au JavaScript Asynchrone
Le JavaScript asynchrone permet d'exécuter des tâches en arrière-plan, ce qui évite de bloquer l'exécution du programme principal. Voici un aperçu des différentes techniques asynchrones abordées :

* **Code synchrone** : Les tâches sont exécutées une par une, ce qui peut entraîner un blocage du programme, par exemple lorsqu'une boucle d'attente de 20 secondes est utilisée.
* **Code asynchrone avec setTimeout** : Permet d'exécuter une tâche après un délai spécifié, sans bloquer l'exécution du programme principal. Cela permet d'afficher des messages après un certain délai, tout en continuant l'exécution des autres parties du programme.
* **Boucle d'événements** : JavaScript gère les tâches asynchrones via une boucle d'événements. Il exécute d'abord tout le code synchrone, puis traite les tâches asynchrones (par exemple, via setTimeout).
* **Promesses** : Les promesses sont utilisées pour gérer des opérations asynchrones. Elles permettent de chaîner les actions avec .then() en cas de succès et .catch() en cas d'erreur. Les promesses rendent le code plus lisible par rapport aux callbacks traditionnels.
* **async/await** : Simplifie la gestion des promesses en permettant d'écrire un code asynchrone de manière synchrone. La fonction await permet d'attendre que la promesse se résolve avant de continuer l'exécution du programme.
* **Promise.all** : Permet d'exécuter plusieurs tâches asynchrones en parallèle et de traiter leurs résultats ensemble une fois que toutes les promesses sont résolues.
* **Utilisation de l'API fetch** : Récupérer des données depuis une API publique (comme GitHub) de manière asynchrone, en utilisant async/await.
Ces techniques permettent de rendre JavaScript réactif et performant, en permettant de gérer des tâches longues (comme les appels API ou les temporisations) sans bloquer le programme principal.

## 2. Transformation d'une opération synchrone en asynchrone
Dans ce challenge, nous avons transformé une opération bloquante (par exemple, une pause forcée de 20 secondes) en une opération asynchrone en utilisant des promesses, afin d’éviter le blocage de l'exécution du programme principal.

## 3. Création d'une Promise
Ce challenge consistait à créer une Promise personnalisée, avec gestion des résolutions (resolve) et rejets (reject). L'objectif était de comprendre comment les promesses gèrent les tâches asynchrones et comment les utiliser dans des scénarios réels.

## 4. Promesses chaînées et Callback Hell
L'objectif ici était de manipuler les promesses dans un flux logique. Nous avons transformé un exemple de "callback hell" (enchaînement de callbacks imbriqués) en une version utilisant des promesses chaînées, afin d'améliorer la lisibilité et la gestion des erreurs.

## 5. Utilisation d'Async/Await avec gestion des erreurs
Ce challenge a simplifié l'utilisation des promesses en utilisant async/await, rendant le code plus lisible et facile à maintenir. De plus, la gestion des erreurs a été améliorée en utilisant un bloc try/catch, afin de capter les exceptions dans un environnement asynchrone.

## 6. La boucle d'événements
Ce challenge a permis de visualiser la priorité entre les différentes tâches asynchrones dans la boucle d'événements de JavaScript. Nous avons exploré la différence de traitement entre un setTimeout et une promesse. L'objectif était de comprendre comment JavaScript exécute les tâches synchrones et asynchrones dans une file d'attente (queue) et une pile (stack), et comment les micro-tâches et macro-tâches sont traitées.

## Conclusion
Ces challenges ont permis de bien comprendre les bases de l'asynchrone en JavaScript, en explorant les concepts de promesses, de async/await, de la boucle d'événements, ainsi que la gestion des erreurs et de l'exécution parallèle des tâches.


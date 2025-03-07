# 📌 Notion d'Asynchrone en JavaScript

## 📝 Description

Ce repository regroupe une série de challenges visant à explorer et comprendre les concepts fondamentaux de JavaScript asynchrone. Ces exercices mettent l'accent sur la gestion des tâches non bloquantes, la création et l'utilisation de **promesses**, ainsi que la manipulation de **async/await**.

L'objectif est de pratiquer les notions théoriques à travers des exemples concrets pour mieux appréhender l'exécution du code asynchrone en JavaScript.

---

## 🛠️ Technologie utilisée :

- **Langage** : JavaScript ES6+

---

## 🔑 Concepts abordés :

- **Promises**
- **Async/Await**
- **Gestion des erreurs**
- **Event Loop et Callbacks**

---


## 🧑‍💻 Challenges réalisés

### 1. Introduction au JavaScript Asynchrone
Le JavaScript asynchrone permet d'exécuter des tâches en arrière-plan, ce qui évite de bloquer l'exécution du programme principal. Voici un aperçu des différentes techniques asynchrones abordées :
- **Code synchrone** : Les tâches sont exécutées une par une, ce qui peut entraîner un blocage du programme, par exemple lorsqu'une boucle d'attente de 20 secondes est utilisée.
- **Code asynchrone avec setTimeout** : Permet d'exécuter une tâche après un délai spécifié, sans bloquer l'exécution du programme principal.
- **Boucle d'événements** : JavaScript gère les tâches asynchrones via une boucle d'événements. Il exécute d'abord tout le code synchrone, puis traite les tâches asynchrones (par exemple, via setTimeout).
- **Promesses** : Utilisées pour gérer des opérations asynchrones. Elles permettent de chaîner les actions avec `.then()` en cas de succès et `.catch()` en cas d'erreur.
- **async/await** : Simplifie la gestion des promesses en permettant d'écrire un code asynchrone de manière synchrone.
- **Promise.all** : Permet d'exécuter plusieurs tâches asynchrones en parallèle et de traiter leurs résultats une fois que toutes les promesses sont résolues.
- **Utilisation de l'API fetch** : Récupérer des données depuis une API publique (comme GitHub) de manière asynchrone, en utilisant async/await.

Ces techniques rendent JavaScript réactif et performant, en permettant de gérer des tâches longues (comme les appels API ou les temporisations) sans bloquer le programme principal.

---

### 2. Transformation d'une opération synchrone en asynchrone
Nous avons transformé une opération bloquante (par exemple, une pause forcée de 20 secondes) en une opération asynchrone en utilisant des promesses, afin d’éviter le blocage du programme principal.

---

### 3. Création d'une Promise
Ce challenge consistait à créer une **Promise** personnalisée, avec gestion des résolutions (`resolve`) et rejets (`reject`).

![Promise](https://github.com/Sweetyamnesia/Asynchrone/blob/main/Images/Promise-ezgif.com-video-to-gif-converter.gif?raw=true)

---

### 4. Promesses chaînées et Callback Hell
L'objectif ici était de manipuler les promesses dans un flux logique et de transformer un exemple de "callback hell" (enchaînement de callbacks imbriqués) en une version utilisant des promesses chaînées pour améliorer la lisibilité et la gestion des erreurs.

![Promise-chain-callback-hell](https://github.com/Sweetyamnesia/Asynchrone/blob/main/Images/Promises-chainees-callback-hell-ezgif.com-video-to-gif-converter.gif?raw=true)

---

### 5. Utilisation d'Async/Await avec gestion des erreurs
Ce challenge a simplifié l'utilisation des promesses en utilisant **async/await**, rendant le code plus lisible et facile à maintenir. La gestion des erreurs a été améliorée grâce au bloc `try/catch`, permettant de capturer les exceptions dans un environnement asynchrone.

![Async-await-try-catch](https://github.com/Sweetyamnesia/Asynchrone/blob/main/Images/Async-await-Try-catch-ezgif.com-video-to-gif-converter.gif?raw=true)

---

### 6. La boucle d'événements
Ce challenge a permis de visualiser la priorité entre les différentes tâches asynchrones dans la boucle d'événements de JavaScript. Nous avons exploré la différence de traitement entre un `setTimeout` et une promesse. L'objectif était de comprendre comment JavaScript exécute les tâches synchrones et asynchrones dans une file d'attente (queue) et une pile (stack), et comment les micro-tâches et macro-tâches sont traitées.

---

## 🔗 Ressources utiles

- [📖 MDN - Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)  
  Une documentation complète sur les **promesses** en JavaScript, expliquant leur fonctionnement et comment les utiliser dans différents cas.

- [🎨 Guide complet Async/Await (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)  
  Un guide détaillé sur l'utilisation des **async/await** pour simplifier l'écriture de code asynchrone en JavaScript.

- [🎬 Introduction à la boucle d'événements en JavaScript (JavaScript.info)](https://javascript.info/event-loop)  
  Un article expliquant comment fonctionne la **boucle d'événements** en JavaScript et la gestion des tâches asynchrones dans le moteur JavaScript.

- [🔍 Async JavaScript – JavaScript.info](https://javascript.info/async)  
  Un tutoriel approfondi sur la programmation asynchrone en JavaScript, incluant les **promesses**, **async/await**, et bien plus.

- [💡 Understanding JavaScript Event Loop](https://medium.com/javascript-in-plain-english/understanding-javascript-event-loop-650ac7f52d43)  
  Un article de blog qui explore de manière détaillée le fonctionnement de la **boucle d'événements** en JavaScript et son impact sur l'exécution asynchrone.

___

## 📝 Conclusion
Ces challenges ont permis de bien comprendre les bases de l'asynchrone en JavaScript, en explorant les concepts de **promesses**, **async/await**, **la boucle d'événements**, ainsi que la gestion des erreurs et de l'exécution parallèle des tâches.









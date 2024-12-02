// source : https://fr.javascript.info/event-loop 

/*/let i = 0;

let start = Date.now();

function count() {

  // réalise un gros job
  for (let j = 0; j < 1e9; j++) {
    i++;
  }

  alert("Effectué en " + (Date.now() - start) + 'ms');
}

count();

-----------------------

let i = 0;

let start = Date.now();

function count() {

  // réalise un morceau du gros job (*)
  do {
    i++;
  } while (i % 1e6 != 0);

  if (i == 1e9) {
    alert("Effectué en " + (Date.now() - start) + 'ms');
  } else {
    setTimeout(count); // planifie un nouvel appel (**)
  }

}

count();
--------------------------------------


let i = 0;

let start = Date.now();

function count() {

  // déplace la planification au début
  if (i < 1e9 - 1e6) {
    setTimeout(count); // planifie le nouvel appel
  }

  do {
    i++;
  } while (i % 1e6 != 0);

  if (i == 1e9) {
    alert("Effectué en " + (Date.now() - start) + 'ms');
  }

}

count();

-----------------------------------


function count() {
    for (let i = 0; i < 1e6; i++) {
      i++;
      progress.innerHTML = i;
    }
  }

  count();
----------------------------
  

  let i = 0;

  function count() {

    // réalise un morceau du travail lourd (*)
    do {
      i++;
      progress.innerHTML = i;
    } while (i % 1e3 != 0);

    if (i < 1e7) {
      setTimeout(count);
    }

  }

  count();
-------------------------------

  menu.onclick = function() {
    // ...
  
    // crée un événement personnalisé avec les données de l'élément de menu cliqué
    let customEvent = new CustomEvent("menu-open", {
      bubbles: true
    });
  
    // dispatche l'événement personnalisé de manière asynchrone
    setTimeout(() => menu.dispatchEvent(customEvent));
  };


    ------------------------
  setTimeout(() => alert("timeout"));

Promise.resolve()
  .then(() => alert("promise"));

alert("code");

-----------------------

<div id="progress"></div>

<script>
  let i = 0;

  function count() {

    // réalise un morceau du travail lourd (*)
    do {
      i++;
      progress.innerHTML = i;
    } while (i % 1e3 != 0);

    if (i < 1e6) {
      queueMicrotask(count);
    }

  }

  count();
</script>
----------------------------
/*/



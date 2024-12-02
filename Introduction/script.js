//Code synchrone
function attendre (millis) {
    const debut = Date.now();
    while (Date.now () - debut < millis) {

    }
    console.log("Attente terminée");
}

console.log("Début");
attendre(20000);
console.log("Fin");

//Code asynchrone
console.log("Début");
setTimeout(() => {
    console.log("Attente terminée");
}, 2000);
console.log("Fin");

//Boucle d'événements
console.log("1. Début");
setTimeout(() => {
    console.log("3. Timeout exécuté");
}, 0);
console.log("2. Fin");

//setTimeout
console.log("Début de l'attente");
setTimeout(() => {
    console.log("Action exécutée après 3 secondes !");
}, 3000);
console.log("Fin de l'attente...");

//Promesse
function recupererDonnees () {
    return new
    Promise((resolve, reject) => {
        console.log("Récupération des données en cours...");
        setTimeout(() => {
            const donnees = {nom: "Alice", age: 30};
            if(donnees) {
                resolve(donnees);
            } else {
                reject("Aucune donnée trouvée");
            }
        }, 2000); 
    });
}

recupererDonnees().then(donnees => {
    console.log("Données récupérées :", donnees);
}).catch(erreur => {
    console.log("Erreur :", erreur);
});

//erreur de promesse
function fetchData() {
    return new Promise((resolve, reject) => {
        const success = Math.random() > 0.5; // Simule une réussite ou un échec aléatoire
        setTimeout(() => {
            if (success) {
                resolve("Données récupérées avec succès !");
            } else {
                reject("Erreur lors de la récupération des données.");
            }
        }, 1000);
    });
}

fetchData()
    .then(response => {
        console.log(response);
    })
    .catch(error => {
        console.error("Une erreur est survenue :", error);
    });

//Différence callback et promesse
// Code avec des Callbacks :
function fetchData(callback) {
    setTimeout(() => {
        const success = Math.random() > 0.5;
        if (success) {
            callback(null, "Données récupérées avec succès !");
        } else {
            callback("Erreur lors de la récupération des données", null);
        }
    }, 1000);
}

fetchData((error, data) => {
    if(error) {
        console.error("Une erreur est survenue :", error);
    } else{
        console.log(data);
    }
});

//Transformation en Code avec des Promesses :
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = Math.random() > 0.5;
            if (success) {
                resolve("Données récupérées avec succès !");
            } else {
                reject("Erreur lors de la récupération des données.");
            }
        }, 1000);
    });
}

fetchData()
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error("Une erreur est survenue :", error);
    });



//async/await
//Code avec .then() et .catch()
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = Math.random() > 0.5;
            if (success) {
                resolve("Données récupérées avec succès");
            } else {
                reject("Erreur lors de la récupération des données.");
            }
        }, 1000);
    });
}

fetchData()
.then(data => {
    console.log(data);
})
.catch(error => {
    console.error("Une erreur est survenue :", error);
});

//Code simplifié avec "async" et "await"
async function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = Math.random() > 0.5;
            if (success) {
                resolve("Données récupérées avec succès !");
            } else {
                reject("Erreur lors de la récupération des données.");
            }
        }, 1000)
    });
}

async function processData() {
    try {
        const data = await fetchData();
        console.log(data);
    } catch (error) {
        console.error("Une erreur est survenue :", error);
    }
}

processData(); 

//Utilisation de Promise.all
function fetchUsers() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([{id: 1, name: "Alice"}, {id: 2, name: "Bob"}]);
        }, 1000);
    });
}

function fetchPosts() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([{id: 101, title: "Post 1"}, {id: 102, title: "Post 2"}])
        }, 1500)
    });
}

function fetchComments() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([{id: 201, content: "Comment 1"}, {id: 202, content: "Comment 2"}])
        }, 1200)
    });
}

Promise.all([fetchUsers(), fetchPosts(), fetchComments()])
    .then(results => {
        const [users, posts, comments] = results;
        console.log("Utilisateurs:", users);
        console.log("Posts:", posts);
        console.log("Commentaires:", comments);
    })
    .catch(error => {
        console.error("Une erreur est survenue ;", error)
    });

    //API fetch
    // Exemple : récupération et traitement de données JSON  à partir d'une API publique
    async function getUserData(username) {
        try {
            const response = await fetch(`https://api.github.com/users/${username}`);
            if (!response.ok) {
                throw new Error(`Erreur HTTP ! statut : ${response.status}`);
            }
            const data = await response.json();
            console.log("Données de l'utilisateur :", data)
            console.log(`Nom : ${data.name}`);
            console.log(`Bio : ${data.bio}`);
            console.log(`Nombre de dépôts publics : ${data.public_repos}`);
        } catch (error) {
            console.error("Une erreur est survenue ;", error);
        }
    }

getUserData("octocat");
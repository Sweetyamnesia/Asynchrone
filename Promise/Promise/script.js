const button = document.getElementsByClassName("styled")[0];
button.addEventListener('click', fonctionAuClic);
function fonctionAuClic() {
    const usernameInput = document.getElementById("username").value;
    if (usernameInput === "") {
        return false;
    }
    const loader = document.getElementById("loader");
    loader.style.display = "flex";
    function checkUsernameAvailability (username) {
        return new Promise ((resolve, reject) => {
            console.log("Récupération du nom d'utilisateur...")
            setTimeout(() => {
                const takenUsernames = ['johnDoe', 'janeDoe', 'user123'];
                if (takenUsernames.includes(username)) {
                    reject("Le nom d'utilisateur est indisponible.");
                } else {
                    resolve("Le nom d'utilisateur est disponible");
                }
                loader.style.display = "none";
            }, 2000);
        });
    }
    
    checkUsernameAvailability(usernameInput).then(message => {
        document.getElementById("message").innerText = message;
        document.getElementById("message").style.color = "green";
        console.log("Nom d'utilisateur récupéré :", username);
    }).catch(erreur => {
        document.getElementById("message").innerText = erreur;
        document.getElementById("message").style.color = "red";
        console.log("erreur :", erreur);
    });
   document.getElementById("message").innerText = "";
};
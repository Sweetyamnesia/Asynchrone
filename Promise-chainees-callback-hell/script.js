const button = document.getElementById("button");
button.addEventListener('click', fonctionAuClic);
function fonctionAuClic() {
    document.getElementById("message").innerText = "";
    const destinationInput = document.getElementById("destination").value;
    if (destinationInput === "") {
        return false;
    }
    const loader = document.getElementById("loader");
    loader.style.display = "block";

    function resaVol() {
        return new Promise((resolve, reject) => {
            const success = Math.random() > 0.3;
            setTimeout(() => {
                if (success) {
                    resolve("Vol réservé pour " + destinationInput);
                } else {
                    reject("Aucun vol n'est disponible pour cette destination. Veuillez réessayer plus tard.")
                }
            }, 1000);
        });
    }

    function resaHotel() {
        return new Promise((resolve, reject) => {
            const success = Math.random() > 0.4;
            setTimeout(() => {
                if (success) {
                    resolve("Hotel réservé ");
                } else {
                    reject("Aucun hôtel n'est disponible pour cette destination. Veuillez réessayer plus tard.")
                }
            }, 1000);
        });
    }

    function resaVoiture() {
        return new Promise((resolve, reject) => {
            const success = Math.random() > 0.5;
            setTimeout(() => {
                if (success) {
                    resolve("Voiture réservée");
                } else {
                    reject("Aucun vol n'est disponible pour cette destination. Veuillez réessayer plus tard.")
                }
            }, 1000);
        });
    }


    let volResult;
    let hotelResult;
    let voitureResult;
    resaVol(destinationInput)
    .then(result => {
        volResult = result;
        console.log(result);
        return resaHotel(result);
    }).then(result2 => {
        hotelResult = result2;
        console.log(volResult, result2);
        return resaVoiture(result2);
    }).then(result3 => {
        voitureResult = result3;
        const finalMessage = `${volResult}, ${hotelResult}, ${voitureResult}`;
        console.log(volResult, hotelResult, voitureResult);
        document.getElementById("message").innerText = finalMessage;
        document.getElementById("message").style.color = "green";
        loader.style.display = "none";
    }).catch(erreur => {
        document.getElementById("message").innerText = erreur;
        document.getElementById("message").style.color = "red";
        console.log("Erreur :", erreur);
        loader.style.display = "none";
    })
} 
      


 
    //console.log(`${result}\n${result2}\n${result3}`)
    /*/
    .then(finalResult => {
        document.getElementById("message").innerText = finalResult;
        document.getElementById("message").style.color = "green";
    
    .then(finalResult => {
        document.getElementById("message").innerText = finalResult;
        document.getElementById("message").style.color = "green";
    }).catch(erreur => {
       
        loader.style.display = "none";       
    });/*/
    

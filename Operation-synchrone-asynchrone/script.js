function operationSynchrone () {
    let sum = 0;
    for (let i = 0; i < 100000000; i++) {
        sum += i;
    }
    console.log("Transforme moi en code asynchrone pour que je m'exécute en dernier");
}

console.log("Début de l'opération synchrone");
setTimeout(() => {
    operationSynchrone();
}, 0);
console.log("Fin de l'opération synchrone");
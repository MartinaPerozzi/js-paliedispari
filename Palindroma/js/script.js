// Preparo gli elementi per i dati dell'utente
const buttonSubmit = document.querySelector(".submit-button");
let userText = document.querySelector(".text");

// Creo una funzione che ha come scopo quello di attraversare la parola inserita dall'utente dall'ultima lettera in su.
function reverseWord(palindrom) {
    // Creo una variabile dove pushare le lettere controllate, otterrò la parola dell'utente al contrario.
    let newString = "";
    // cicla per la lunghezza della parola
    for (let i = palindrom.length - 1; i >= 0; i--) {
        newString += palindrom[i];
    }
    // Quando HAI FINITO "ritornami" il risultato.
    return newString;

}


// Al click prendo i dati inseriti dall'utente;
buttonSubmit.addEventListener(
    "click",
    function () {
        // Valori utente
        userText = document.querySelector(".text").value;

        // Avvio la funzione
        const resultOfTest = reverseWord(userText);

        // Possibili casi e messaggi per l'utente.

        if (resultOfTest == userText) {
            let message = document.querySelector(".mess").innerHTML += `La tua parola "${userText}" è un palindromo`
        } else {
            message = document.querySelector(".mess").innerHTML += `La tua parola "${userText}" non è un palindromo`;
        }
    }
)





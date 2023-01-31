// Preparo gli elementi per i dati dell'utente
const buttonSubmit = document.querySelector(".submit-button");
let userText = document.querySelector(".text");


function reverseWord(palindrom) {

    let newString = "";

    for (let i = palindrom.length - 1; i >= 0; i--) {
        newString += palindrom[i];
        return newString;
    }
}



// Al click prendo i dati inseriti dall'utente;
buttonSubmit.addEventListener(
    "click",
    function () {
        // Valori utente
        userText = document.querySelector(".text").value;

        const resultOfTest = reverseWord(userText);

        if (resultOfTest == userText) {
            let message = document.querySelector(".mess").innerHTML += " Palindromo"
        }

    }
)





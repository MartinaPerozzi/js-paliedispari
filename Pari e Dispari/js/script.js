// Preparo gli elementi per i dati dell'utente
const buttonSubmit = document.querySelector(".submit-button");
let userNumber = parseInt(document.querySelector(".number"));
let userSelection = document.querySelector("#odd-even");
let userMess = document.querySelector(".number-current");

// Preparo il numero randomico del concorrente computer

function randomNumber() {
    let numberPc = Math.floor(Math.random() * 5 - 1) + 1;
    return numberPc;
}

// Al click prendo i dati inseriti dall'utente;

buttonSubmit.addEventListener(
    "click",
    function () {
        // Valori utente
        userNumber = parseInt(document.querySelector(".number").value);
        userSelection = document.querySelector("#odd-even").value;


        // Valori pc 

        let theRandomNumber = randomNumber();
        let theSum = sumOfValues(userNumber, theRandomNumber);

        let message = document.querySelector(".mess").innerHTML = `Hai inserito ${userNumber} e il pc ha inserito ${theRandomNumber}. La somma è ${theSum}. Tu hai scelto "${userSelection}" quindi:`


        if (isEven(theSum) && (userSelection == "even")) {
            let message = document.querySelector(".mess").innerHTML += " Hai vinto!"
        }
        if (!isEven(theSum) && (userSelection == "odd")) {
            let message = document.querySelector(".mess").innerHTML += " Hai vinto!"
        } else {
            let message = document.querySelector(".mess").innerHTML += " Hai perso!"

        }

    }
)

function sumOfValues(num1, num2) {

    const resultOfSum = num1 + num2;
    return resultOfSum;
}

function isEven(num) {
    return (num % 2 == 0);
}
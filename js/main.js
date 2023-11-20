
/* ESERCIZIO 1
Palidroma
Chiedere all’utente di inserire una parola. 
Creare una funzione per capire se la parola inserita è palindroma. 
Usate poi la funzione per decretare se la parola inserita dall'utente è palindroma o meno. 
*/

/*
let parola = prompt("Inserisci parola");

let parolaInversa = invertiParola(parola);

if(parola == parolaInversa){
    console.log('La parola è palindroma');
  } else {
    console.log('La parola non è palindroma');
  }
*/




/* ESERCIZIO 2
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. 
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). 
Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione). 
Dichiariamo chi ha vinto.
*/

/*
let numberOddEven = prompt("Scegli pari o dispari")
let choseNumber = prompt("Scegli un numero da 1 a 5");

choseNumber = parseInt(choseNumber);

let numberRandom = generateRandomNumberZeroToMaxNumber(5);


let sum = choseNumber + numberRandom;
let result = sumAndOddEven(sum, numberOddEven);
*/

/* JSNACK12
Crea una funzione chiamata sommaNumeri che dato un array di 10
numeri definito da voi nel codice, ne calcoli la loro somma e la restituisca
come risultato.
Utilizzare la funzione sommaNumeri per stampare il risultato ottenuto.
*/

let arrayNumbers = [10, 5, 22, 8, 33, 45, 80, 72, 53, 66];
let sum = 0;

sommaNumeri(arrayNumbers);




// ------------------------------- FUNZIONI ---------------------------------------

// SOMMA NUMERI

function sommaNumeri() { 
    for (let i = 0; i < arrayNumbers.length; i++) {
        sum += arrayNumbers[i];
    }
    console.log(sum);
}



// GENERA NUMERO RANDOM

function generateRandomNumberZeroToMaxNumber(maxNumber) {
    let randomNumber = Math.floor(Math.random() * (maxNumber + 1));
    return randomNumber;
}


// PER PAROLA PALINDROMA

function invertiParola(str){
    var strInversa = str.split('').reverse().join('');  
    return strInversa;
  }


  // SOMMA + RISULTATO PARI O DISPARI 

function sumAndOddEven (number, or) {
    if (number % 2 == 0 && or == 'pari') {
        console.log("Hai vinto");
    } else if (number % 2 == 0 && or == 'dispari') {
        console.log("Hai perso");
    } else if (number % 2 != 0 && or == 'pari') {
        console.log("Hai perso");
    } else if (number % 2 != 0 && or == 'dispari') {
        console.log("Hai vinto")
    } 
}

/*******************************************************************************
​
    Per questo esercizio, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?
​
    Inserisci i tuoi commenti con le risposte alla fine dell'esercizio
​
*******************************************************************************/

// ESERCIZIO 1
// function checkAge() {
//     const myAge = 32;
//     const message = '';

//     if (myAge < 18) {
//         message = `Sei troppo giovane! Hai ${myAge} anni!`;
//     } else {
//         message = 'Hai più di 18 anni!';
//     }
// }
// checkAge();
//in questo codice const message è una variabile costante e non possiamo riassegnare il suo contenuto
// un altro errore di logica è il return inesistente dando cosi alla funzione invocata il valore undefined
//CORREZIONE
// function checkAge() {
//     const myAge = 32;
//     let message = '';

//     if (myAge < 18) {
//         message = `Sei troppo giovane! Hai ${myAge} anni!`;
//     } else {
//         message = 'Hai più di 18 anni!';
//     }
//     return message
// }
// console.log(checkAge());

// ESERCIZIO 2
// function printColorsNumber() {
//     const colors = ['blue', 'red', 'yellow', 'green', 'black'];
//     console.log(`Nella mia palette ci sono ${colors.lenght} colori!`);
// }
// printColorsNumber();
//in questo codice c'è un errore di battitura dato che nell' interpolazione c'è scritto colors.lenght invece di colors.length
//CORREZIONE
// function printColorsNumber() {
//     const colors = ['blue', 'red', 'yellow', 'green', 'black'];
//     console.log(`Nella mia palette ci sono ${colors.length} colori!`);
// }
// printColorsNumber();

// ESERCIZIO 3
//  function addNumbers() {
//     const userNumber = prompt('Inserisci un numero');
//     const total = userNumber + 12;

//    console.log(`Il risultato finale è ${total}`);
//  }
//  addNumbers();
//l' errore del codice qui è logico dato che in questo caso il + unisce la stringa del prompt a un numero
//in questo caso bisogna convertire la stringa in un numero per poter sommare i due numeri.
//CORREZIONE
//  function addNumbers() {
//     const userNumber = Number(prompt('Inserisci un numero'));
//     const total = userNumber + 12;

//    console.log(`Il risultato finale è ${total}`);
//  }
//  addNumbers();

//ESERCIZIO4
// function checkAccess() {
//   const addresses = [
//     "mymail@mail.com",
//     "yourmail@mail.com",
//     "hermail@mail.com",
//     "hismail@mail.com",
//   ];
//   const userEmail = prompt("Inserisci il tuo indirizzo email");

//   let grantAccess = "false";

//   if (addresses.includes(userEmail)) {
//     grantAccess = "true";
//   }

//   if (grantAccess === true) {
//     console.log("Accesso consentito!");
//   } else {
//     console.log("Accesso negato!");
//   }
// }
// checkAccess();
// in questo caso i valori booleani sono considerati stringhe quindi c'è un errore di sintassi perchè sono scritti nelle "''"
//CORREZIONE
// function checkAccess() {
//   const addresses = [
//     "mymail@mail.com",
//     "yourmail@mail.com",
//     "hermail@mail.com",
//     "hismail@mail.com",
//   ];
//   const userEmail = prompt("Inserisci il tuo indirizzo email");

//   let grantAccess = false;

//   if (addresses.includes(userEmail)) {
//     grantAccess = true;
//   }

//   if (grantAccess === true) {
//     console.log("Accesso consentito!");
//   } else {
//     console.log("Accesso negato!");
//   }
// }
// checkAccess();

// ESERCIZIO 5 (suggerimento: c'è un solo errore)
//  function checkAccessImproved() {
//      const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];

//      const userEmail = prompt('Inserisci il tuo indirizzo email');

//      let grantAccess = 'false';

//     for (let i = 0; i < addresses.length; i++) {
//         const email = addresses[i];

//         if (userEmail.length > 5) {

//             if (email === userEmail) {
//                 grantAccess = 'true';

//             }

//          }

//         if (grantAccess) {
//             console.log('Accesso consentito!');
//         } else {
//             console.log('Accesso negato!');
//          }
//     }
//  checkAccessImproved();
//l errore di questo codice è di sintassi la funzione non è stata chiusa
// i valori booleani sono sempre delle stringhe
// i console log sono dentro il for ripetendo la stampa più volte
//CORREZIONE
function checkAccessImproved() {
  const addresses = [
    "mymail@mail.com",
    "yourmail@mail.com",
    "hermail@mail.com",
    "hismail@mail.com",
  ];

  const userEmail = prompt("Inserisci il tuo indirizzo email");

  let grantAccess = false;

  for (let i = 0; i < addresses.length; i++) {
    const email = addresses[i];

    if (userEmail.length > 5) {
      if (email === userEmail) {
        grantAccess = true;
      }
    }
  }
  if (grantAccess) {
    console.log("Accesso consentito!");
  } else {
    console.log("Accesso negato!");
  }
}
checkAccessImproved();

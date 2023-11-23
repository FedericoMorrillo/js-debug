/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
// for (let i = 0; i > 5; i++) {
//     console.log(i);
// }

//Questo codice è un ciclo con un errore logico:
//la sintassi è corretta ma come dichiarato i = 0 non potrà mai incrementare dato che nella condizione di incremento
//l' indice deve essere maggiore di 5.
//CORREZIONE
//for (let i = 0; i < 5; i++) {
//    console.log(i);
//}
// dichiarando nella condizione di incremento i < 5 l' indice del ciclo aumenterà dalla sua posizione iniziale (0) fino a 4.


// ESERCIZIO 2
// function addIfEven(num) {
//     if (num % 2 = 0) {
//         return num + 5;
//     }
// }
//In questo codice la funzione ha un errore di sintassi nella condizione if.
// precisamente l' operatore di assegnazione "=" che viene utilizzato per assegnare ad esempio un valore a una variabile.
// in questo caso l' operatore corretto è "==" ovvero di uguaglianza che in questo caso sta a dichiarare se il numero che viene 
//inserito da come resto 0(con operatore modulo) allora è pari dunque di ritorno aggiunge al numero 5 sommandoli.
//CORREZIONE    
//function addIfEven(num) {
//    if (num % 2 == 0) {
//        return num + 5;
//   }
//}
// const somma = addIfEven(6);
// console.log(somma);
//inserendo l' operatore di uguaglianza la funzione svolge il calcolo


// ESERCIZIO 3
// function loopToFive() {
//     for (let i = 0, i < 5, i++) {
//         console.log(i);
//     }
// }
//In questo codice ci sono altri errori di sintassi dato che dovremmo dividere l' inizializzazione dell' indice con la condizione con ";"
//CORREZIONE
// function loopToFive() {
//     for (let i = 0; i < 5; i++) {
//         console.log(i);
//     }
// }
// let indice = loopToFive();
//dividendo l' inizializzazione con la condizione in questo modo il codice svolge la sua funzione correttamente.


// ESERCIZIO 4 (suggerimento: ci sono 7 errori)
// function displayEvenNumbers() {
//     let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
//     let evenNumbers = [];
//     for (let i = 0; i < numbers.length - 1; i++;) {
//         if (numbers % 2 = 0); {
//             evenNumbers.push(i);
//         }
//         return evenNumbers;
//     }
// }
// displayEvenNumbers(); // dovrebbe restituire [2,4,6,8]
//in questo codice ci sono diversi errori;
//il primo nel ciclo è la condizione, dato che se l indice è minore della lunghezza dell' array numbers -1 non arriverà mai 
//a fine array non includendo tutti i numeri. il secondo errore è subito dopo nell' incremento dell' indice dato che essendo l' ultima
//operazione del for non va chiuso con ";". il terzo errore si trova nell' if tornando all' esercizio di prima qui dovrebbe utilizzare
//l' operatore di uguaglianza e subito dopo il quarto errore inserendo ";" dopo le tonde dato che chiuderebbe l' istruzione.
//il quinto errore si trova nell' if dato che dovremmo inserire il numero nella posizione indice non l' indice stesso.
// il sesto errore è nel push dato che dovremmo pushare nel nuovo array il numero nella posizione indice non l' indice stesso.
//l' ultimo errore è il return che stando dentro il ciclo lo interrompe non portandolo a termine.
//CORREZIONE
function displayEvenNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];
    for (let i = 0; i <= numbers.length - 1; i++) {
        if (numbers[i] % 2 == 0) {
            evenNumbers.push(numbers[i]);
        }
    }
    return evenNumbers;
}
console.log(displayEvenNumbers()); // dovrebbe restituire [2,4,6,8]
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

// // ESERCIZIO 1 (suggerimento: ci sono 6 errori)
// const cars = [
//     {
//         manufacturer: 'Ford',
//         model: 'Fiesta',
//         type: 'diesel'
//     },
//     {
//         manufacturer: 'Audi',
//         model: 'A1',
//         type: 'benzina'
//     },
//     {
//         manufacturer: 'Volkswagen',
//         model: 'Golf',
//         type: 'Benzina'
//     },
//     {
//         manufacturer: 'Fiat',
//         model: 'Panda',
//         type: 'metano'
//     },
//     {
//         manufacturer: 'Fiat',
//         model: 'Multipla',
//         type: 'GPL'
//     },
//     {
//         manufacturer: 'Tesla',
//         model: 'Model 3',
//         type: 'elettrico'
//     },
//     {
//         manufacturer: 'Volkswagen',
//         model: 'Polo',
//         type: 'benzina'
//     },
//     {
//         manufacturer: 'Ford',
//         model: 'Kuga',
//         type: 'Diesel'
//     },
//     {
//         manufacturer: 'Seat',
//         model: 'Ibiza',
//         type: 'metano'
//     }
//     {
//         manufacturer: 'Audi',
//         model: 'R8',
//         type: 'Benzina'
//     },
// ];

// const gasolineCars = cars.filter( (auto) >= auto.type === 'benzina');

// const dieselCars = cars.filter( (auto) => {
//     auto.type === 'diesel';
// });

// const otherCars = cars.filter( (auto) => {
//     return auto.type !== 'benzina' || auto.type !== 'diesel';
// });

// console.log('Auto a benzina');
// console.log('*******************************');
// console.log(gasolineCars);

// console.log('Auto a diesel');
// console.log('*******************************');
// console.log(dieselCars);

// console.log('Tutte le altre auto');
// console.log(otherCars);


//CORREZIONE
const cars = [
    {
        manufacturer: 'Ford',
        model: 'Fiesta',
        type: 'diesel'
    },
    {
        manufacturer: 'Audi',
        model: 'A1',
        type: 'benzina'
    },
    {
        manufacturer: 'Volkswagen',
        model: 'Golf',
        type: 'benzina'
    },
    {
        manufacturer: 'Fiat',
        model: 'Panda',
        type: 'metano'
    },
    {
        manufacturer: 'Fiat',
        model: 'Multipla',
        type: 'GPL'
    },
    {
        manufacturer: 'Tesla',
        model: 'Model 3',
        type: 'elettrico'
    },
    {
        manufacturer: 'Volkswagen',
        model: 'Polo',
        type: 'benzina'
    },
    {
        manufacturer: 'Ford',
        model: 'Kuga',
        type: 'diesel'
    },
    {
        manufacturer: 'Seat',
        model: 'Ibiza',
        type: 'metano'
    },  
    {
        manufacturer: 'Audi',
        model: 'R8',
        type: 'benzina'
    },
];
                                
const gasolineCars = cars.filter( cars => cars.type === 'benzina');

const dieselCars = cars.filter( cars => {
   return cars.type === 'diesel';
});

const otherCars = cars.filter( cars => {
    return cars.type !== 'benzina' && cars.type !== 'diesel';
});

console.log('Auto a benzina');
console.log('*******************************');
console.log(gasolineCars);

console.log('Auto a diesel');
console.log('*******************************');
console.log(dieselCars);

console.log('Tutte le altre auto');
console.log(otherCars);

//in questo codice ci sono diversi errori
//il primo errore è l' assenza di una virgola nell' array andando a segnalare un errore
// il secondo errore è andare a prendere le proprietà di auto dato che non abbiamo un array di oggetti di tipo auto
// il terzo errore è nella prima arrow function visto che la sintassi è uguale maggiore non minore uguale
//il quarto errore è avere gli stessi type dell' oggetto con la prima maiuscola ed altri con l' inizale minuscola dato che js è case sensitive
//il quinto errore è nell' arrow function di dieselcars dato che dentro le parentesi graffe non abbiamo un return
//il sesto errore è nel return di othercards visto che stiamo raggruppando le altre auto che funzionano con carburanti diversi l' operatore || 
//non è corretto dato che dobbiamo includere tutte le auto con carburante diverso da benzina E (&&) iverso da diesel.
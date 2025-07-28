/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* Stringa: le stringhe vengono definiti tramiti gli apici doppi oppure l'apice singolo(meglio usare i doppi) es: "Ciao", "a", "12". Attenzione: scrivere Ciao invece che "Ciao" farà cercare una variabile di nome Ciao
   Numerico: i valori numerici posso essere interi e decimali, in questo ultimo caso si usano i punti per differenziarli es: 12 oppure 12.304
   Booleano: il dato booleano sono dati di ritorno ti dicono se una cosa è vera o falsa, sono solo questi due: true, false. Questo tipo di dato
   serve al programma per capire che azione fare "se questa cosa è "true" fai questo se è "false" fai quest'altra cosa" */

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

const myName = "Alessio";
console.log("const myName", myName); // Stampa il nome, con "const myName" all'interno ci apparirà appunto "const myName" nella console in modo tale da capire a cosa ci si riferisce quando si va a leggere il dato, altrimenti si legge solo "Alessio"

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

const sum = 12 + 20;
console.log("const sum", sum); // Stampa il risultato della somma

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

const x = 12;
console.log("const x", x); // Stampa il valore della variabile x

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* myName = "Visconti";
console.log("const myName", myName); */ // Questo codice darà errore perché non si può riassegnare un valore a una variabile dichiarata con const.

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

const difference = 4 - x;
console.log("const difference", difference); // Stampa il risultato della sottrazione tra 4 e x

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const name1 = "john";
const name2 = "John";
console.log("Uguaglianza", name1 === name2); // Stampa false perché le stringhe sono diverse
const name2Lower = name2.toLowerCase();
console.log("Uguaglianza dopo toLowerCase", name1 === name2Lower); // Stampa true perché ora entrambi sono in minuscolo


/*
Oggi il tuo compito Ã¨ creare la logica per un sito di e-commerce che deve supportare sconti extra per utenti speciali.
A partire da una lista di prezzi, un utente e un costo di spedizione l'algoritmo deve determinare il costo totale del carrello.
ATTENZIONE! Gli argomenti di questa settimana sono cruciali per lo svolgimento di un lavoro di un developer (il 90% del dati che maneggerai saranno array di oggetti!!) quindi 
assicurati di COMPRENDERE la logica. Se ti trovi in difficolta', scrivi ad un membro del teaching staff! :) 

Se l'utente ha la proprietÃ  "isAmbassador" con valore true, il carrello deve venire scontato del 30%, PRIMA di calcolare la spedizione (anche gli utenti speciali pagano le spedizioni).
Se l'utente ha la proprietÃ  "isAmbassador" con valore false, il carrello NON deve venire scontato.
In entrambi i casi, la spedizione Ã¨ gratuita per ogni carrello con costo superiore a 100. Altrimenti, aggiungi il valore fornito per coprire il costo della spedizione.

In basso troverai degli esempi di utenti, una lista prezzi e un costo fisso di spedizione.
Crea un array di utenti (usando .push) e stampa, per ogni utente (quindi con un loop) la frase "NOMEUTENTE COGNOMEUTENTE e' / non e' un ambassador" basandoti sui dati contenuti nell'oggetto. 
ES. L'utente Marco Rossi e' un ambassador, quindi la frase dovrebbe essere "Marco Rossi e' un ambassador"
Infine, crea un SECONDO array in cui inserirai SOLO gli ambassador.
*/




const marco = {
  name: "Marco" ,
  lastName: "Rossi",
  isAmbassador: true ,
}

const paul = {
  name: "Paul",
  lastName: "Flynn",
  isAmbassador: true,
}

const amy = {
  name: "Amy",
  lastName: "Reed",
  isAmbassador: false,
}

let listaUtenti = [];
let utentiAmbassador = [];
let totalCost = 0;
let costoDelCarrello = 0;
const prices = [100 ,0 , 0]
const shippingCost = 50
let utenteCheEffettuaLAcquisto = amy //cambia il valore qui per provare se il tuo algoritmo funziona!

// Calcolo il costo totale sommando gli articoli nel carrello

for (let i = 0; i < prices.length; i++) {
   totalCost += prices[i];
}
// Costo del carrello con lo sconto del 30%

costoDelCarrello = totalCost * 0.7;


// Dopo la lezione pratica del venerdì ho provato ad inserire il tutto nella funzione in modo da lanciarla inserendo soltanto il nome dell'utente

 // Scrivo la funzione 

 function calcoloCosto(nome) {
    if (nome.isAmbassador && totalCost>100) {
        costoDelCarrello = totalCost * 0.7;
         console.log(nome.name + " è un/una ambassador e ha il diritto ad uno sconto del 30%! Inoltre non pagherà i costi di spedizione in quanto ha speso più di 100 euro . Il totale è : " + costoDelCarrello + " €");
     }else if(nome.isAmbassador && totalCost<=100){
         console.log(nome.name + "  è un/una ambassador e ha il diritto ad uno sconto del 30% ma PAGHERA'i costi di spedizione in quanto ha speso MENO di 101 euro . Il totale è : " + (costoDelCarrello + shippingCost) + " €");
     }else if((!nome.isAmbassador) && totalCost<=100 ){
         console.log(nome.name + "  NON è un/una ambassador, inoltre pagherà i costi di spedizione. Il totale è: " + (totalCost + shippingCost) + " €");
     }else if ((!nome.isAmbassador) && totalCost>100 ){
         console.log(nome.name + " NON è un/una ambassador ma si è garantito la spedizione gratuita in quanto ha speso più di 101 euro pagando:" + totalCost + " €") ;
     }
    
 }

  // Lancio la funzione 

  calcoloCosto(marco);

  // controllo che gli utenti siano o meno ambassador usando l'operatore ternario

 listaUtenti.push(marco, paul,amy);

 for (let i = 0; i < listaUtenti.length; i++) {
    let frase = listaUtenti[i].isAmbassador?console.log(listaUtenti[i].name + " " + listaUtenti[i].lastName +  " E' un ambassador"): console.log(listaUtenti[i].name + " " + listaUtenti[i].lastName + " Non è un ambassador ");
 }

 // Faccio un ciclo for per trovare i soli utenti ambassador

 for (let i=0; i<listaUtenti.length;i++){
    if(listaUtenti[i].isAmbassador){
        utentiAmbassador.push(listaUtenti[i].name);
    }
}

console.log("Utenti/e Ambassador : " + utentiAmbassador);




// Inizialmente avevo svolto così l'esercizio ma dopo la lezione pratica del Venerdi'
//Ho messo tutto dentro una funzione. (Ho comunque voluto lasciare la vecchia risoluzione commentata )

/* // MARCO

if (marco.isAmbassador && totalCost>100) {
    console.log(marco.name + "  è un ambassador e ha il diritto ad uno sconto del 30%! Inoltre non pagherà i costi di spedizione in quanto ha speso più di 100 euro . Il totale è : " + costoDelCarrello);
}else if(marco.isAmbassador && totalCost<=100){
    console.log(marco.name + " è un ambassador e ha il diritto ad uno sconto del 30% ma PAGHERA'i costi di spedizione in quanto ha speso MENO di 100 euro . Il totale è : " + (costoDelCarrello + shippingCost));
}else if((!marco.isAmbassador) && totalCost<=100 ){
    console.log(marco.name + " NON è un ambassador, inoltre pagherà i costi di spedizione. Il totale è: " + (totalCost + shippingCost));
}else if ((!marco.isAmbassador) && totalCost>100 ){
    console.log(marco.name + " NON è un ambassador ma si è garantito la spedizione gratuita in quanto ha speso più di cento euro pagando:" + totalCost);
}

//  PAUL

if (paul.isAmbassador && totalCost>100) {
    costoDelCarrello = totalCost * 0.7;
     console.log(paul.name + " è un ambassador e ha il diritto ad uno sconto del 30%! Inoltre non pagherà i costi di spedizione in quanto ha speso più di 100 euro . Il totale è : " + costoDelCarrello);
 }else if(paul.isAmbassador && totalCost<=100){
     console.log(paul.name + "  è un ambassador e ha il diritto ad uno sconto del 30% ma PAGHERA'i costi di spedizione in quanto ha speso MENO di 100 euro . Il totale è : " + (costoDelCarrello + shippingCost));
 }else if((!paul.isAmbassador) && totalCost<=100 ){
     console.log(paul.name + "  NON è un ambassador, inoltre pagherà i costi di spedizione. Il totale è: " + (totalCost + shippingCost));
 }else if ((!paul.isAmbassador) && totalCost>100 ){
     console.log(paul.name + " NON è un ambassador ma si è garantito la spedizione gratuita in quanto ha speso più di cento euro pagando:" + totalCost);
 }

 // aMY

 if (amy.isAmbassador && totalCost>100) {
    costoDelCarrello = totalCost * 0.7;
     console.log(amy.name + " è un ambassador e ha il diritto ad uno sconto del 30%! Inoltre non pagherà i costi di spedizione in quanto ha speso più di 100 euro . Il totale è : " + costoDelCarrello);
 }else if(amy.isAmbassador && totalCost<=100){
     console.log(amy.name + " è un ambassador e ha il diritto ad uno sconto del 30% ma PAGHERA'i costi di spedizione in quanto ha speso MENO di 100 euro . Il totale è : " + (costoDelCarrello + shippingCost));
 }else if((!amy.isAmbassador) && totalCost<=100 ){
     console.log(amy.name + " NON è un ambassador, inoltre pagherà i costi di spedizione. Il totale è: " + (totalCost + shippingCost));
 }else if ((!amy.isAmbassador) && totalCost>100 ){
     console.log(amy.name + " NON è un ambassador ma si è garantito la spedizione gratuita in quanto ha speso più di cento euro pagando:" + totalCost);
 }
 */
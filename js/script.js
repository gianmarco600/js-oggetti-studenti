// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
// Creare un array di oggetti di studenti.
// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

document.getElementById('add').addEventListener('click' , addStud);
document.getElementById('print').addEventListener('click' , print);

var studente = {
    nome : 'mario',
    cognome : 'rossi',
    eta : 20
}

for( k in studente){
    document.getElementById('output').innerHTML += studente[k] + '<br>';
}

var arrStud = [];

// l' array di oggetti studente è inizializzata vuota e viene popolata dall'utente aggiungendo studenti

function addStud(){
    var nome = prompt('inserisci il nome dello studente che vuoi aggiungere');
    var cognome = prompt('inserisci il cognome dello studente che vuoi aggiungere');
    var age = prompt("inserisci l'età dello studente che vuoi aggiungere");
    var nuovoStud = {
        nome : nome,
        cognome : cognome,
        eta : age
    }
    arrStud.push(nuovoStud);
    console.log(arrStud);
}

function print(){
    for (var i = 0; i < arrStud.length; i++){
        document.getElementById('output2').innerHTML += '<li> nome: ' + arrStud[i].nome + '  |  ' + 'cognome: ' + arrStud[i].cognome + '</li>' ;
    }
}
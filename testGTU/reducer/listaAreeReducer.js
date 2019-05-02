let listaAree = require('./listaAree.json');

// solo per visualizzazione, per vedere come fare una arrow function che restituisce un arrow function
customReducerTipiTurnoCallback_programmato = (customIndex) => (acc, curr) => {
    if (curr.tipiTurni.length != 0) {
        return acc + (curr.tipiTurni[customIndex].quantita || { programmato: 0 }).programmato;
    }
    else return 0;
};

listaAree.forEach(area => {

    console.log('------ ', area.nome);

    // Tipo 1
    let programmato = area.stazioni.reduce(customReducer, 0);

    let assegnato = area.stazioni.reduce((acc, curr) => {
        if (curr.tipiTurni.length != 0) {
            return acc + (curr.tipiTurni[0].quantita || { assegnato: 0 }).assegnato;
        }
        else return 0;
    }, 0);
    
    console.log('1 - ', assegnato - programmato);



    // Tipo 2   
    programmato = area.stazioni.reduce((acc, curr) => {
        // console.log('current', curr);
        if (curr.tipiTurni.length != 0) {
            return acc + (curr.tipiTurni[1].quantita || { programmato: 0 }).programmato;
        }
        else return 0;
    }, 0);

    assegnato = area.stazioni.reduce((acc, curr) => {
        if (curr.tipiTurni.length != 0) {
            return acc + (curr.tipiTurni[1].quantita || { assegnato: 0 }).assegnato;
        }
        else return 0;
    }, 0);

    console.log('2 - ', assegnato - programmato);




    // Tipo 3
    programmato = area.stazioni.reduce((acc, curr) => {
        // console.log('current', curr);
        if (curr.tipiTurni.length != 0) {
            return acc + (curr.tipiTurni[2].quantita || { programmato: 0 }).programmato;
        }
        else return 0;
    }, 0);

    assegnato = area.stazioni.reduce((acc, curr) => {
        if (curr.tipiTurni.length != 0) {
            return acc + (curr.tipiTurni[2].quantita || { assegnato: 0 }).assegnato;
        }
        else return 0;
    }, 0);

    console.log('3 - ', assegnato - programmato);




    // Tipo S
    programmato = area.stazioni.reduce((acc, curr) => {
        // console.log('current', curr);
        if (curr.tipiTurni.length != 0) {
            return acc + (curr.tipiTurni[3].quantita || { programmato: 0 }).programmato;
        }
        else return 0;
    }, 0);

    assegnato = area.stazioni.reduce((acc, curr) => {
        if (curr.tipiTurni.length != 0) {
            return acc + (curr.tipiTurni[3].quantita || { assegnato: 0 }).assegnato;
        }
        else return 0;
    }, 0);

    console.log('S - ', assegnato - programmato);



    // Tipo P
    programmato = area.stazioni.reduce((acc, curr) => {
        // console.log('current', curr);
        if (curr.tipiTurni.length != 0) {
            return acc + (curr.tipiTurni[4].quantita || { programmato: 0 }).programmato;
        }
        else return 0;
    }, 0);

    assegnato = area.stazioni.reduce((acc, curr) => {
        if (curr.tipiTurni.length != 0) {
            return acc + (curr.tipiTurni[4].quantita || { assegnato: 0 }).assegnato;
        }
        else return 0;
    }, 0);

    console.log('P - ', assegnato - programmato);
});
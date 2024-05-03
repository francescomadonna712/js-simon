
const numeriStampati = document. getElementById ('numeri');

const countDown = document. getElementById ('Timer')

//array numeri creati e numeri inseriti da utente

const numeriCasuali = []

const numeriUtente = []

//ciclo per numeri random

for (let i = 0; i < 6; i++) {
    const numeroRandom = Math.floor((Math.random() * 99) + 1)
        
    //controllo che il numero non si ripeta
    if (!numeriCasuali.includes(numeroRandom)) {
        numeriCasuali.push(numeroRandom)
    } else {
        i--;
    }
}
numeriStampati.innerHTML = numeriCasuali


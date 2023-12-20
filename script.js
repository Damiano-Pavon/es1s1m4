//es1
const controllaNumeri = function (n1, n2) {
  if (n1 === 50 || n2 === 50 || n1 + n2 === 50) {
    console.log("true");
  }
};
controllaNumeri(25, 24);
//es2
let rimuoviCarattere = function (stringa, posizione) {
  let nuovaStringa = "";
  for (let i = 0; i < stringa.length; i++) {
    if (i !== posizione) {
      nuovaStringa += stringa[i];
    }
  }
  return nuovaStringa;
};

let stringaOriginale = "Complimenti";
let posizioneDaRimuovere = 6;
let nuovaStringa = rimuoviCarattere(stringaOriginale, posizioneDaRimuovere);

console.log(nuovaStringa);

//es3
const numeriCompresi = function (n1, n2) {
  if (
    (n1 >= 40 && n1 <= 60) ||
    (n1 >= 70 && n1 <= 100) ||
    (n2 >= 40 && n2 <= 60) ||
    (n2 >= 70 && n2 <= 100)
  ) {
    console.log("true");
  } else {
    console.log("false");
  }
};
numeriCompresi(20, 60);
//es4
let verificaCittà = function (nomeCittà) {
  if (nomeCittà.startsWith("Los") || nomeCittà.startsWith("New")) {
    return nomeCittà;
  } else {
    return false;
  }
};

console.log(verificaCittà("Los Angeles"));
//es5
let array = [1, 3, 5, 8];
let sommaEl = function (array) {
  let somma = 0;
  for (let i = 0; i < array.length; i++) {
    somma += array[i];
  }
  return somma;
};
console.log(sommaEl(array));
//es6
let mioArray = [10, 8, 2, 5];
let controllaArray = function () {
  for (let i = 0; i < mioArray.length; i++) {
    if (mioArray[i] === 1 || mioArray[i] === 3) {
      return false;
    } else {
      return true;
    }
  }
};
console.log(controllaArray());
//es7
let tipo = function (gradi) {
  if (gradi < 90) {
    return "acuto";
  } else if ((gradi > 90) & (gradi < 180)) {
    return "ottuso";
  } else if (gradi === 180) {
    return "piatto";
  } else if (gradi === 90) {
    return "retto";
  }
};
console.log(tipo(90));
//es8
let creaUnAcronimo = function (stringa) {
  let parole = stringa.split(" ");
  let acronimo = "";
  for (let i = 0; i < parole.length; i++) {
    acronimo += parole[i][0].toUpperCase();
  }
  return acronimo;
};
console.log(creaUnAcronimo("Fabbrica Italiana Automobilistica Torino"));

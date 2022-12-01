'use strict';

//selektori
const display = document.querySelector('.display');
const broj = document.querySelectorAll('.broj');
const tocka = document.querySelector('#tocka');
const operatori = document.querySelectorAll('.operator');

let userTyping = false;

//računske operacije - BASIC
let odabranaOperacija;

//ZBRAJANJE

const zbroj = function (broj1, broj2) {
  return broj1 + broj2;
};

const minus = function (broj1, broj2) {
  broj1 = prviBroj;
  broj2 = noviBroj;
  return broj1 - broj2;
};
const množ = function (broj1, broj2) {
  broj1 = prviBroj;
  broj2 = noviBroj;
  return broj1 * broj2;
};
const dijeljenje = function (broj1, broj2) {
  broj1 = prviBroj;
  broj2 = noviBroj;
  return broj1 / broj2;
};
let accum;
let total;
let temporary;

const operate = function (operator, broj1, broj2) {
  if (!operator) return;

  switch (operator.toLowerCase()) {
    case '+':
      temporary = broj1 + broj2;
      break;
    case '-':
      temporary = broj1 - broj2;
      break;
    case 'x':
    case '*':
      temporary = broj1 * broj2;

      break;
    case '/':
      temporary = broj1 / broj2;
      break;
  }
  return temporary;
};

const racunaj = function (operator, num1, num2) {
  switch (operator) {
    case '+':
      total = num1 + num2;
      break;
    case '-':
      total = num1 - num2;
      break;
    case 'x':
    case '*':
      total = num1 * num2;

      break;
    case '/':
      total = num1 / num2;
      break;
  }
  return total;
};

// racunaj(odabranaOperacija, prviBroj, noviBroj);

// operate(odabranaOperacija);

let prviBroj = '';
let noviBroj = '';
let stisnutoJednako = false;
// operate = function (operator) {};

//pohrana unesenih brojeva u array
let uneseniBrojevi = [];
let spojeniBrojevi = '';

const concatNum = function () {
  if ((userTyping = true)) {
    spojeniBrojevi = uneseniBrojevi.join('');
  }
};

//pritisak broja registrira broj na displayu
broj.forEach((num) => {
  num.addEventListener('click', function () {
    uneseniBrojevi.push(num.id);
    userTyping = true;
    concatNum();
    display.textContent = spojeniBrojevi;
    noviBroj = Number(spojeniBrojevi);
  });
});

tocka.addEventListener('click', function () {
  if (!uneseniBrojevi.includes('.')) uneseniBrojevi.push(tocka.textContent);
});

// if ((userTyping = false)) {
//   spojeniBrojevi = '';
// }

// if ((waitingforequal = true)) {
//   prviBroj = racunaj(odabranaOperacija, prviBroj, noviBroj);
// }

//PRITISAK NA NEKU RAČUNSKU OPERACIJU
operatori.forEach((funkcija) => {
  funkcija.addEventListener('click', function () {
    // let chain;
    //PREPOZNAJE KOJA JE OPERACIJA ODABRANA I SPREMA U VARIJABLU
    // if (typeof prviBroj === 'number' && typeof noviBroj === 'number') {
    //   chain = operate(odabranaOperacija, noviBroj, prviBroj);
    //   // return chain;
    // }
    userTyping = false;
    //BRIŠE TRENUTNI BROJ I BRIŠE DISPLAY

    //AKO JE PRVI BROJ PRAZAN; POČETAK --> spremi unesene brojeve kao prviBroj
    if (prviBroj === '') {
      odabranaOperacija = funkcija.id;
      prviBroj = Number(noviBroj);
      resetBrojeva();
    }

    //KADA STISNEM JEDNAKO I DOBIJEM BROJ I ONDA ODMAH IDEM NOVU OPERACIJU
    if (prviBroj !== '' && noviBroj === '') {
      odabranaOperacija = funkcija.id;
    }
    //

    //AKO IMA VEĆ PRVI BROJ --> ODRADI OPERACIJU S PRVIM BROJEM I UNESENIM
    else if (prviBroj !== '') {
      total = operate(odabranaOperacija, prviBroj, noviBroj);
      odabranaOperacija = funkcija.id;
      console.log(total);
      prviBroj = Number(total);
      resetBrojeva();
    }

    // prviBroj = +noviBroj;
    // spojeniBrojevi = '';
    // noviBroj = '';
    // waitingforequal = true;

    // noviBroj = 0;
  });
});

const resetBrojeva = function () {
  noviBroj = '';
  uneseniBrojevi.length = 0;
  spojeniBrojevi = '';
  display.textContent = '';
};

console.log(prviBroj, noviBroj);

// KADA ŽELIM KONAČNI RAČUN

document.querySelector('.jednako').addEventListener('click', function () {
  console.log(uneseniBrojevi);
  userTyping = false;
  stisnutoJednako = true;
  // display.textContent = `=${spojeniBrojevi}`;
  let final = racunaj(odabranaOperacija, prviBroj, noviBroj);
  // console.log(final);
  display.textContent = `=${+final.toFixed(9)}`;
  prviBroj = Number(final);
  noviBroj = '';
  uneseniBrojevi.length = 0;
  spojeniBrojevi = '';
});

//ČIŠĆENJE VRIJEDNOSTI
document.querySelector('.clear').addEventListener('click', function () {
  resetBrojeva();
  prviBroj = '';
  odabranaOperacija = '';
});

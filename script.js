'use strict';

//selektori
const display = document.querySelector('.display');
const broj = document.querySelectorAll('.broj');
const tocka = document.querySelector('#tocka');
const operatori = document.querySelectorAll('.operator');
const plusminus = document.querySelector('#plusminus');

let userTyping = false;

//računske operacije - BASIC
let odabranaOperacija;

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

//PRITISAK NA NEKU RAČUNSKU OPERACIJU
operatori.forEach((funkcija) => {
  funkcija.addEventListener('click', function () {
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

plusminus.addEventListener('click', function () {
  if (uneseniBrojevi.length === 0) uneseniBrojevi.push('-');
});

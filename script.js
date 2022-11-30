'use strict';

//selektori
const display = document.querySelector('.display');
const broj = document.querySelectorAll('.broj');
const tocka = document.querySelector('#tocka');
let userTyping = false;

//računske operacije - BASIC
let odabranaOperacija;

//ZBRAJANJE

const zbroj = function (broj1, broj2) {
  broj1 = prviBroj;
  broj2 = noviBroj;
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
  debugger;
  broj1 = prviBroj;
  broj2 = noviBroj;
  return broj1 / broj2;
};
let accum;
let total;
const operate = function (operator) {
  if (!operator) return;

  switch (operator.toLowerCase()) {
    case '+':
      // console.log(zbroj());
      total = zbroj();
      // return ;      break;
      break;
    case '-':
      total = minus();
      break;
    case 'x':
    case '*':
      total = množ();

      break;
    case '/':
      total = dijeljenje();
      break;
  }
  return total;
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
  waitingforequal = false;
  return total;
};

// racunaj(odabranaOperacija, prviBroj, noviBroj);

// operate(odabranaOperacija);

let prviBroj;
let noviBroj;
let waitingforequal = false;
// operate = function (operator) {};

//pritisak broja registrira broj na displayu
broj.forEach((num) => {
  num.addEventListener('click', function () {
    // display.textContent = num.id;
    uneseniBrojevi.push(num.id);
    // prviBroj = num.textContent;
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

//pohrana unesenih brojeva u array
let uneseniBrojevi = [];
let spojeniBrojevi = '';

document.querySelector('.jednako').addEventListener('click', function () {
  console.log(uneseniBrojevi);
  userTyping = false;
  uneseniBrojevi.length = 0;
  // display.textContent = `=${spojeniBrojevi}`;
  let final = racunaj(odabranaOperacija, prviBroj, noviBroj);
  // console.log(final);
  display.textContent = `=${+final.toFixed(3)}`;
  prviBroj = final;
  // resetBrojeva();
});

// if ((waitingforequal = true)) {
//   prviBroj = racunaj(odabranaOperacija, prviBroj, noviBroj);
// }
const operatori = document.querySelectorAll('.operator');
operatori.forEach((funkcija) => {
  funkcija.addEventListener('click', function () {
    odabranaOperacija = funkcija.id;
    userTyping = false;
    uneseniBrojevi.length = 0;
    // spojeniBrojevi = '';
    prviBroj = Number(display.textContent);
    display.textContent = '';
    waitingforequal = true;
    // noviBroj = 0;
  });
});

const resetBrojeva = function () {
  prviBroj = 0;
  noviBroj = 0;
  uneseniBrojevi.length = 0;
};

//očisti array kada stisnem C
document.querySelector('.clear').addEventListener('click', function () {
  uneseniBrojevi.length = 0;
  spojeniBrojevi = '';
  display.textContent = '';
  noviBroj = 0;
});

const concatNum = function () {
  if ((userTyping = true)) {
    spojeniBrojevi = uneseniBrojevi.join('');
  }
};
console.log(prviBroj, noviBroj);

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

// operate(odabranaOperacija);

let prviBroj;
let noviBroj;

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
  uneseniBrojevi.push(tocka.textContent);
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
  let final = operate(odabranaOperacija);
  console.log(final);
  display.textContent = `=${final}`;
  // resetBrojeva();
});

const operatori = document.querySelectorAll('.operator');
operatori.forEach((funkcija) => {
  funkcija.addEventListener('click', function () {
    odabranaOperacija = funkcija.id;
    userTyping = false;
    uneseniBrojevi.length = 0;
    // spojeniBrojevi = '';
    display.textContent = '';
    prviBroj = Number(spojeniBrojevi);
    noviBroj = 0;
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

console.log(spojeniBrojevi);

document.querySelector('.minus').addEventListener('click', function () {
  // let total = minus();
  // display.textContent = total;
  spojeniBrojevi = '';
});

'use strict';

//selektori
const display = document.querySelector('.display');
const broj = document.querySelectorAll('.broj');
let userTyping = false;

//računske operacije - BASIC

//ZBRAJANJE

const zbroj = function (broj1, broj2) {
  broj1 = +prompt('Insert number').replace(',', '.');
  broj2 = +prompt('Insert number').replace(',', '.');
  return broj1 + broj2;
};

// const minus = function (broj1, broj2) {
//   broj1 = +prompt('Insert number').replace(',', '.');
//   broj2 = +prompt('Insert number').replace(',', '.');
//   return broj1 - broj2;
// };

const minus = function (broj1, broj2) {
  broj1 = spojeniBrojevi;
  broj2 = 2;
  return broj1 - broj2;
};
const množ = function (broj1, broj2) {
  broj1 = +prompt('Insert number').replace(',', '.');
  broj2 = +prompt('Insert number').replace(',', '.');
  return broj1 * broj2;
};
const dijeljenje = function (broj1, broj2) {
  broj1 = +prompt('Insert number').replace(',', '.');
  broj2 = +prompt('Insert number').replace(',', '.');
  return broj1 / broj2;
};

const operate = function (operator) {
  operator = prompt('Which operator');
  if (!operator) return;

  switch (operator.toLowerCase()) {
    case '+':
      // console.log(zbroj());
      display.textContent = zbroj();
      break;
    case '-':
      display.textContent = minus();
      break;
    case 'x':
    case '*':
      display.textContent = množ();

      break;
    case '/':
      display.textContent = dijeljenje();
      break;
  }
};

//pritisak broja registrira broj na displayu
broj.forEach((num) => {
  num.addEventListener('click', function () {
    // display.textContent = num.id;
    uneseniBrojevi.push(num.id);
    userTyping = true;
    concatNum();
    display.textContent = spojeniBrojevi;
  });
});

// if ((userTyping = false)) {
//   spojeniBrojevi = '';
// }

//pohrana unesenih brojeva u array
const uneseniBrojevi = [];
const odabranaOperacija = [];
let spojeniBrojevi = '';

document.querySelector('.jednako').addEventListener('click', function () {
  console.log(uneseniBrojevi);
  userTyping = false;
  uneseniBrojevi.length = 0;
  // display.textContent = `=${spojeniBrojevi}`;
  let total = minus();
  display.textContent = `=${total}`;
});

const operatori = document.querySelectorAll('.operator');
operatori.forEach((funkcija) => {
  funkcija.addEventListener('click', function () {
    odabranaOperacija.push(funkcija.id);
    userTyping = false;
    uneseniBrojevi.length = 0;
    // spojeniBrojevi = '';
    display.textContent = '';
  });
});

//očisti array kada stisnem C
document.querySelector('.clear').addEventListener('click', function () {
  uneseniBrojevi.length = 0;
  spojeniBrojevi = '';
  display.textContent = '';
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

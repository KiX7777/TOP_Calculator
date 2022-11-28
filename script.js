'use strict';

//računske operacije - BASIC

//ZBRAJANJE

const zbroj = function (broj1, broj2) {
  broj1 = +prompt('Insert number');
  broj2 = +prompt('Insert number');
  return broj1 + broj2;
};

const minus = function (broj1, broj2) {
  broj1 = +prompt('Insert number');
  broj2 = +prompt('Insert number');
  return broj1 - broj2;
};
const množ = function (broj1, broj2) {
  broj1 = +prompt('Insert number');
  broj2 = +prompt('Insert number');
  return broj1 * broj2;
};
const dijeljenje = function (broj1, broj2) {
  broj1 = +prompt('Insert number');
  broj2 = +prompt('Insert number');
  return broj1 / broj2;
};

const operate = function (operator) {
  operator = prompt('Which operator');
  if (!operator) return;

  switch (operator.toLowerCase()) {
    case '+':
      console.log(zbroj());
      break;
    case '-':
      console.log(minus());
      break;
    case 'x':
    case '*':
      console.log(množ());
      break;
    case '/':
      console.log(dijeljenje());
      break;
  }
};

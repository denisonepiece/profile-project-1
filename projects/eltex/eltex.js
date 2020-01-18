'use strict';

const REG = getReg();

//task 1
const strLenght = prompt('Введите длину строки:');
let task1 = getRandStr(strLenght);
console.log(task1);
//task 2
const symb = prompt('Введите любой символ:');
let task2 = replaceLettersToSymb(task1, symb);
console.log(task2);
//task 3
const symb2 = prompt('Введите любой символ:');
let task3 = replaceNumbersToSymb(task2, symb2);
console.log(task3);
//task 4
console.log(howSymbols(task3, symb2));

function howSymbols(str, symb2) {
  let countA = 0;

  for(let i = 0; i < str.length; i++) {
    if(str[i] == symb2) {
      countA++;
    }
  }

  let countB = strLenght - countA;

  return [countA, countB];
}

function replaceNumbersToSymb(str, symb) {
  let strCopy = '';

  for( let i = 0; i < str.length; i++) {
    if(str[i] <= '9' && str[i] >= '0') {
      strCopy += symb;
    } else {
      strCopy += str[i];
    }
  }

  return strCopy;
}

function replaceLettersToSymb(str, symb) {
  let strCopy = '';

  for( let i = 0; i < str.length; i++) {
    if(str[i] >= 'A') {
      strCopy += symb;
    } else {
      strCopy += str[i];
    }
  }

  return strCopy;
}

function getRandStr(lenght) {
  let randStr = '';

  for (let i = 0; i < strLenght; i++) {
    randStr += getRandomFromStr(REG,strLenght);
  }

  return randStr;
}

function getReg() {
  let reg = '';

  for (let i = 65; i <= 90; i++) {
    reg += String.fromCharCode(i);
  }

  for (let i = 0; i < 10; i++) {
    reg += i;
  }

  return reg;
}

function randomInt(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

function getRandomFromStr(str) {
  return str[randomInt(0, str.length - 1)];
}

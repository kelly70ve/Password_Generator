// DOM elements

var randomFunc = {
  lower: getRandomLower,
  upper: getRandomSymbol,
  number: getRandomNumber,
  symbol: getRandomSymbol
};

// Generator Functions

// LOWERCASE
function getRandomLower() {
  // fromCharCode lowercase letters are from 97 - 122
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

// UPPERCASE
function getRandomUpper() {
  // fromCharCode uppercase letters are from 65 - 90
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

// NUMBERS
function getRandomNumber() {
  // fromCharCode numbers are from 48 - 57
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

// SYMBOL
function getRandomSymbol() {
  var symbols = "!@#$%^&*(){}[]=<>/'.";
  return symbols[Math.floor(Math.random() * symbols.length)];
}

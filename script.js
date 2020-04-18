// # DOM elements
var resultEl = document.getElementById('result');
var lengthEl = document.getElementById('length');
var uppercaseEl = document.getElementById('uppercase');
var lowercaseEl = document.getElementById('lowercase');
var numbersEl = document.getElementById('numbers');
var symbolsEl = document.getElementById('symbols');
var generateEl = document.getElementById('generate');
var clipboardEl = document.getElementById('clipboard');


var randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
};

// # Generate Event Listen

generateEl.addEventListener('click', function() {
  var length = +lengthEl.value; // this gets the value from the element "length" and returns a string - need the "+" urnary operator to return a number
  var hasLower = lowercaseEl.checked; // this checks if they're checked or not
  var hasUpper = uppercaseEl.checked;
  var hasNumber = numbersEl.checked;
  var hasSymbol = symbolsEl.checked;
  
  resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
});

// # Generate Password Function
function generatePassword(lower, upper, number, symbol, length) {
  // 1. Init pw variable
  // 2. Filter out unchecked types
  // 3. Loop over length call generator function for each type
  // 4. Add final pw to the pw var and return

  var generatePassword = "";

  var typesCount = upper + lower + number + symbol;

  console.log("typesCount: ", typesCount);

  const typesArr = [{ upper }, { lower }, { number }, { symbol }].filter (item function() {
    Object.values(item)[0]
  });// putting curly braces turns it into an object

  console.log("typesArr: ", typesArr);
}


// # Generator Functions

// ## Lowercase 
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97); // fromCharCode lowercase letters are from 97 - 122
}

// ## Uppercase
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65); // fromCharCode uppercase letters are from 65 - 90
}

// ## Numbers
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48); // fromCharCode numbers are from 48 - 57
}

// ## Symbol
function getRandomSymbol() {
  var symbols = "!@#$%^&*(){}[]=<>/'.";
  return symbols[Math.floor(Math.random() * symbols.length)];
}

//Dom Elements
const resultEl = document.getElementById("result");
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolEl = document.getElementById("symbol");
const generateEl = document.getElementById("generate");
const clipboardEl = document.getElementById("clipboard");

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};

//Generate event listen
generateEl.addEventListener("click", generatePassword);

generateEl.addEventListener("click", () => {
  const length = +lengthEl.ariaValueMax;
  const hasLower = lowercaseEl.checked;
  const hasUpper = uppercaseEl.checked;
  const hasNumber = numbersEl.checked;
  const hasSymbol = symbolEl.checked;

  resultEl.innerText = genratePassword(
    hasLower,
    hasUpper,
    hasNumber,
    hasSymbol,
    length
  );
});

//Generate password function
function generatePassword(lower, upper, number, symbol, length) {
  //1. init password variable
  //2. Filter out unchecked types
  //3. Loop over length call generator function for each type
  //4. Add final password to password variable and return

  let generatedPassword = "";

  const typesCount = lower + upper + number + symbol;

  //console.log('typesCount: ', typesCount);

  const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(
    (item) => Object.values(item)[0]
  );

  //console.log('typesArr: ', typesArr);

  if (typesCount === 0) {
    return "";
  }

  for (let i = 0; i < length; i += typesCount) {
    typesArr.forEeach((type) => {
      const funcName = Object.keys(type)[0];

      // console.log('funcName: ', funcName);

      generatedPassword += randomFunc[funcName]();
    });
  }

  const finalPassword = generatedPassword.slice(0, length);

  return finalPassword;
}
// Generator Functions

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  const symbol = "!@#$%^&*(){}[]=>?/,.";
  return symbol[Math.floor(Math.random() * symbols.length)];
}

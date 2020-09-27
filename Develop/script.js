// Arrays for Number variables
let num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// Arrays for character variables
let char = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  ",",
  "-",
  "=",
  "+",
  "[",
  "]",
  "{",
  "}",
  ";",
  ":",
  "'",
  "/",
  "?",
  "<",
  ">",
  ".",
  "|",
];
// array for Uppercase Variables
let upperAlpha = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
// Arrays for lowerCase Variables
let lowerAlpha = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Create a password Options function that asks user for password option / inputs
function pwdOptions() {
  // how long do you want the password to be? between 8 an 128 characters
  var length = Number(
    prompt(
      "Please enter how many characters you want your password to contain. Between 8 and 128."
    )
  );
  // if the password is not within the parameters, send the following errors
  if (length < 8) {
    alert("Please enter a number greater than 8.");
  } else if (length > 128) {
    alert("Please enter a number less than 128.");
  } else {
    ("");
  }

  // Variables for user's input
  var chooseNumbers = confirm("Will this contain numbers?");
  var chooseCharacters = confirm("Will this contain special characters?");
  var chooseUppercase = confirm("Will this contain uppercase letters?");
  var chooseLowercase = confirm("Will this contain lowercase letters?");

  // if the user does not choose any option, show an error message / must choose options prompt
  if (
    !chooseNumbers &&
    !chooseCharacters &&
    !chooseUppercase &&
    !chooseLowercase
  ) {
    alert(
      "Your must select at least one character, number or symbol to generate password."
    );
    return;
  }

  // Create a password input object with different variables to pull from.
  var pwdInputs = {
    length: length,
    specChar: chooseCharacters,
    numeric: chooseNumbers,
    lowercase: chooseLowercase,
    uppercase: chooseUppercase,
  };

  // return the password inputs
  return pwdInputs;
}

// generate password function
function generatePassword() {
  //variable for the password options

  var options = pwdOptions();
  console.log(options);

  //placeholder for the password depending on users choice/variables
  var passwordPlaceHolder = [];
  console.log(passwordPlaceHolder);

  // if and for loops for the different user inputs.
  if (options.specChar) {
    // if user chooses special characters, add special characters within the bounds of the character amount.
    for (i = 0; i < char.length; i++) {
      passwordPlaceHolder.push(char[i]);
    }
  }

  if (options.numeric) {
    // if user chooses numbers, add numbers within the bounds of the character amount.
    for (i = 0; i < num.length; i++) {
      passwordPlaceHolder.push(num[i]);
    }
  }

  if (options.lowerAlpha) {
    // if user chooses lowercase, add lowercase letters within the bounds of the character amount.
    for (i = 0; i < lowerAlpha.length; i++) {
      passwordPlaceHolder.push(lowerAlpha[i]);
    }
  }

  if (options.upperAlpha) {
    // if user chooses uppercase letters, add uppercase letters within the bounds of the character amount.
    for (i = 0; i < upperAlpha.length; i++) {
      passwordPlaceHolder.push(upperAlpha[i]);
    }
  }
  // create a variable for a the finished password array
  var finishedPwd = [];

  // for loop to specify length of the password
  for (let i = 0; i < options.length; i++) {
    var randVar = Math.floor(
      Math.random() * Math.floor(passwordPlaceHolder.length)
    );
    // once the length of the password is specified, push the length and random variables to create the password and console log the finished pwd
    finishedPwd.push(passwordPlaceHolder[randVar]);
  }

  console.log(finishedPwd);

  // updated password joins all password variables and creates a string
  var updatedPwd = finishedPwd.join("");
  console.log(updatedPwd);
}
// password variable for print to text input
var password = "";

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

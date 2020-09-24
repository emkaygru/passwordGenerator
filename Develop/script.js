// Variables for user's input 

var chooseNumbers;
var chooseCharacters;
var chooseLowercase;
var chooseUppercase;

// Array lowerCase, upperCase, numbers and symbols-special characters

let num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let char = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", ",", "-", "=", "+", "[", "]", "{", "}", ";".
  ":", "'", "/", "?", "<", ">", ".", "|"
];
let upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Alert if user does not select any options
if (!enter) {
  alert("You must make a few selection in order to generate a password.");
  // Alert if user enters a number less than 8 or more than 128
} else if (num <= 8 || num >= 128) {
  alert("You must enter a number between 8 and 128.");
  // Confirmation of characters, letters and numbers
} else {
  chooseNumbers = confirm("Will this contain uppercase letters?");
  chooseCharacters = confirm("Will this contain special characters?");
  chooseUppercase = confirm("Will this contain uppercase letters?");
  chooseLowercase = confirm("Will this contain lowercase letters?");
};
// creates a variable for the user's choice/input
let numChoice = num[Math.floor(Math.random() * num.length - 1)];
let charChoice = char[Math.floor(Math.random() * char.length - 1)];
let upperChoice = upperCase[Math.floor(Math.random() * upperCase.length - 1)];
let lowerChoice = lowerCase[Math.floor(Math.random() * lowerCase.length - 1)];


if (chooseUppercase === true && chooseLowercase === true && chooseCharacters === true && chooseNumbers === true) {

  fourChoice = chooseUppercase.concat(chooseLowercase, chooseCharacters, chooseNumbers);
} else if (chooseUppercase === true && chooseLowercase === true && chooseCharacters === true && chooseNumbers != true) {

  fourPosChoice = chooseUppercase.concat(chooseLowercase, chooseCharacters);
}
















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
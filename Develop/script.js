// Array lowerCase, upperCase, numbers and symbols-special characters

let num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let char = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", ",", "-", "=", "+", "[", "]", "{", "}", ";",
  ":", "'", "/", "?", "<", ">", ".", "|"
];
let upperAlpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let lowerAlpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


var choices;

function pwdOptions() {


  var length = Number(prompt("Please enter how many characters you want your password to contain. Between 8 and 128."));

  if (length < 8) {
    alert("Please enter a number greater than 8.");
  } else if (length > 128) {
    alert("Please enter a number less than 128.");
  } else {
    alert("You must enter a value");
  };

  // Variables for user's input 
  var chooseNumbers = confirm("Will this contain numbers?");
  var chooseCharacters = confirm("Will this contain special characters?");
  var chooseUppercase = confirm("Will this contain uppercase letters?");
  var chooseLowercase = confirm("Will this contain lowercase letters?");

  if (!chooseNumbers && !chooseCharacters && !chooseUppercase && !chooseLowercase) {
    alert("Your must select at least one character, number or symbol to generate password.");
    return;
  }

  var pwdInputs = {
    length: length,
    specChar: chooseCharacters,
    numeric: chooseNumbers,
    lowercase: chooseLowercase,
    uppercase: chooseUppercase,
  };

  return pwdInputs;
}

function generatePassword() {

  var options = pwdOptions();
  console.log(options);

  var passwordPlaceHolder = [];
  console.log(PasswordPlaceHolder);

  if (options.specChar) {
    for (i = 0; i < char.length; i++) {
      passwordPlaceHolder.push(char[i]);
    }
  }

  if (options.numeric) {
    for (i = 0; i < num.length; i++) {
      passwordPlaceHolder.push(num[i]);
    }
  }

  if (options.lowerAlpha) {
    for (i = 0; i < lowerAlpha.length; i++) {
      passwordPlaceHolder.push(lowerAlpha[i]);
    }
  }

  if (options.upperAlpha) {
    for (i = 0; i < upperAlpha.length; i++) {
      passwordPlaceHolder.push(upperAlpha[i]);
    }
  }

  var finishedPwd = [];

  for (let i = 0; i < options.length; i++) {
    var randVar = Math.floor(Math.random() * Math.floor(passwordPlaceHolder.length));
    finishedPwd.push(passwordPlaceHolder[randVar]);
  }

  console.log(finishedPwd);

  var updatedPassword = finishedPwd.join('');
  console.log(updatedPassword);


};
var password = '';





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



// var password = {
//   characters: ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", ",", "-", "=", "+", "[", "]", "{", "}", ";".
//     ":", "'", "/", "?", "<", ">", ".", "|"
//   ],

//   uppercaseLetters: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],

//   lowercaseLetters: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],

//   numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// };
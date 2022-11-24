// Assignment Code
var generateBtn = document.querySelector("#generate");
// I put every easily available character I could find on the list provided without using escape characters.
var number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var alphaCap = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M'];
var alphaLow = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'];
var specChar = [' ', '!', '"', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '|', '{', '}', '~' ];

// Confirms and prompts for password generation

var confirmLength = "";
var confirmNumber;
var confirmAlphaCap;
var confirmAlphaLow;
var confirmSpecChar;
//When I click the buttone to generate a password I am presented with a series of prompts for password criteria
function generatePassword() {
  var confirmLength = prompt(
    "Please select a password length between 8 and 128 characters."
  );
  console.log(
    "You're about to get an awesome password that will definitely take longer than 5 minutes to brute force."
  );
  //WHEN prompted for the length of the pasword I choose a length of at least 8 characters and no more than 128 characters.
  while (confirmLength <= 7 || confirmLength >= 129) {
    alert("Please choose between 8 and 128 characters.");
    var confirmLength = prompt(
      "Please select a password length between 8 and 128 characters."
    );
  }
  //WHEN prompted for password criteria I select which criteria to include in the password
  var confirmNumber = confirm(
    "Select OK if you wish to use Numbers or Cancel if you do not."
  );
  var confirmAlphaCap = confirm(
    "Select OK if you wish to use Upper Case letters or Cancel if you do not."
  );
  var confirmAlphaLow = confirm(
    "Select OK if you wish to use Lower Case letters or Cancel if you do not."
  );
  var confirmSpecChar = confirm(
    "Select OK if you wish to use Special Characters or Cancel if you do not."
  );
  //WHEN asked for character types to include in the password I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
  while (
    confirmNumber === false &&
    confirmAlphaCap === false &&
    confirmAlphaLow === false &&
    confirmSpecChar === false
  ) {
    alert(
      "You must select at least one set of special characters to generate a password."
    );
    //WHEN I answer each prompt my input should be validated and at least one character type should be selected
    var confirmNumber = confirm(
      "Select OK if you wish to use Numbers or Cancel if you do not."
    );
    var confirmAlphaCap = confirm(
      "Select OK if you wish to use Upper Case letters or Cancel if you do not."
    );
    var confirmAlphaLow = confirm(
      "Select OK if you wish to use Lower Case letters or Cancel if you do not."
    );
    var confirmSpecChar = confirm(
      "Select OK if you wish to use Special Characters or Cancel if you do not."
    );
  }

  var passwordCharacters = [];

  if (confirmNumber) {
    passwordCharacters = passwordCharacters.concat(number);
  }
  if (confirmAlphaCap) {
    passwordCharacters = passwordCharacters.concat(alphaCap);
  }
  if (confirmAlphaLow) {
    passwordCharacters = passwordCharacters.concat(alphaLow);
  }
  if (confirmSpecChar) {
    passwordCharacters = passwordCharacters.concat(specChar);
  }
  console.log(passwordCharacters);
  // WHEN all prompts are answered a password is generated that matches the selected criteria
  var randomPassword = "";

  for (var i = 0; i < confirmLength; i++) {
    randomPassword =
      randomPassword +
      passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
    console.log(randomPassword);
  }
  return randomPassword;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  //WHEN the password is generated the password is either displayed in an alert or written to the page
}
generateBtn.addEventListener("click", writePassword);

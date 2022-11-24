// Assignment Code
var generateBtn = document.querySelector("#generate");
// I put every easily available character I could find on the list provided without using escape characters.
var number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var alphaCap = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M'];
var alphaLow = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'];
var specChar = [' ', '!', '"', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '|', '{', '}', '~' ];

// Confirms being set to variables for password generation.

var confirmLength = "";
var confirmNumber;
var confirmAlphaCap;
var confirmAlphaLow;
var confirmSpecChar;
//When I click the button to generate a password I am presented with a series of prompts for password criteria.
function generatePassword() {
  var confirmLength = prompt(
    "Please select a password length between 8 and 128 characters."
  );
  console.log(
    "You're about to get an awesome password that will definitely take longer than 5 minutes to brute force."
  );
  //WHEN prompted for the length of the password I choose a length of at least 8 characters and no more than 128 characters.
  while (confirmLength <= 7 || confirmLength >= 129) {
    alert("Please choose between 8 and 128 characters.");
    var confirmLength = prompt(
      "Please select a password length between 8 and 128 characters."
// If the criteria are not met, the prompt appears to let the user know.
    );
  }
  //WHEN prompted for password criteria I select which criteria to include in the password.
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
  //WHEN asked for character types to include in the password I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters.
  while (
    confirmNumber === false &&
    confirmAlphaCap === false &&
    confirmAlphaLow === false &&
    confirmSpecChar === false
  ) {
// If the criteria are not met, the prompt appears to let the user know.
    alert( 
      "You must select at least one set of special characters to generate a password."
    );
    //WHEN I answer each prompt my input should be validated and at least one character type should be selected.
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

  var passwordChar = [];
// This var set to passwordChar takes the confirm results from the user inputs and concatenates it to the string. If you check the console log you will see each character is created and then appended to the existing string. 
  if (confirmNumber) {
    passwordChar = passwordChar.concat(number);
  }
  if (confirmAlphaCap) {
    passwordChar = passwordChar.concat(alphaCap);
  }
  if (confirmAlphaLow) {
    passwordChar = passwordChar.concat(alphaLow);
  }
  if (confirmSpecChar) {
    passwordChar = passwordChar.concat(specChar);
  }
  console.log(passwordChar);
  // WHEN all prompts are answered a password is generated that matches the selected criteria.
  var randomPassword = "";
// This is the for loop that develops the final password using Math.floor and Math.random to randomly select values from the string equal to the length set by the user in the first set of prompts.
  for (var i = 0; i < confirmLength; i++) {
    randomPassword =
      randomPassword +
      passwordChar[Math.floor(Math.random() * passwordChar.length)];
    console.log(randomPassword);
  }
  return randomPassword;
}
// part of the provided code to the developer.
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  //WHEN the password is generated the password is either displayed in an alert or written to the page.
}
generateBtn.addEventListener("click", writePassword);

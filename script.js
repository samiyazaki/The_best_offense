// Assignment Code
var generateBtn = document.querySelector("#generate")

// I put every easily available character I could find on the list provided without using escape characters.
var number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var alphaCap = ['Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M'];
var alphaLow = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m'];
var specChar = [' ', '!', '"', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '|', '{', '}', '~' ];

// Confirms and prompts for password generation

var confirmLength = "";
var confirmNumber;
var confirmAlphaCap;
var confirmAlphaLow;
var confirmSpecChar;

function generatePassword() {
    var confirmLength = (prompt("Please select a password length between 8 and 128 characters."));
while(confirmLength <= 7 || confirmLength >= 129) {
    alert("Please choose between 8 and 128 characters.")
    var confirmLength = (prompt("Please select a password length between 8 and 128 characters."));
}
 
 var confirmNumber = confirm("Select OK if you wish to use Numbers or Cancel if you do not.");
 var confirmAlphaCap = confirm("Select OK if you wish to use Upper Case letters or Cancel if you do not.");
 var confirmAlphaLow = confirm("Select OK if you wish to use Lower Case letters or Cancel if you do not.");
 var confirmSpecChar = confirm("Select OK if you wish to use Special Characters or Cancel if you do not.");
    while(confirmNumber === false && confirmAlphaCap === false && confirmAlphaLow === false && confirmSpecChar === false) {
      alert("You must select at least one set of special characters to generate a password.");
      var confirmNumber = confirm("Select OK if you wish to use Numbers or Cancel if you do not.");
      var confirmAlphaCap = confirm("Select OK if you wish to use Upper Case letters or Cancel if you do not.");
      var confirmAlphaLow = confirm("Select OK if you wish to use Lower Case letters or Cancel if you do not.");
      var confirmSpecChar = confirm("Select OK if you wish to use Special Characters or Cancel if you do not."); 
    }

var passwordCharacters = []

if (confirmNumber) {
   passwordCharacters = passwordCharacters.concat(number) 
}
if (confirmAlphaCap) {
    passwordCharacters = passwordCharacters.concat(alphaCap) 
 }
 if (confirmAlphaLow) {
    passwordCharacters = passwordCharacters.concat(alphaLow) 
 }
 if (confirmSpecChar) {
    passwordCharacters = passwordCharacters.concat(specChar) 
 }
 console.log(passwordCharacters);

 var randomPassword = ""

 for (var i = 0; i < confirmLength; i++){
    randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
    console.log(randomPassword)
 }
 return randomPassword;
}
 
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  } 
  generateBtn.addEventListener("click", writePassword);
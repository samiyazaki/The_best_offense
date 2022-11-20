// Assignment Code
var generateBtn = document.querySelector("#generate").addEventListener("click", writePassword);

// I would love to figure out how to not write each variable separately, but here are all of the possible characters.
var number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var alphaCap = ['Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M'];
var alphaLow = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m'];
var specChar = ['!','@','#','$','%','^','&','*','(',')','_','-','+','=','<','>','?','.',','];

// Confirms and prompts for the poor schmuck who is trying to avoid getting their password brute forced.

var confirmLength = "";
var confirmNumber;
var confirmAlphaCap;
var confirmAlphaLow;
var confirmSpecChar;

function generatePassword() {
    var confirmLength = (prompt("Ey, bout how many characters you want in this bad mother trucker?"));
while(confirmLength <= 7 || confirmLength >= 56) {
    alert("Ey, this password is too long, or maybe it's too short I don't know, what do you want to do, fight about it?" + " Please choose between 8 and 55 characters")
    var confirmLength = (prompt("Ey, bout how many characters you want in this bad mother trucker?"));
}
}

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
  
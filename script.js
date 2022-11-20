// Assignment Code
var generateBtn = document.querySelector("#generate").addEventListener("click", writePassword);

// I would love to figure out how to not write each variable separately, but here are all of the possible characters.
var number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var alphaCap = ['Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M'];
var alphaLow = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m']:
var specChar = ['!','@','#','$','%','^','&','*','(',')','_','-','+','=','<','>','?','.',','];
// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
  
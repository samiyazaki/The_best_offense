// Assignment Code
var generateBtn = document.querySelector("#generate").addEventListener("click", writePassword);

// I would love to figure out how to not write each variable separately, but here are all of the possible characters.
var number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var alphaCap = ['Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M'];
var alphaLow = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m'];
var specChar = [' ', '!', '"', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '|', '{', '}', '~' ];

// Confirms and prompts for the poor schmuck who is trying to avoid getting their password brute forced.

var confirmLength = "";
var confirmNumber;
var confirmAlphaCap;
var confirmAlphaLow;
var confirmSpecChar;

function generatePassword() {
    var confirmLength = (prompt("Ey, bout how many characters you want in this bad mother trucker?"));
while(confirmLength <= 7 || confirmLength >= 129) {
    alert("Ey, this password is too long, or maybe it's too short I don't know, what do you want to do, fight about it?" + " Please choose between 8 and 128 characters")
    var confirmLength = (prompt("Ey, bout how many characters you want in this bad mother trucker?"));
}

 alert(`Yo, this password gonna be bout ${confirmLength} characters long`);
 
 var confirmNumber = confirm("Smash that OK button to confirm you want them digits or hit cancel if you're scared of numbers like I am.");
 var confirmAlphaCap = confirm("Smash that OK button to confirm you want CAPS LOCK to be lit or hit cancel if your 2nd grade teacher whacked you with a ruler for putting CAPS in the wrong spot.");
 var confirmAlphaLow = confirm("Smash that OK button to confirm you want all lower case letters or hit cancel if your 2nd grade teacher whacked you with a ruler for forgetting to capitalize words.");
 var confirmSpecChar = confirm("Smash that OK button to confirm you want special characters in the mix or hit cancel if you forget where to even find them.");
    while(confirmNumber === false && confirmAlphaCap === false && confirmAlphaLow === false && confirmSpecChar === false) {
      alert("Ayo! You need to pick at least one or your password will be weaker than King Joffrey's love for Sansa");
    var confirmNumber = confirm("Smash that OK button to confirm you want them digits or hit cancel if you're scared of numbers like I am.");
    var confirmAlphaCap = confirm("Smash that OK button to confirm you want CAPS LOCK to be lit or hit cancel if your 2nd grade teacher whacked you with a ruler for putting CAPS in the wrong spot.");
    var confirmAlphaLow = confirm("Smash that OK button to confirm you want all lower case letters or hit cancel if your 2nd grade teacher whacked you with a ruler for forgetting to capitalize words.");
    var confirmSpecChar = confirm("Smash that OK button to confirm you want special characters in the mix or hit cancel if you forget where to even find them.");  
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
 // Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
  
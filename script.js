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

// My data
var characters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q"
,"r","s","t","u","v","w","x","y","z",1,2,3,4,5,6,7,8,9,0,"!","#","$","%","&","(",'"',"'",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~"];

function generatePassword() {
  var realPassword = ""
  for (i = 0; i < 10; i++){
    var randomCharacter = generateRandomChar();
    realPassword = realPassword + randomCharacter
  }
  
  return realPassword
}

function generateRandomChar() {
  var randomIndex = Math.floor(Math.random() * characters.length)
  var randomLetter = characters[randomIndex];
  return randomLetter;
}



// Psuedo Code:
// since we already have eventlistener + some functions and variables,
// create function for generatePassword (not defined)
// return a string

// need to create a loop that goes through and picks random characters
// continues until you reach # of characters user selects
// add function for choosing random number
// add function for choosing a random character, etc
// put all possible characters into an array
// do random number method, to get that index from the array

// numbers, letters, special characters will all be separate arrays
// can combine arrays into one for the randomization index, but should be able to leave out an array set if needed
// can use toUpperCase or toLowerCase methods
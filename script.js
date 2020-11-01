// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  if (password === undefined){
    password = ""
  }
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {

  // get length from user
  var lengthOfPass = prompt("How long does your password need to be? Please enter your desired password length (numerically).");
  lengthOfPass = parseInt(lengthOfPass)
  if (lengthOfPass < 8) {
    alert("That password is too short! Passwords must be at least 8 characters.")
    return
  }
  else if (lengthOfPass > 128) {
    alert("That password is too long! Passwords must be less than 129 characters.")
    return
  } else if (isNaN(lengthOfPass)) {
    alert("That was not a number!")
    return
  }

  // get which characters to use
  var lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q"
    , "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O",
    "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  var spChar = ["!", "#", "$", "%", "&", "(", '"', "'", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];

  var useLowerCase = confirm("Would you like your password to include lower case letters? OK means yes and Cancel means no.")
  var useUpperCase = confirm("Would you like your password to include upper case letters? OK means yes and Cancel means no.")
  var useSpChars = confirm("Would you like your password to include special characters? OK means yes and Cancel means no.")
  var useNumbers = confirm("Would you like your password to include numbers? OK means yes and Cancel means no.")

  var characters = [];

  if (useLowerCase) {
    characters = characters.concat(lowerCaseLetters);
  }
  if (useUpperCase) {
    characters = characters.concat(upperCaseLetters);
  }
  if (useSpChars) {
    characters = characters.concat(spChar);
  }
  if (useNumbers) {
    characters = characters.concat(numbers);
  }
  if (useLowerCase === false && useUpperCase === false && useSpChars === false && useNumbers === false){
    alert("What kind of password do you expect me to come up with if there's no upper or lower case letters, and no numbers or special characters???")
    return
  }

  // generate the password
  var realPassword = ""
  for (i = 0; i < lengthOfPass; i++) {
    var randomCharacter = generateRandomChar(characters);
    realPassword = realPassword + randomCharacter
  }

  return realPassword

}


function generateRandomChar(characters) {
  var randomIndex = Math.floor(Math.random() * characters.length)
  var randomCharacter = characters[randomIndex];
  return randomCharacter;
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
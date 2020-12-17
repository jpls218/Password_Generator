// Assignment Code
var generateBtn = document.querySelector("#generate");
// Array of special characters to be included in password
var specialCharacters = ['@','%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];
// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];
// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

var passChars = [];
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){
  var options = getPasswordOptions();
}
function getRandomUpperCase(){
  return String.fromCharCode(Math.floor(Math.random()*26)+65);
 }
console.log(getRandomUpperCase());
function getPasswordOptions() {
  var length = parseInt(prompt("How many characters would you like to have in your password?"))
 
  if (length >= 8 && length <= 128) {
    alert("You have chosen a password of " + length + "characters.")
  }
  else {
    alert("You need to a select a number between 8-128.")
  }

  var hasSpecialCharacters = confirm("Click ok if you would like special characters in your password.");
  if (hasSpecialCharacters == "true") {
    return passChars.concat(specialCharacters);
  }
  else {
    passChars;
    alert("You have chosen to not have special characters")
  }
  var hasCapitalLetters = confirm("Click ok if you would like capital letters in your password.")
  if (hasCapitalLetters == "true") {
    return passChars.concat(upperCasedCharacters);
  }
  else {
    passChars;
  }
  var hasLowerCaseLetters = confirm("Click ok if you would like capital letters in your password.")
  if (hasLowerCaseLetters == "true") {
    return passChars.concat(lowerCasedCharacters);
  }
  else {
    return passChars;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

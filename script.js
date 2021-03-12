var choices;
//Empty array where all of my possible character choices for my password will go
var passChars = [];
//Array that will contain all of the characters making up of my newly generated passwords
// var finalArray = [];

var finalPassword;
// Assignment Code
var generateBtn = document.querySelector("#generate");
// Array of special characters to be included in password
var specialCharacters = ['@', '%',
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
var upperCasedCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

// Write password to the #password input

function generatePassword() {
  getPasswordOptions();
}

//prompts the user for their desired password length and then asks them what kind of characters they want
function getPasswordOptions() {

  var finalArray = [];
  var length = parseInt(prompt("How many characters would you like to have in your password?"))
// Ensures the password is between 8 and 128 characters long
  if (length >= 8 && length <= 128) {
    alert("You have chosen a password of " + length + " characters.");
    var confirmSpecialCharacters = confirm("Would you like special characters in your password?");
    var confirmNumbers = confirm("Would you like numbers in your password?");
    var confirmUpperCaseLetters = confirm("Would you like upper case letters in your password?");
    var confirmLowerCaseLetters = confirm("Would you like lower case letters in your password?");
  }
  // Won't run if they enter any other value
  else {
    alert("You need to a select a number between 8-128.")
  };
  // If the user decides to include all 4 character type options for their password
  if (!confirmSpecialCharacters && !confirmNumbers && !confirmUpperCaseLetters && !confirmLowerCaseLetters) {
    alert("You must select at least ONE of the options in order to generate a password!");
  }
  // If the user decides to include only 3 character type options for their password
  else if (confirmSpecialCharacters && confirmNumbers && confirmUpperCaseLetters && confirmLowerCaseLetters) {
    choices = passChars.concat(specialCharacters, numericCharacters, lowerCasedCharacters, upperCasedCharacters);
  }
  else if (confirmSpecialCharacters && confirmNumbers && confirmUpperCaseLetters) {
    choices = passChars.concat(specialCharacters, numericCharacters, upperCasedCharacters);
  }
  else if (confirmSpecialCharacters && confirmNumbers && confirmLowerCaseLetters) {
    choices = passChars.concat(specialCharacters, numericCharacters, lowerCasedCharacters);
  }
  else if (confirmSpecialCharacters && confirmLowerCaseLetters && confirmUpperCaseLetters) {
    choices = passChars.concat(specialCharacters, lowerCasedCharacters, upperCasedCharacters);
  }
  else if (confirmNumbers && confirmLowerCaseLetters && confirmUpperCaseLetters) {
    choices = passChars.concat(numericCharacters, lowerCasedCharacters, upperCasedCharacters);
  }
  // If the user decides to include only 2 character type options for their password
  else if (confirmSpecialCharacters && confirmNumbers) {
    choices = passChars.concat(specialCharacters, numericCharacters);
  }
  else if (confirmSpecialCharacters && confirmLowerCaseLetters) {
    choices = passChars.concat(specialCharacters, lowerCasedCharacters);
  } 
  else if (confirmSpecialCharacters && confirmUpperCaseLetters) {
    choices = passChars.concat(specialCharacters, upperCasedCharacters);
  }
  else if (confirmNumbers && confirmLowerCaseLetters) {
    choices = passChars.concat(numericCharacters, lowerCasedCharacters);
  } 
  else if (confirmLowerCaseLetters && confirmUpperCaseLetters) {
    choices = passChars.concat(lowerCasedCharacters, upperCasedCharacters);
  } 
  else if (confirmNumbers && confirmUpperCaseLetters) {
    choices = passChars.concat(numericCharacters, upperCasedCharacters);
  }
  // If the user decides to include only 1 character type option for their password
  else if (confirmSpecialCharacters) {
    choices = passChars.concat(specialCharacters);
  }
  else if (confirmUpperCaseLetters) {
    choices = passChars.concat(upperCasedCharacters);
  }
  else if (confirmLowerCaseLetters) {
    choices = passChars.concat(numericCharacters);
  }
  else if (confirmLowercase) {
    choices = passChars.concat(lowerCasedCharacters);
  }
  //Random selection of all the variables
  for (var i = 0; i < length; i++) {
    var randomPassword = choices[Math.floor(Math.random() * choices.length)];
    finalArray.push(randomPassword);
  }
  //Turns the password into a string which can be pushed to the textbox
  var finalPassword = finalArray.join("");
      UserInput(finalPassword);
    
      return finalPassword;
};
//Puts password in the text box on the webpage
function UserInput(finalPassword) {
  document.getElementById("password").innerText = finalPassword;
}

// function writePassword() {
//   var passwordText = document.querySelector("#password");
//   console.log(passwordText);
//   passwordText.textContent = finalPassword;
//   generatePassword();
// }

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);


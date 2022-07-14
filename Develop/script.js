// Assignment code here
alert("You'd like a new password, eh? Let's define the criteria! Smash 'OK' to proceed.");
let length = prompt("How long would like your new password to be? Please choose a numeric value between at least 8 characters and no more than 128 characters");
let lowercase = prompt("Would you like to require a lowercase character? (Yes/No)");
let uppercase = prompt("Would you like to require an uppercase character? (Yes/No)");
let numeric = prompt("Would you like to require a numeric character? (Yes/No)");
let special = prompt("Would you like to require a special character i.e, *, !, %, etc..? (Yes/No)");

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

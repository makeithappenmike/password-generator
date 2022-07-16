// Assignment code here
function genPass() {
  
  // Initial prompt
  alert("You'd like a new password, eh? Let's define the criteria! Smash 'OK' to proceed.");
  
  // Length between 8 and 128
  let length = prompt("How long would like your new password to be? Please choose a numeric value between at least 8 characters and no more than 128 characters");

  // While the length is not between 8 - 128, don't proceed
  while (length < 8 || length > 128) {
    alert("Whoops! Please enter a number between 8 - 128 and try again.");
    let length = prompt("How long would like your new password to be? Please choose a numeric value between at least 8 characters and no more than 128 characters");
    if (length > 8 && length < 128) {
      break;
    }
  };

  // Lowercase character?
  let lowercase = prompt("Would you like to require a lowercase character? (y/n)");
 
   // Uppercase character?
  let uppercase = prompt("Would you like to require an uppercase character? (y/n))");
 
//  Numeric character?
  let numeric = prompt("Would you like to require a numeric character? (y/n)");
  
  // Special character?
  let special = prompt("Would you like to require a special character i.e, *, !, %, etc..? (y/n)");
}


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
// Assignment code here
let yesNo = [
  "y", "Y", "n", "N"]

function genPass() {
  
  // Initial prompt
  console.log("A game is the foot! Let's go.");
  alert("You'd like a new password, eh? Let's define the criteria! Smash 'OK' to proceed.");
  
  // Length between 8 and 128
  let length = prompt("How long would like your new password to be? Please choose a numeric value between at least 8 characters and no more than 128 characters");

  // While the length is not between 8 - 128, don't proceed
  while (length < 8 || length > 128) {
    // console.log("Need correction");
    alert("Whoops! Please enter a number between 8 - 128 and try again.");
    let length = prompt("How long would like your new password to be? Please choose a numeric value between at least 8 characters and no more than 128 characters");
    console.log(length, "is not between 8-128");
    if (length >= 8 && length <= 128) {
      // console.log("length set to", length);
      break;
    }
  };
  console.log("Length:", length);

  // Lowercase character?
  let lowercase = prompt("Would you like to require a lowercase character? (y/n)");

  // While the answer is not y, Y, n, or N, don't proceed
  while (!yesNo.includes(lowercase)) {
    // console.log("Need correction");
    alert("Whoops! Please choose Yes or No (y/n)");
    let lowercase = prompt("Would you like to require a lowercase character? (y/n)");
    console.log(lowercase, "is not an option");
    if (lowercase === "y" || lowercase === "Y" || lowercase === "n" || lowercase === "N") {
      // console.log("lowercase set to", lowercase);
      break;
    }
  };
  console.log("Lowercase:", lowercase);

  // Uppercase character?
  let uppercase = prompt("Would you like to require an Uppercase character? (y/n)");

  // While the answer is not y, Y, n, or N, don't proceed
  while (!yesNo.includes(lowercase)) {
    // console.log("Need correction");
    alert("Whoops! Please choose Yes or No (y/n)");
    let uppercase = prompt("Would you like to require an Uppercase character? (y/n)");
    console.log(uppercase, "is not an option");
    if (uppercase === "y" || uppercase === "Y" || uppercase === "n" || uppercase === "N") {
      // console.log("uppercase set to", uppercase);
      break;
    }
  };
  console.log("Uppercase:", uppercase);

  // Numeric character?
  let numeric = prompt("Would you like to require a numeric character? (y/n)");
  console.log("Numeric:", numeric);

  // While the answer is not y, Y, n, or N, don't proceed
  while (!yesNo.includes(lowercase)) {
    // console.log("Need correction");
    alert("Whoops! Please choose Yes or No (y/n)");
    let numeric = prompt("Would you like to require a numeric character? (y/n)");
    console.log(numeric, "is not an option");
    if (numeric === "y" || numeric === "Y" || numeric === "n" || numeric === "N") {
      // console.log("numeric set to", numeric);
      break;
    }
  };

  // Special character?
  let special = prompt("Would you like to require a special character? (y/n)");

  // While the answer is not y, Y, n, or N, don't proceed
  while (!yesNo.includes(lowercase)) {
    console.log("Need correction");
    alert("Whoops! Please choose Yes or No (y/n)");
    let special = prompt("Would you like to require a special character? (y/n)");
    console.log(special, "is not an option");
    if (special === "y" || special === "Y" || special === "n" || special === "N") {
      // console.log("special set to", special);
      break;
    }
  };
  console.log("Special:", special);

  alert("Sick! Smash 'OK' to view your password.");
  
  console.log("Length:", length);
  console.log("Lowercase:", lowercase);
  console.log("Uppercase:", uppercase);
  console.log("Numeric:", numeric);
  console.log("Special:", special);



};


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
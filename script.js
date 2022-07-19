// Defining our options
var yes = ["y", "Y"];
var no = ["n", "N"];
var yesNo = [...yes, ...no];
var alphaLower = "abcdefghijklmnopqrstuvwxyz";
var alphaUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var symbols = "!@#$%^&*_-+=";
var finalPassword = "";
var pwdOptions = [];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Beging generatePassword() -- this does basically everything
function generatePassword() {
  finalPassword = "";
  pwdOptions = [];
  
  // Initial prompt
  alert("You'd like a new password, eh? Let's define the criteria! Smash 'OK' to proceed.");
  
  // Length between 8 and 128
  var pwdLength = prompt("How long would like your new password to be? Please choose a numeric value between at least 8 characters and no more than 128 characters");

  // While the length is not between 8 - 128, don't proceed
  while (pwdLength < 8 || pwdLength > 128 || isNaN(pwdLength)) {
    alert("Whoops! Please enter a whole number between 8 - 128 and try again.");
    pwdLength = prompt("How long would like your new password to be? Please choose a whole numeric value between at least 8 characters and no more than 128 characters");
    if (pwdLength >= 8 && pwdLength <= 128) {
      break;
    }
  };

  // Lowercase character?
  var lowercase = prompt("Would you like to require a lowercase character? (y/n)");

  // While the answer is not y, Y, n, or N, don't proceed
  while (!yesNo.includes(lowercase)) {
    alert("Whoops! Please choose Yes or No (y/n)");
    lowercase = prompt("Would you like to require a lowercase character? (y/n)");
    if (lowercase == "y" || lowercase == "Y") {
      break;
    }
  };
  
  if (lowercase == "y" || lowercase == "Y") {
    pwdOptions.push(alphaLower);
    // console.log(pwdOptions);
  }

  // Uppercase character?
  var uppercase = prompt("Would you like to require an Uppercase character? (y/n)");

  // While the answer is not y, Y, n, or N, don't proceed
  while (!yesNo.includes(uppercase)) {
    alert("Whoops! Please choose Yes or No (y/n)");
    uppercase = prompt("Would you like to require an Uppercase character? (y/n)");
    if (uppercase == "y" || uppercase == "Y") {
      break;
    }
  };

  if (uppercase == "y" || uppercase == "Y") {
    pwdOptions.push(alphaUpper);
    // console.log(pwdOptions);
  }

  // Numeric character?
  var numeric = prompt("Would you like to require a numeric character? (y/n)");

  // While the answer is not y, Y, n, or N, don't proceed
  while (!yesNo.includes(numeric)) {
    alert("Whoops! Please choose Yes or No (y/n)");
    numeric = prompt("Would you like to require a numeric character? (y/n)");
    if (numeric == "y" || numeric == "Y") {
      break;
    }
  };

  if (numeric == "y" || numeric == "Y") {
    pwdOptions.push(numbers);
    // console.log(pwdOptions);
  }

  // Special character?
  var special = prompt("Would you like to require a special character? (y/n)");

  // While the answer is not y, Y, n, or N, don't proceed
  while (!yesNo.includes(special)) {
    alert("Whoops! Please choose Yes or No (y/n)");
    special = prompt("Would you like to require a special character? (y/n)");
    if (special == "y" || special == "Y") {
      break;
    }
  };

  if (special == "y" || special == "Y") {
    pwdOptions.push(symbols);
    // console.log(pwdOptions);
  }

  // While no character is chosen, don't proceed
  if (!yes.includes(lowercase) && !yes.includes(uppercase) && !yes.includes(numeric) && !yes.includes(special)) {
    alert("Whoops! You need to choose at least one character type. Please try again.");
    generatePassword();
  } else {

    // Join all options to loop through
    pwdOptions = pwdOptions.join('');

    // Create random string from pwdOptions
    for (var i = 0; i < pwdLength; i++) {
      var randomNumber = Math.floor(Math.random() * pwdOptions.length);
      finalPassword += pwdOptions.substring(randomNumber, randomNumber +1);
    }

    // Log stuff
    console.log("Length:", pwdLength);
    console.log("Lowercase:", lowercase);
    console.log("Uppercase:", uppercase);
    console.log("Numeric:", numeric);
    console.log("Special:", special);
    console.log("Options:", pwdOptions);
    console.log("Password:", finalPassword);

    // Trow success message
    alert("Sick! Smash 'OK' to view your password.");
  }
  
};

// Write password to the #password input
function writePassword() {
  document.getElementById("password").value = "";
  document.getElementById("password").value = finalPassword;

  
}

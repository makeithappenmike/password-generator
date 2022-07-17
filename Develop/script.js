// Defining our options
var yes = ["y", "Y"];
var no = ["n", "N"];
var yesNo = [...yes, ...no];
var alphaLower = "abcdefghijklmnopqrstuvwxyz";
var alphaUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var symbols = "!@#$%^&*_-+=";
var chars = alphaUpper + alphaLower + numbers + symbols;
var pwdOptions = [];
var finalPassword = "";

// Beging generatePassword() -- this does basically everything
function generatePassword() {
  
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
    if (yesNo.includes(lowercase)) {
      break;
    }
  };
  
  if (yes.includes(lowercase)) {
    pwdOptions.push(alphaLower);
  }

  // Uppercase character?
  var uppercase = prompt("Would you like to require an Uppercase character? (y/n)");

  // While the answer is not y, Y, n, or N, don't proceed
  while (!yesNo.includes(uppercase)) {
    alert("Whoops! Please choose Yes or No (y/n)");
    uppercase = prompt("Would you like to require an Uppercase character? (y/n)");
    if (yesNo.includes(uppercase)) {
      break;
    }
  };

  if (yes.includes(uppercase)) {
    pwdOptions.push(alphaUpper);
  }

  // Numeric character?
  var numeric = prompt("Would you like to require a numeric character? (y/n)");

  // While the answer is not y, Y, n, or N, don't proceed
  while (!yesNo.includes(numeric)) {
    alert("Whoops! Please choose Yes or No (y/n)");
    numeric = prompt("Would you like to require a numeric character? (y/n)");
    if (yesNo.includes(numeric)) {
      break;
    }
  };

  if (yes.includes(numeric)) {
    pwdOptions.push(numbers);
  }

  // Special character?
  var special = prompt("Would you like to require a special character? (y/n)");

  // While the answer is not y, Y, n, or N, don't proceed
  while (!yesNo.includes(special)) {
    alert("Whoops! Please choose Yes or No (y/n)");
    special = prompt("Would you like to require a special character? (y/n)");
    if (yesNo.includes(special)) {
      break;
    }
  };

  if (yes.includes(special)) {
    pwdOptions.push(symbols);
  }

  pwdOptions = pwdOptions.join('');

  // While no character is chosen, don't proceed
  if (!yes.includes(lowercase) && !yes.includes(uppercase) && !yes.includes(numeric) && !yes.includes(special)) {
    alert("Whoops! You need to choose at least one character type. Please try again.");
  } else {

    // Log stuff
    console.log("Length:", pwdLength);
    console.log("Lowercase:", lowercase);
    console.log("Uppercase:", uppercase);
    console.log("Numeric:", numeric);
    console.log("Special:", special);
    console.log("Options:", pwdOptions);

    // Create random string from pwdOptions
    for (var i = 0; i <= pwdLength - 1; i++) {
      var randomNumber = Math.floor(Math.random() * pwdOptions.length);
      finalPassword += pwdOptions.substring(randomNumber, randomNumber +1);
    }

    console.log("Password:", finalPassword);

    // Trow success message
    alert("Sick! Smash 'OK' to view your password.");
  }
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  document.getElementById("password").value = finalPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


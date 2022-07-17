// Assignment code here
var yesNo = [
  "y", "Y", "n", "N"];
var alphaLower = "abcdefghijklmnopqrstuvwxyz";
var alphaUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var symbols = "!@#$%^&*_-+=";
var chars = alphaUpper + alphaLower + numbers + symbols;
var pwdOptions = [];
var password = "";

function genPass() {
  
  // Initial prompt
  console.log("A game is the foot! Let's go.");
  alert("You'd like a new password, eh? Let's define the criteria! Smash 'OK' to proceed.");
  
  // Length between 8 and 128
  var pwdLength = prompt("How long would like your new password to be? Please choose a numeric value between at least 8 characters and no more than 128 characters");

  // While the length is not between 8 - 128, don't proceed
  while (pwdLength < 8 || pwdLength > 128) {
    // console.log("Need correction");
    alert("Whoops! Please enter a number between 8 - 128 and try again.");
    pwdLength = prompt("How long would like your new password to be? Please choose a numeric value between at least 8 characters and no more than 128 characters");
    // console.log(length, "is not between 8-128");
    if (pwdLength >= 8 && pwdLength <= 128) {
      // console.log("length set to", length);
      break;
    }
  };
  console.log("Length:", pwdLength);

  // Lowercase character?
  var lowercase = prompt("Would you like to require a lowercase character? (y/n)");

  // While the answer is not y, Y, n, or N, don't proceed
  while (!yesNo.includes(lowercase)) {
    // console.log("Need correction");
    alert("Whoops! Please choose Yes or No (y/n)");
    lowercase = prompt("Would you like to require a lowercase character? (y/n)");
    // console.log(lowercase, "is not an option");
    if (lowercase === "y" || lowercase === "Y" || lowercase === "n" || lowercase === "N") {
      // console.log("lowercase set to", lowercase);
      break;
    }
  };
  
  if (lowercase === "y" || lowercase === "Y") {
    pwdOptions.push(alphaLower);
  }
  console.log("Lowercase:", lowercase);
  console.log(pwdOptions);

  // Uppercase character?
  var uppercase = prompt("Would you like to require an Uppercase character? (y/n)");

  // While the answer is not y, Y, n, or N, don't proceed
  while (!yesNo.includes(uppercase)) {
    // console.log("Need correction");
    alert("Whoops! Please choose Yes or No (y/n)");
    uppercase = prompt("Would you like to require an Uppercase character? (y/n)");
    // console.log(uppercase, "is not an option");
    if (uppercase === "y" || uppercase === "Y" || uppercase === "n" || uppercase === "N") {
      // console.log("uppercase set to", uppercase);
      break;
    }
  };

  if (uppercase === "y" || uppercase === "Y") {
    pwdOptions.push(alphaUpper);
  }
  console.log("Uppercase:", uppercase);

  // Numeric character?
  var numeric = prompt("Would you like to require a numeric character? (y/n)");
  console.log("Numeric:", numeric);

  // While the answer is not y, Y, n, or N, don't proceed
  while (!yesNo.includes(numeric)) {
    // console.log("Need correction");
    alert("Whoops! Please choose Yes or No (y/n)");
    numeric = prompt("Would you like to require a numeric character? (y/n)");
    // console.log(numeric, "is not an option");
    if (numeric === "y" || numeric === "Y" || numeric === "n" || numeric === "N") {
      // console.log("numeric set to", numeric);
      break;
    }
  };

  if (numeric === "y" || numeric === "Y") {
    pwdOptions.push(numbers);
  }

  // Special character?
  var special = prompt("Would you like to require a special character? (y/n)");

  // While the answer is not y, Y, n, or N, don't proceed
  while (!yesNo.includes(special)) {
    console.log("Need correction");
    alert("Whoops! Please choose Yes or No (y/n)");
    special = prompt("Would you like to require a special character? (y/n)");
    // console.log(special, "is not an option");
    if (special === "y" || special === "Y" || special === "n" || special === "N") {
      // console.log("special set to", special);
      break;
    }
  };

  if (special === "y" || special === "Y") {
    pwdOptions.push(symbols);
  }
  console.log("Special:", special + "/n");

  pwdOptions = pwdOptions.join('');

  // While no character is chosen, don't proceed

  // Log stuff
  console.log("-------------------");
  console.log("Length:", pwdLength);
  console.log("Lowercase:", lowercase);
  console.log("Uppercase:", uppercase);
  console.log("Numeric:", numeric);
  console.log("Special:", special);
  console.log("Options:", pwdOptions);

  // Trow success message
  alert("Sick! Smash 'OK' to view your password.");

  console.log("Password:", password);

  // Create random string from pwdOptions
  for (var i = 0; i <= passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * pwdOptions.length);
    password += pwdOptions.substring(randomNumber, randomNumber +1);
  }

  console.log("Password:", password);

};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
var password = function writePassword(length) {
  // var password = genPass();
  var passwordText = document.querySelector("#password");

//   passwordText.value = password;

//   // for (var i = 0; i <= length; i++) {
//   //   var randomNumber = Math.floor(Math.random() * chars.length);
//   //   password += chars.substring(randomNumber, randomNumber +1);
//   // }
//   console.log(password);
//   document.getElementById("password").value = password;
//   console.log(password);

// }

// Add event listener to generate button
}
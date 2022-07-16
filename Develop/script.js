// Assignment code here
function genPass() {
  
  // Initial prompt
  alert("You'd like a new password, eh? Let's define the criteria! Smash 'OK' to proceed.");
  
  // Length between 8 and 128
  let length = prompt("How long would like your new password to be? Please choose a numeric value between at least 8 characters and no more than 128 characters");
  console.log(length);

  // While the length is not between 8 - 128, don't proceed
  while (length < 8 || length > 128) {
    console.log(length, "is not between 8-128");
    alert("Whoops! Please enter a number between 8 - 128 and try again.");
    let length = prompt("How long would like your new password to be? Please choose a numeric value between at least 8 characters and no more than 128 characters");
    console.log(length, "is not between 8-128");
    if (length > 8 && length < 128) {
      console.log("length set");
      break;
    }
  };

  // Lowercase character?
  let lowercase = prompt("Would you like to require a lowercase character? (y/n)");

  // While the answer is not y, Y, n, or N, don't proceed
  while (lowercase !== "y" || lowercase !== "Y" || lowercase !== "n" || lowercase !== "N") {
    console.log(lowercase, "is not an option");
    alert("Whoops! Please choose Yes or No (y/n)");
    let lowercase = prompt("Would you like to require a lowercase character? (y/n)");
    console.log(lowercase, "is not an option");
    if (lowercase === "y" || lowercase === "Y" || lowercase === "n" || lowercase === "N") {
      console.log("lowercase set");
      break;
    }
  };

  // Uppercase character?
  let uppercase = prompt("Would you like to require an Uppercase character? (y/n)");

  // While the answer is not y, Y, n, or N, don't proceed
  while (uppercase !== "y" || uppercase !== "Y" || uppercase !== "n" || uppercase !== "N") {
    console.log(uppercase, "is not an option");
    alert("Whoops! Please choose Yes or No (y/n)");
    let uppercase = prompt("Would you like to require an Uppercase character? (y/n)");
    console.log(uppercase, "is not an option");
    if (uppercase === "y" || uppercase === "Y" || uppercase === "n" || uppercase === "N") {
      console.log("uppercase set");
      break;
    }
  };

  alert("Sick! Smash 'OK' to view your password.");
 
//    // Uppercase character?
//   let uppercase = prompt("Would you like to require an uppercase character? (y/n))");

//   // While the length is not between 8 - 128, don't proceed
//   while (uppercase !== "y" || uppercase !== "n") {
//     alert("Whoops! Please enter a number between 8 - 128 and try again.");
//     let uppercase = prompt("How long would like your new password to be? Please choose a numeric value between at least 8 characters and no more than 128 characters");
//     if (uppercase === "y" || uppercase === "n") {
//       break;
//     }
//   };
 
// //  Numeric character?
//   let numeric = prompt("Would you like to require a numeric character? (y/n)");

//   // While the length is not between 8 - 128, don't proceed
//   while (numeric !== "y" || numeric !== "n") {
//     alert("Whoops! Please enter a number between 8 - 128 and try again.");
//     let numeric = prompt("How long would like your new password to be? Please choose a numeric value between at least 8 characters and no more than 128 characters");
//     if (numeric === "y" || numeric === "n") {
//       break;
//     }
//   };
  
//   // Special character?
//   let special = prompt("Would you like to require a special character i.e, *, !, %, etc..? (y/n)");
// }

// // While the length is not between 8 - 128, don't proceed
// while (length < 8 || length > 128) {
//   alert("Whoops! Please enter a number between 8 - 128 and try again.");
//   let length = prompt("How long would like your new password to be? Please choose a numeric value between at least 8 characters and no more than 128 characters");
//   if (length > 8 && length < 128) {
//     break;
//   }

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
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// constant character sets
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numeric = "0123456789";
const specialCharacters = "!@#$%^&*()+=:;<>,.?";


// TODO: Write code so the generatePassword returns a string for a password
// which meets the requirements in the instructions.
function generatePassword() {

  // prompt user for password length and convert to number
  var length = parseInt(prompt("What length password do you want?"));

  // if length is less than 8 OR if length is greater 128 OR if length isn't a number
  if (length < 8 || length > 128 || isNaN(length)) {
    // alert user and stop execution
    alert("Password length must be between 8 and 128 characters");
    return "";
  }

  // ask user which character types they want to
  var useLowercase = confirm("Do you want to use lowercase letters?");
  var useUppercase = confirm("Do you want to use uppercase letters?");
  var useSpecial = confirm("Do you want to use special characters?");
  var useNumeric = confirm("Do you want to use numbers?");

  // if user said no to every character type
  if (!useLowercase && !useUppercase && !useSpecial && !useNumeric) {
    // alert user they must select one type and stop execution
    alert("You must select at least one character type to use!");
    return "";
  }

  // build a character set of character types the user wants
  var availableCharacters = "";
  if (useLowercase) {
    availableCharacters += lowerCase;
  }
  if (useUppercase) {
    availableCharacters += upperCase;
  }
  if (useNumeric) {
    availableCharacters += numeric;
  }
  if (useSpecial) {
    availableCharacters += specialCharacters;
  }

  var generatedPassword = "";
  // loop through the desired password length
  for (var i = 0; i < length; i++) {
    // choose a random character out of the available characters
    var randomChar = availableCharacters[Math.floor(Math.random() * availableCharacters.length)];
    // concatenate the random character to the generated password
    generatedPassword += randomChar;
  }

  // return the generated password
  return generatedPassword;
}


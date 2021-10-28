// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  let passwordLength = prompt('How many characters do you want the password to be - min 8 max 128');
  let passwordSpecial = window.confirm("Click OK if you want to include special characters");
  let passwordNumeric = window.confirm("Click OK if you want to include numeric characters");
  let passwordLower = window.confirm("Click OK if you want to include lowercase characters");
  let passwordUpper = window.confirm("Click OK if you want to include uppercase characters");
    console.log(passwordLength)
    console.log(passwordSpecial)
    console.log(passwordNumeric)
    console.log(passwordLower)
    console.log(passwordUpper)


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

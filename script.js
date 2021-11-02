// Assignment Code

var generateBtn = document.querySelector("#generate");

const upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
const lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const numeric = [1,2,3,4,5,6,7,8,9,0]
const special = ["!","@","£","%","&"]

function generatePassword(){
    let passwordLength = prompt(
    "How many characters do you want the password to be - min 8 max 128"
  );
  if (passwordLength <7 || passwordLength>128){
      alert("Please type a number between 8 and 128");
      return;
  }
  let passwordSpecial = window.confirm(
    "Click OK if you want to include special characters"
  );
  let passwordNumeric = window.confirm(
    "Click OK if you want to include numeric characters"
  );
  let passwordLower = window.confirm(
    "Click OK if you want to include lowercase characters"
  );
  let passwordUpper = window.confirm(
    "Click OK if you want to include uppercase characters"
  );


  let possibleCharacters = [];

  if(passwordSpecial){
    possibleCharacters = possibleCharacters.concat(special);
   console.log(possibleCharacters);
  }

  if(passwordNumeric){
    possibleCharacters = possibleCharacters.concat(numeric);
    
   console.log(possibleCharacters);
  }

  if(passwordUpper){
    possibleCharacters = possibleCharacters.concat(upper);
    
    console.log(possibleCharacters);
  }

  if(passwordLower){
    possibleCharacters = possibleCharacters.concat(lower);
  
   console.log(possibleCharacters);
  }

  if(!passwordLower && !passwordNumeric && !passwordUpper && !passwordSpecial){
    alert("Please select at least one option")
    return
  }

  console.log("Character length to use is "+ passwordLength);
  console.log("All possible Characters in correct order "+ possibleCharacters);
  let randomPassword = possibleCharacters.sort((a,b)=>0.5 - Math.random());
  console.log("Random order before length calculated is " + randomPassword);
  let password = randomPassword.splice(0,passwordLength);
  console.log("Final password "+password);

  return password;

}


// let userLength = 2
// const possibleCharacters = ["a","b","c","d","e"]
// console.log("Characters in correct order "+ possibleCharacters);
// let randomPassword=possibleCharacters.sort((a,b)=>0.5 - Math.random());
// console.log("Random order is " +randomPassword);
// let password = randomPassword.splice(0,userLength);
// console.log("Final password "+password);


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





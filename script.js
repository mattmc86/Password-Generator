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

//   let password = ();

// if (passwordUpper){
//     return let password = special;
//  } else{
//         return let password = "";

// }

if (passwordSpecial && passwordLower && passwordNumeric && passwordUpper) {
  let fullPassword= upper.concat(lower,numeric,special);
  let randomPassword=fullPassword.sort((a,b)=>0.5 - Math.random());
  let password = randomPassword.splice(0,passwordLength);
  console.log("Final password "+password);
} 

if (!passwordSpecial && passwordLower && passwordNumeric && passwordUpper) {
    let fullPassword= upper.concat(lower,numeric,);
    let randomPassword=fullPassword.sort((a,b)=>0.5 - Math.random());
    let password = randomPassword.splice(0,passwordLength);
    console.log("Final password "+password);
  } 

  if (!passwordSpecial && !passwordLower && passwordNumeric && passwordUpper) {
    let fullPassword= upper.concat(numeric,);
    let randomPassword=fullPassword.sort((a,b)=>0.5 - Math.random());
    let password = randomPassword.splice(0,passwordLength);
    console.log("Final password "+password);
  } 


// if (passwordSpecial && passwordNumeric && !passwordUpper && !passwordLower) {
//   let password = special.concat(numeric);
//   console.log(password);
//   let randomPassword=password.sort((a,b)=>0.5 - Math.random());
//   console.log("password is "+ randomPassword);
// }

// if (passwordSpecial && passwordNumeric && passwordUpper) {
//   let password = special.concat(numeric, upper);
//   console.log(password);
// }

// if (passwordSpecial && passwordNumeric && passwordUpper && passwordLower) {
//   let password = special.concat(numeric, upper, lower);
//   console.log(password);
// }

}

//   if (passwordSpecial && passwordNumeric && passwordLower && passwordUpper){
//         let newPassword= upper.concat(lower,numeric,special);
//         console.log(newPassword);
//         let randomPassword=newPassword.sort((a,b)=>0.5 - Math.random());
//         //let randomPassword = newPassword[Math.floor(Math.random()*newPassword.length)];
//         console.log(randomPassword);
//   } else if(!passwordSpecial && !passwordNumeric){
//       let newPassword=upper.concat(lower);
//       console.log("newPassword");
//       let randomPassword=newPassword.sort((a,b)=>0.5 - Math.random());
//         //let randomPassword = newPassword[Math.floor(Math.random()*newPassword.length)];
//         console.log(randomPassword);

//   }
  
// }


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





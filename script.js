// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var userinput;



// Write password to the #password input
function writePassword() {
  userinput = parseInt(prompt("Choose between 8 and 128 characters for your password"));
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var characters = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var pslength = 8
  let ps = window.prompt ("Password Length?" );

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 

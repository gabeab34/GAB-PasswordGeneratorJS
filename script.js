// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var userinput;



// Write password to the #password input
function writePassword() {
  userinput = parseInt(prompt("Choose between 8 and 128 characters for your password"));
  if (!userinput) {
    alert("Value needed");
  } else if (userinput < 8 || userinput > 128) {
    userinput = parseInt(prompt("Choose between 8 and 128 characters for your password"));
  }
  userinput = parseInt(prompt("Include lowercase?"));
  userinput = parseInt(prompt("Include uppercase?"));
  userinput = parseInt(prompt("Include numeric characters?"));
  userinput = parseInt(prompt("Include special characters?"));
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var characters = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var pslength = 8
  let ps = window.prompt ("Password Length?" );

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 

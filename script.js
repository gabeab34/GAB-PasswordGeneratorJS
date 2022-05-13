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
  userinput = parseInt(confirm("Include lowercase?"));
  userinput = parseInt(confirm("Include uppercase?"));
  userinput = parseInt(confirm("Include numeric characters?"));
  userinput = parseInt(confirm("Include special characters?"));
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var characters = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var pslength = 8
  

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 

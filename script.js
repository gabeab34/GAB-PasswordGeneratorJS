/// Assignment code here

const selections = {
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  number: '0123456789',
  symbol: "!$%&'()*+,-./:;<=>?@[]^_`{|}~",
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  
  var passwordselection = "";
// First prompt box
  var pwlength = prompt("Please input a number between 8 and 128")
  if (!pwlength) {
    return writePassword + alert("You must enter a number")
  };
// Followup prompt and alert if instructions not followed
  if (pwlength < 8 || pwlength > 128) {
    pwlength = prompt("Choose a number between 8 and 128")
  } if (pwlength < 8 || pwlength > 128) {
    return writePassword + alert("Please follow instructions") 
  };
  // First Confirm box
  var lcase = confirm("Include lowercase? Ok for yes, cancel for no")
  if (lcase) {
    passwordselection += selections.lowercase;
  };
  // Second Confirm box
  var ucase = confirm("Include uppercase? Ok for yes, cancel for no")
  if (ucase) {
    passwordselection += selections.uppercase;
  };
  // Third Confirm box
  var numbers = confirm("Include numbers? Ok for yes, cancel for no")
  if (numbers) {
    passwordselection += selections.number;
  };
  // Fourth Confirm box
  var symbols = confirm("Include special characters? Ok for yes, cancel for no")
  if (symbols) {
    passwordselection += selections.symbol;
  };
  // if statement that returns to top of function if user selects no character types
  if (!lcase && !ucase && !numbers && !symbols) {
  return writePassword + alert("You must choose at least one character type")
  };
  // Formula for rng
  var password = "";
  for (let i = 0; i < pwlength; i++) {
    password += passwordselection[Math.floor(Math.random() * passwordselection.length)]
  
  }
  // writes password to alert box (not used in final build)
  // alert(password)


  // writes password to page
  document.querySelector("#password").textContent = password;

}




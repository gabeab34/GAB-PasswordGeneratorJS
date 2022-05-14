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

  var pwlength = prompt("Please input a number between 8 and 128")
  if (!pwlength) {
    return writePassword + alert("You must enter a number")
  };
  if (pwlength < 8 || pwlength > 128) {
    pwlength = prompt("Choose a number between 8 and 128")
  } if (pwlength < 8 || pwlength > 128) {
    return writePassword + alert("Please follow instructions") 
  };
  
  var lcase = confirm("Include lowercase? Ok for yes, cancel for no")
  if (lcase) {
    passwordselection += selections.lowercase;
  };

  var ucase = confirm("Include uppercase? Ok for yes, cancel for no")
  if (ucase) {
    passwordselection += selections.uppercase;
  };

  var numbers = confirm("Include numbers? Ok for yes, cancel for no")
  if (numbers) {
    passwordselection += selections.number;
  };

  var symbols = confirm("Include special characters? Ok for yes, cancel for no")
  if (symbols) {
    passwordselection += selections.symbol;
  };

  if (!lcase && !ucase && !numbers && !symbols) {
  return writePassword + alert("You must choose at least one character type")
  };

  var password = "";
  for (let i = 0; i < pwlength; i++) {
    password += passwordselection[Math.floor(Math.random() * passwordselection.length)]
  
  }
  // alert(password)
 
  document.querySelector("#password").textContent = password;

}




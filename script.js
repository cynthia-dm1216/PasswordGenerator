// Assignment Code
var generateBtn = document.querySelector("#generate");

//Numeric Array, special character array, lower and UPPER case array
var numericCharacter = ['0','1','2','3','4','5','6','7','8','9'];
var specialCharacters = ['@','&','#','*','^','%','!','-','_'];
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

//generate password function
function generatePassword () {
  //telling user the length of the password ( between 8-128 characters)
  var charcInput = prompt("How many characters must be used? Must be between 8-128");

  if (charcInput < 8 || charcInput > 128) {
    alert ("ERROR Try Again");
    return "";
  }

  //asking user what characters they want to use
  var confirmLower = confirm("Would you like to use lower case in your password?");
  //does user want upper case
  var confirmUpper = confirm("Would you like to use Upper case in password?");
  //does user want number in password
  var confirmNum = confirm("Would you like to use numbers in the password?");
  //does user want to use special characters
  var confirmSpeChar = confirm("Would you like to use special characters in password?");

  //creating a var with empty array to store users options
  var userChoice = [];

  if(confirmNum) {
    userChoice = userChoice.concat(numericCharacter);
    //console.log("user choose numbers for password");
  }
  if(confirmSpeChar){
    userChoice = userChoice.concat(specialCharacters);
    //console.log("user choose special Characters for password");
  }
  if(confirmLower){
    userChoice = userChoice.concat(lowerCase);
  }
  if(confirmUpper){
    userChoice = userChoice.concat(upperCase);
    //console.log("user choose upper case for password");
  }

    //varifying one of users characters options 
    if (userChoice.length === 0) {
      alert("Choose at least one character option");
      return '';
    }

  for(var i = 0; i < charcInput.length; i++){
   // console.log(charcInput);
   var randomIndex = Math.floor(Math.random() * userChoice.length);

   var password = '';
   //character random array
   var randomCharc = userChoice[randomIndex];
   //console.log(randomCharc);
   password = password + randomCharc;
   
  }


  return password;

}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  //console.log(password);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

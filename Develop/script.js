// code Assignment
var generateBtn = document.querySelector('#generate');


function generatePassword() {
  // creating arrays for password criteria
var passwordCharacter = [
    ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
    ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
    [0,1,2,3,4,5,6,7,8,9],
    ['@','&','#','*','^','%','!','-','_'],
]

var selectedChars = [];

//   THEN I am presented with a series of prompts for password criteria
 var minLength = prompt ('What is the min value for the password?', 'min is 8 characters');
 minLength = parseInt(minLength);
if (minLength > 0) {

var maxlength = prompt('What is the max value for the password?', " max  value is 128 characters");
    maxlength = parseInt(maxlength);
    if (maxlength > minLength){
        
var passwordLength = Math.floor(Math.random() * (maxlength - minLength) + minLength);

 var charsType = [ "lowerCase", "upperCase","numeric","specialCharacters"];
 var TypeofChars = [];
 //WHEN prompted for character types to include in the password
 for (var i=0; i < TypeofChars.length; i++) {
     var TypeofChars = confirm("what would you like to include" + charsType[i] + "in the password");
     TypeofChars.push(TypeofChars);
 }
 for (var i = 0; i < TypeofChars.length; i++){
     if (TypeofChars[i]){
         selectedChars.push(passwordCharacter[i])
     }
 }
    
if (TypeofChars[0] == true || TypeofChars[1] == true || TypeofChars[2] == true || TypeofChars[3] == true){
    var userPassword = [];
    for (var i = 0; i < passwordLength; i++){
        var RandomNumber = Math.floor(Math.random() * selectedChars.length);
        var charRandomNumber = Math.floor(Math.random() * selectedChars.length);
        
        var char = selectedChars[RandomNumber] [charRandomNumber];
        userPassword.push(char);
    }

        userPassword = userPassword.join("");
        
        //return userPassword
        return userPassword;

    } else {
        alert ('choose atleast one character');
        return "TRY AGAIN!";
    }
} else if (maxlength == minLength || maxlength < minLength){
    alert ("choose a number that is above the min and below the max");
    return "TRY AGAIN!!";
} else {
    alert ("Choose a number");
return 'TRY AGAIN!';
  }
}  
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}  
}
generateBtn.addEventListener("click", writePassword);
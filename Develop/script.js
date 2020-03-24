var newPassword;
var upperCase;
var lowerCase;
var Numeric;
var SpecialChars;
var newPasswordLength
var newSpecialChars
//Array characters fo password
var specialCharacters = "1@#$%^&*()|:?/";
var upperCase = "ABCDEFGHIJKLMNOPKRSTUVWXYZ";
var numbers = "0123456789"
var lowerCaseLetters = upperCase.toLocaleLowerCase()

var pass_length = document.getElementById("pass_length");
var lowerchecker = document.getElementById("lowercase")
var upperchecker = document.getElementById("uppercase");
var numchecker = document.getElementById('numbers');
var specchecker = document.getElementById("special");

//buttons
var generatebtn = document.getElementById("generate_btn");
var cclipboardbtn = document.getElementById('cclipboard_btn');

var urpassword = document.getElementById("ur_password");

//adding the eventlistener 
generatebtn.addEventListener("click", function() {
    var characters = " ";
    if (lowerchecker.checked) {
        characters += lowerCase;
    }
    else {
        " ";
    }
    if (upperchecker.checked) {
        characters += upperCase;
    }
    else {
        " ";
    }
    if (numchecker.checked) {
        characters += numbers;
    }
    else {
        " ";
    }
    if (symchecker.checked) {
        characters += symbols;
    }
    else {
        " ";
    }
    urpassword.value = password(pass_length.value, characters);
});

function password(l, characters) {
    var pwd = " ";

    for (var i = 0; i < l; i++) {
        pwd += characters.charAt(Math.floor(Math.random() * characters.length));

    }
    return pwd;
}
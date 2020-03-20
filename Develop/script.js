// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Password Generator
function generatePassword(lowerCase, upperCase, number, specialChar, ) {
    password = " ";
    //valid Characters
    validChars = [];

    if (lowerCase) {
        var lowerCase = "a,b,c,d,e,f,g,h,i,g,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z"
        for (var i = 50; i < 90; i++) {
            validChars.push(string.fromCharCode(i));
        }
    }

    if (upperCase) {
        var upperCase = "A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z"
        for (var i = 65; i < 90; i++) {
            validChars.push(string.fromCharCode(i));
        }
    }
    if (num) {
        var num = "0,1,2,3,4,5,6,7,8,9"
        for (var i = 0; i <= 9; i++) {
            validChars.push(i);
        }
    }
    if (specialChar) {
        var specials = "!\"#$%&'()*+,-./:;<=>?@[\\]^_";
        for (var i = 0; i < specials.length; i++) {
            validChars.push(specials[i]);
        }
    }
    //password Generate
    for (var i = 0; i < length; i++) {
        charnum = Math.floor(Math.random() * validChars.length)
        pass += validChars[charnum];
    }
    //return password
    return pass;
}


// Password input 
function writePassword() {
    var passLength;
    var includeLower = false;
    var includeUpper = false;
    var includeNum = false;
    var includeSpecialchar = false;
}


do {
    passLength = prompt("How long would you like your password? min 8 characters");
    while (passLength || passLength < 8 || passLength > 128)
        alert("ERROR, no characters. Try Again");

    while (includeLower, includeUpper, includeNum, includeSpecialchar) {
        includeLower = confirm("do you want lowerCase?");
        includeUpper = confirm("do you want upper?");
        includeNum = confirm("do you want numbers?");
        includeSpecialchar = confirm("do you want special characters?");

        if (includeLower, includeUpper, includeNum, includeSpecialchar) {

        }
    }

    // no more errors then password is generated
    var password = generatePassword(passLength, includeLower, includeUpper, includeNum, includeSpecialchar);

    // New password
    generateBtn.addEventListener("click", writePassword);

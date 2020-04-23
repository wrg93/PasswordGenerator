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


var guestCharLengthApproval = parseInt(prompt("How many characters would you like the password to be? Please choose between 8-128 characters."));

var guestCharLengthConfirm = [8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128];



if (guestCharLengthConfirm.indexOf(guestCharLengthApproval) !== -1) {
  alert("Confirmed! Will use " + guestCharLengthApproval + " characters");
}
else {
  alert("invalid entry")
}




//
var guestLowercaseApproval = prompt ("Would you like your password to include lowercase letters?")

var LowercaseConfirm = ["Yes", "yes", "y", "Y", "Ya", "ya"]

if (LowercaseConfirm.indexOf(guestLowercaseApproval) !== -1) {
  alert("Confirmed! Will use lowercase letters.");
  var lowercase = true;
}
 
else {
  alert("Will not use lowercase letters");
  var lowercase = false;
}

//var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "y", "z"]

//


var guestUppercaseApproval = prompt ("Would you like your password to include uppercase?")

var UppercaseConfirm = ["Yes", "yes", "y", "Y", "Ya", "ya"]

if (UppercaseConfirm.indexOf(guestUppercaseApproval) !== -1) {
  alert("Confirmed! Will use lowercase letters.");
  var uppercase = true;
}
 
else {
  alert("Will not use lowercase letters");
  var uppercase = false;
}

  //var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]



//
var guestSpecialCharactersApproval = prompt ("Would you like your password to include special characters?")

var specialCharactersConfirm = ["Yes", "yes", "y", "Y", "Ya", "ya"]

if (specialCharactersConfirm.indexOf(guestSpecialCharactersApproval) !== -1) {
  alert("Confirmed! Will use special characters.");
  var special = true;
}
 
else {
  alert("Will not use special characters");
  var special = false;
}
//
var guestNumbersApproval = prompt ("Would you like your password to include numbers?")

var numbersConfirm = ["Yes", "yes", "y", "Y", "Ya", "ya"]

if (numbersConfirm.indexOf(guestNumbersApproval) !== -1) {
  alert("Confirmed! Will use numbers.");
  var numbers = true;
}
 
else {
  alert("Will not use numbers");
  var numbers = false;
}

//var specialCharacters = [" ","!", "#", "$", "%", "\&", "'","(", ")", "*", "?" "+", ",", "-", ".", "/", ":", ";", "<" ,"=", ">", "?", "@", "[", "\\", "\"", "^", "_", "\`","{","|","}","~"]
//

if ((uppercase==true) && (lowercase==true) && (numbers==true) && (special==true)){
  var charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 !#$%&'()*+,-./:;<=>?@[]^_`{|}~";
  
}

else if ((uppercase==true) && (lowercase==true) && (numbers==true) && (special==false)){
  charset= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
  
}

else if ((uppercase==true) && (lowercase==true) && (numbers==false) && (special==true)){
  charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz !#$%&'()*+,-./:;<=>?@[]^_`{|}~";
}
else if ((uppercase==true) && (lowercase==true) && (numbers==false) && (special==false)){
  charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
}

else if ((uppercase==true) && (lowercase==true) && (numbers==false) && (special==true)){
  charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ !#$%&'()*+,-./:;<=>?@[]^_`{|}~";
}

else if ((uppercase==true) && (lowercase==false) && (numbers==true) && (special==false)){
  charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
}

else if ((uppercase==true) && (lowercase==false) && (numbers==false) &&(special==false)) {
  charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
}

else if ((uppercase==false) && (lowercase==true) && (numbers==false) && (special==true)) {
  charset = "abcdefghijklmnopqrstuvwxyz !#$%&'()*+,-./:;<=>?@[]^_`{|}~";

}

else if ((uppercase==false) && (lowercase==true) && (numbers==true) && (special==false)){
  charset="abcdefghijklmnopqrstuvwxyz0123456789";

}

else if ((uppercase==false) && (lowercase==true) && (numbers==false) &&(special==false)){
  charset = "abcdefghijklmnopqrstuvwxyz";
}

else if ((uppercase==false) && (lowercase==false) && (numbers==true) && (special==true)){
  charset = "0123456789 !#$%&'()*+,-./:;<=>?@[]^_`{|}~";
}

else if ((uppercase==false) && (lowercase==false) && (numbers==true) && (special==false)){
  charset = "0123456789";
}

else if ((uppercase==false) && (lowercase==false) && (numbers==false) && (special==true)){
  charset = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";

}


//charSetUpperLowerNumbersSpecial = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 !#$%&'()*+,-./:;<=>?@[]^_`{|}~"
//charSetUpperLowerNumbers = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
//charSetUpperLowerSpecial  = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz !#$%&'()*+,-./:;<=>?@[]^_`{|}~"
//charSetUpperLower = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
//charSetUpperSpecial = "ABCDEFGHIJKLMNOPQRSTUVWXYZ !#$%&'()*+,-./:;<=>?@[]^_`{|}~"
//charSetUpperNumbers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
//charSetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
//charSetLowerSpecial = "ab0123456789 !#$%&'()*+,-./:;<=>?@[]^_`{|}~ !#$%&'()*+,-./:;<=>?@[]^_`{|}~"
//charSetLowerNumbers = "abcdefghijklmnopqrstuvwxyz0123456789"
//charSetLower = "abcdefghijklmnopqrstuvwxyz"
//charSetNumbersSpecial = "0123456789 !#$%&'()*+,-./:;<=>?@[]^_`{|}~"
//charSetNumbers = "0123456789"
//charSetSpecial = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~"








function generatePassword(){
for (var i = 0; i < guestCharLengthApproval; i++) {

password += charset.charAt(Math.floor(Math.random() * charset.length));

}
return password;

}
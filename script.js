// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword()
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
var size={};

var lowercase= ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var uppercase= ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numbers= ["0","1","2","3","4","5","6","7","8","9"]
var specialchar= [".","-","&","$","#","@","!", "<",">", "~","/","*"]

function generatePassword(parameters) {
 const length1=prompt("Please select number of characters on password")
 if ( 7 >=length1){
   alert("please select a password with 8 or more characters")
 }
 else if ( length1>=128){
   alert("please select a password with less than 128 characters")
 }
 else{
  const lowercase=prompt("would you like to include lowercase? yes or no")
  const uppercase=prompt("would you like to include uppercase? yes or no")
  const numbers=prompt("would you like to include numbers? yes or no")
  const specialchar=prompt("would you like to use special characters? yes or no")
}
size=length1
console.log(size)
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

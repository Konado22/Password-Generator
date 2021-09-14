// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword()
}
var parameters= {};

var lowercase= ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var uppercase= ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numbers= ["0","1","2","3","4","5","6","7","8","9"]
var specialchar= [".","-","&","$","#","@","!", "<",">", "~","/","*"]

function generatePassword() {
 const length1=prompt("Please select number of characters on password")
 if ( 7 >=length1){
   alert("please select a password with 8 or more characters")
 }
 else if ( length1>=128) {
   alert("please select a password with less than 128 characters")
 }
  const lowercase2=prompt("would you like to include lowercase? yes or no")
  if (lowercase2==="yes"){
    parameters.lowercase = lowercase
  }
  const uppercase2=prompt("would you like to include uppercase? yes or no")
  if (uppercase2==="yes"){
    parameters.uppercase = uppercase
  }
 
  const numbers2=prompt("would you like to include numbers? yes or no")
  if (numbers2==="yes"){
    parameters.numbers = numbers
  }
 
  const specialchar2=prompt("would you like to use special characters? yes or no")
  if (specialchar2==="yes"){
    parameters.specialchar=specialchar
  }

  buildPassword(length1)

}

function buildPassword(length1) {
  let charArray = []
  for (let i in parameters){
    console.log(parameters[i])
    charArray = charArray.concat(parameters[i])
   }
  let password= []
  for (let i=0; i<length1;i++){
    const rand = Math.floor(Math.random()*charArray.length)
    const randomCharacter = charArray[rand]
    password.push(randomCharacter)
  }  
  var passwordText = document.querySelector("#password");
  console.log(passwordText)
  passwordText.innerText= password.join("");
  console.log(password.join(""))
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)

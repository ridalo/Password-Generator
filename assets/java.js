
// 1. handle button click, you need to create a click event using the addEventListener for this generate button
// 2. display - window.prompt() to ask the user for size of the password
// 3. validate - only numbers and size of password, the range  >8 and <128
// 4. prompt- window.confirm()  to ask user for ok or cancel for the type of password
// 5. You need 4 confirms, each confirm represents the type of character in the password
var generatePassword = function () {
    var finalPassword = "aw" //finalPassword.length
    var lowercase = "abcdefghijklmnopqrstuvwxyz"
    var uppercase = "ABCDEFGHIJKLONOPQRSTUVWXYZ"
    var specialCharcters = "%$#()"
    var number = "0123456789"
    var passwordsize = prompt("How many characters would you like your password to contain?")
    console.log(passwordsize)
    var isLowerCase = confirm("Does your password include lowercase?")
    
    var isUpperCase = confirm("Does your password include Uppercase?")
    
    var isSpecialCharacter= confirm("Does your password include  special?")
    
    var isNumber = confirm("Does your password include number?")
    console.log(isLowerCase)
    // ending 
    if (isLowerCase) {
      var randomPickLowerCase = Math.floor(Math.random() * lowercase.length)
      var pickOneLowerCaseLetter = lowercase.charAt(randomPickLowerCase)
      finalPassword =finalPassword+ pickOneLowerCaseLetter 
    }
    if(isUpperCase){
      var randomPickUpperCase = Math.floor(Math.random() * uppercase.length)
      var pickOneUpperCaseLetter = uppercase.charAt(randomPickUpperCase)
      finalPassword =finalPassword+ pickOneUpperCaseLetter
    }
    if(isSpecialCharacter){
      var randomPickSpecial = Math.floor(Math.random() * specialCharcters.length)
      var pickOneSpecialCharacterLetter = specialCharcters.charAt(randomPickSpecial)
      finalPassword =finalPassword+ pickOneSpecialCharacterLetter
    }
    if(isNumber){
      var randomPickNumber = Math.floor(Math.random() * number.length)
      var pickOneNumber = number.charAt(randomPickNumber)
      finalPassword =finalPassword+  pickOneNumber
    }
    console.log(pickOneLowerCaseLetter, pickOneUpperCaseLetter, pickOneSpecialCharacterLetter, pickOneNumber)
    return finalPassword
  }
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
  
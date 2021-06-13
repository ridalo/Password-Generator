
// 1. handle button click, you need to create a click event using the addEventListener for this generate button
// 2. display - window.prompt() to ask the user for size of the password
// 3. validate - only numbers and size of password, the range  >8 and <128
// 4. prompt- window.confirm()  to ask user for ok or cancel for the type of password
// 5. You need 4 confirms, each confirm represents the type of character in the password
var generatePassword = function () {
    var finalPassword = "" //finalPassword.length
    var passwordoptions = ""
    var lowercase = "abcdefghijklmnopqrstuvwxyz"
    var uppercase = "ABCDEFGHIJKLONOPQRSTUVWXYZ"
    var specialCharcters = "&'*+=-./;:<>?][^\|_}{`~!%$#()"
    var number = "0123456789"
    var passwordLength = parseInt(prompt("How many characters would you like your password to contain?"));
    while (Number.isNaN(passwordLength) || passwordLength<8 || passwordLength>128) {
        var passwordLength = parseInt(prompt("Password Has to be a number between 8 and 128. How long do you want your password to be?"));
    }
   // console.log(passwordsize)
    var isLowerCase = confirm ("Does your password include lowercase?");
    
    var isUpperCase = confirm ("Does your password include Uppercase?");
    
    var isSpecialCharacter= confirm ("Does your password include  special?");
    
    var isNumber = confirm ("Does your password include number?");
    
    // ending 
    if (isLowerCase) {
        passwordoptions += lowercase
        finalPassword += lowercase.charAt(Math.floor(Math.random())*lowercase.length);
    }
    if(isUpperCase){
        passwordoptions += uppercase
        finalPassword += uppercase.charAt(Math.floor(Math.random())*uppercase.length);
    }
    if(isSpecialCharacter){
        passwordoptions += specialCharcters
        finalPassword += specialCharcters.charAt(Math.floor(Math.random())*specialCharcters.length);
    }
    if(isNumber){
        passwordoptions += number
        finalPassword += number.charAt(Math.floor(Math.random())*number.length);
    }
    console.log(passwordoptions)
    for(var i= finalPassword.length; i< passwordLength; i++){
        finalPassword += passwordoptions.charAt(Math.floor(Math.random()*passwordoptions.length));
    }
    console.log(finalPassword)
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
  
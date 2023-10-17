
var passwordLength = 0;
var needLowerCase = true;
var needUpperCase = true;
var neednumbers = true;
var needSpecialCharacter = true;

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
    console.log('Button Clicked');
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword(){
    askQuestions();
    if(validateUserInput()){
        // prepare password
        return "preparing password";
    } else {
        return "You have entered invalid criteria to generate password";
    }

    return "Default Password";
}

function askQuestions(){
    passwordLength = prompt("Enter password length between 8 and 128 characters :");
    console.log(passwordLength);

    needLowerCase = prompt("Do you need to include lower case letters?", true);
    console.log(needLowerCase);

    needUpperCase = prompt("Do you need to include Upper case letters?", true);
    console.log(needUpperCase);

    neednumbers = prompt("Do you nedd to include numbers?", true);
    console.log(neednumbers);

    needSpecialCharacter = prompt("Do you need special character?", true);
    console.log(needSpecialCharacter);

}

function validateUserInput(){
    var isValid = true;
    console.log("Validating User Input");
    if(passwordLength < 8 || passwordLength > 128) {
        isValid = false;
    }
    if(needLowerCase == "false" && needUpperCase == "false" ){
        isValid = false;
    }
    console.log("User Input is " +  isValid);
    return isValid;
}
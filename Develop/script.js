const upperCaseLetters = 'QWERTYUIOPLKJHGFDSAZXCVBNM';
const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const specialCharacter ='#&*%$?£~';


var passwordLength = 0;
var needLowerCase = true;
var needUpperCase = true;
var needNumbers = true;
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
        return createPassword();
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

    needNumbers = prompt("Do you need to include numbers?", true);
    console.log(needNumbers);

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
function createPassword (){
   var lettersInScope = "";
   if (needUpperCase == "true") {
        lettersInScope = lettersInScope + upperCaseLetters;
   }

    if (needLowerCase == "true"){
        lettersInScope = lettersInScope + lowerCaseLetters;
    }

    if (needNumbers  == "true"){
        lettersInScope = lettersInScope + numbers;
    }
  
    if (needSpecialCharacter  == "true") {
        lettersInScope = lettersInScope + specialCharacter;
    }
   
    console.log(lettersInScope);
    var number;
    var password = "";

    for(i = 0; i < passwordLength; i++){
        number = Math.floor(Math.random() * lettersInScope.length);
        console.log(number);
        console.log(lettersInScope.charAt(number));
        password = password + lettersInScope.charAt(number);
        console.log(password);
    }
    return password;

    //console.log(randomValues);
}
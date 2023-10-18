const upperCaseLetters = 'QWERTYUIOPLKJHGFDSAZXCVBNM';
const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const specialCharacter ='#&*%$?£~';


var passwordLength = 8;
var needLowerCase = true;
var needUpperCase = true;
var needNumbers = true;
var needSpecialCharacter = true;

var sliderRange = document.getElementById("sliderange");
var upperCaseCheckbox = document.getElementById("uppercase");
var lowerCaseCheckbox = document.getElementById("lowercase");
var numbersCheckbox = document.getElementById("numbers");
var specialCharacterCheckbox = document.getElementById("specialcharacter");


var sliderRangeValue = document.getElementById("passwordlength");
sliderRangeValue.innerHTML = sliderRange.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
sliderRange.oninput = function() {
    sliderRangeValue.innerHTML = this.value;
}



// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




// Write password to the #password input
function writePassword() {
    console.log('Button Clicked');
    // step 1 : generate password
    var password = generatePassword();

    // step 2: display password
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}

function generatePassword(){
    // step 1: get slider range value for password length
    passwordLength = sliderRangeValue.innerHTML;

    // step 2: check if upper case checkbox is selected
    needUpperCase = upperCaseCheckbox.checked;

    // step 3: check if lower case check box is selected
    needLowerCase = lowerCaseCheckbox.checked;

    // step 4: check if the number check box is selected
    needNumbers = numbersCheckbox.checked;
    // step 5: check if the special character check box is selected
    needSpecialCharacter = specialCharacterCheckbox.checked;
    // step 6: validate that at least one of the lower or upper case box is selected
    if(validateUserInput()){
        // step 7: create random password
        return createPassword();
    } else {
        return "To generate password you must select lower case or upper case or both option";
    }

    return "Default Password";
}


function validateUserInput(){
    var isValid = true;
    console.log("Validating User Input");
    
    if(needLowerCase == false && needUpperCase == false ){
        isValid = false;
    }
    console.log("User Input is " +  isValid);
    return isValid;
}


function createPassword (){
    // step 1: initialise letters in scope with empty string
    var lettersInScope = "";

    // step 2: if upper case check box is selected then include all the upper case letters in password generation
    if (needUpperCase == true) {
            lettersInScope = lettersInScope + upperCaseLetters;
    }
   // step 3: if lower case check box selected then include all the lower case letters in password generation
    if (needLowerCase == true){
        lettersInScope = lettersInScope + lowerCaseLetters;
    }
    //step 4: if number check box selected then include all the numbers in password generation
    if (needNumbers  == true){
        lettersInScope = lettersInScope + numbers;
    }
    // step 5: if special character ckeck box selected then include all the special character in password generation
    if (needSpecialCharacter  == true) {
        lettersInScope = lettersInScope + specialCharacter;
    }
   
    console.log(lettersInScope);
    var number;
    var password = "";

    // step 6: loop through 0 to the password length (range) use has selected
    for(i = 0; i < passwordLength; i++){
        // step 7: Get a Random number, multiply it with letters in scope length and get the floor value of the number
        // this give us a position
        number = Math.floor(Math.random() * lettersInScope.length);
        console.log(number);
        // step 8: retrieve character at that particular position from the letters in scope string
        // for example... QWERTYUIOPLKJHGFDSAZXCVBNM... get 17th character from this string
        console.log(lettersInScope.charAt(number));
        // step 9: add the character (that is randomly selected) into password string
        password = password + lettersInScope.charAt(number);
        console.log(password);
    }
    // step 10: return the password value
    return password;
}



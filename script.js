// PUTTING ALL OF MY RANDOM VALUES INTO AN OBJECT
const randomFunctions = {
  number: randomNumber,
  upper: randomUpper,
  lower: randomLower,
  symbol: randomSymbol
};

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  // assigning variables to propmts
 var passwordLength = prompt("Choose a number between 8 and 128 characters for your password");

 // while loop to avoid the user to select a password with less that 8 characters or more than 128 characters
 while (passwordLength < 8 || passwordLength > 128 ) {
   var passwordLength = prompt("Choose a number between 8 and 128 characters for your password");
 }
 
 var numPassword = confirm("Password with numbers?");
 var capPassword = confirm("Capital letters in your password?");
 var lowerPassword = confirm("Password with lowercase letters?");
 var symPassword = confirm("Password with symbols?");

 // if the user does not want any of the characters for their password they're gonna get the prompts again
 if( !numPassword && !capPassword && !lowerPassword && !symPassword) {
  var numPassword = confirm("Password with numbers?");
  var capPassword = confirm("Capital letters in your password?");
  var lowerPassword = confirm("Password with lowercase letters?");
  var symPassword = confirm("Password with symbols?");
 };
  
 // adding the functions generatePassword values to a variable
  var password = generatePassword(numPassword, capPassword, lowerPassword, symPassword, passwordLength);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// generating the pasword
 function generatePassword(number, upper, lower, symbol, passwordLength){

  //possible password values
  
  let generatedPassword = "";
   const typesOfVariables = number + upper + lower + symbol;

     //  console.log("typesOfVariables: " , typesOfVariables);
   
     // creating an Array of objects to be filtered out when they return with a false value
      // using the filter method to loop through each item based on a true or false value it will filter out anything that is false
   const typesArr = [{number}, {upper}, {lower}, {symbol}].filter
   (item => Object.values(item)[0] );
      // console.log("typesArr: " , typesArr);

     //if the user loops through the prompts twice and doesnt select any type of character for their password this message is gonna appear in the text box
   if (typesOfVariables === 0){
     return "You have to choose at least ONE type of character for your Password";

   }

  // create for loop for the number of values that the user inputs in the prompt
  for(let i = 0; i <= passwordLength - typesOfVariables; i+= typesOfVariables){
    typesArr.forEach(type => {
      const funcName = Object.keys(type)[0];
      console.log("funcName: ", funcName);

      generatedPassword += randomFunctions[funcName]();
    })

  }
  
  console.log(generatedPassword);
  return generatedPassword;
 }



//functions for random values
function randomNumber() {
  const numbers = "0123456789";
return numbers [Math.floor(Math.random() * numbers.length)];
}
// console.log(randomNumber());

function randomUpper() {
  const uppers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
return uppers [Math.floor(Math.random() * uppers.length)];
}
// console.log(randomUpper());

function randomLower() {
  const lowers = "abcdefghijklmnopqrstuvwxyz";
return lowers [Math.floor(Math.random() * lowers.length)];
}
// console.log(randomLower());

function randomSymbol() {
  const Symbols = "!@#$%ˆ&*(){}[]=<>/,.?";
return Symbols [Math.floor(Math.random() * Symbols.length)];
}
// console.log(randomSymbol());
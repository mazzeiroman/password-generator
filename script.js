// TRYING TO PUT ALL OF MY RANDOM VALUES INTO AN OBJECT
const randomFunctions = {
  number: randomNumber,
  upper: randomUpper,
  lower: randomLower,
  symbol: randomSymbol
};


//code given------------------------------------------------------------

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  // assigning variables to propmts
 var passwordLength = prompt("Choose a number between 8 and 128 characters for your password");

 while (passwordLength < 8 || passwordLength > 128 ) {
   var passwordLength = prompt("Choose a number between 8 and 128 characters for your password");
 }
 
 var numPassword = confirm("Password with numbers?");
 var capPassword = confirm("Capital letters in your password?");
 var lowerPassword = confirm("Password with lowercase letters?");
 var symPassword = confirm("Password with symbols?");

 if( !numPassword && !capPassword && !lowerPassword && !symPassword) {
  var numPassword = confirm("Password with numbers?");
  var capPassword = confirm("Capital letters in your password?");
  var lowerPassword = confirm("Password with lowercase letters?");
  var symPassword = confirm("Password with symbols?");
 };
  
  var password = generatePassword(numPassword, capPassword, lowerPassword, symPassword, passwordLength);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



//code given------------------------------------------------------------


// generating the pasword
 function generatePassword(number, upper, lower, symbol, passwordLength){

  //possible password values
  
  let generatedPassword = "";
   const typesCount = number + upper + lower + symbol;

     //  console.log("typesCount: " , typesCount);
   
     // creating an Array of objects to be filtered out when they return with a false value
   const typesArr = [{number}, {upper}, {lower}, {symbol}].filter(
     item=> Object.values(item)[0]
   );
     //  console.log("typesArr: " , typesArr);
   if (typesCount === 0){
     return "You have to choose at least ONE type of character for your Password";

   }

  // create for loop character pass
  for(var i=0; i <= passwordLength - typesCount; i+= typesCount){
    typesArr.forEach(type => {
      const funcName = Object.keys(type)[0];
      // console.log("funcName: ", funcName);

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

function randomUpper() {
  const uppers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
return uppers [Math.floor(Math.random() * uppers.length)];
}

function randomLower() {
  const lowers = "abcdefghijklmnopqrstuvwxyz";
return lowers [Math.floor(Math.random() * lowers.length)];
}

function randomSymbol() {
  const Symbols = "!@#$%ˆ&*(){}[]=<>/,.?";
return Symbols [Math.floor(Math.random() * Symbols.length)];
}

// console.log(randomSymbol());
// Assignment code here
var password = '';
var charset = [];


var uppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',]
var number = [0,1,2,3,4,5,6,7,8,9];
var specialcharacters = ['!','@','#','$','%','^','&','*','(',')','~','<','>'];


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  var passwordlength = prompt("Select password length within 8-128 characters");
  if(passwordlength >= 8 && passwordlength <= 128){
    confirmChar();

  }
}

function confirmChar(){
  if (confirm("Include Uppercase?")){
    charset = charset.concat(uppercase);
  }

  if (confirm("Include Lowercase?")){
    charset = charset.concat(lowercase);
  }

if (confirm("Include Numbers?")){
    charset = charset.concat(number);
  }

if (confirm("Include Special Characters?")){
    charset = charset.concat(specialcharacters?);
  }
}







// Write password to the #password                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          rd input
function writePassword() {
  var password = generatePassword('');
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

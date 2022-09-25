// Assignment Code
var generateBtn = document.querySelector("#generate");

// created variables for series of prompt/confirm boxes to determine user's needs for password
function generatePassword(){
    var howLong = prompt("Please input the length for your password using numerical values (8-128 characters)");
   
    // making sure user stays within proper amount of characters

    if(howLong < 8 || howLong > 128){
    alert("Please select between 8-128 characters using numerical values")
    return
   };

// prompts

   var wantLowercase = confirm("Do you want Lowercase letters in your password?");
   var wantUppercase = confirm("Do you want Uppercase letters in your password?");
   var wantNumbers = confirm("Do you want Numbers in your password?");
   var wantSpecial = confirm("Do you want Special Characters in your password?");

// arrays for password criteria to be generated

   var allLowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
   var allUppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
   var allNumbers = ["0","1","2","3","4","5","6","7","8","9"];
   var allSpecials = ["!","@","#","$","%","^","&","*","=","+","~","<",">","?"];

   var pwPrefs = [];

//    Keeping this here for reference of how i figured out how to capitalize all the letters in the letter array for the uppercase one
//    var caps =allLowercase.map(function(x){ return x.toUpperCase(); })
//    console.log(caps);

   if(wantLowercase === true){
    pwPrefs.push(allLowercase)
   };
   if(wantUppercase === true){
    pwPrefs.push(allUppercase)
   };
   if(wantNumbers === true){
    pwPrefs.push(allNumbers)
   };
   if(wantSpecial === true){
    pwPrefs.push(allSpecials)
   };

   var pwGen = "";
// random whole number generator (found this formula on W3schools Javascript Random page)

   function randomWholeInt(min, max){
    return Math.floor(Math.random()*(max-min + 1) + min)
   };
// function here will be used to get a random array and a random item in that array, the  -1 is because of the whole value starting at 0 thing
   function getRandomitem(item) {
    return item[randomWholeInt(0, item.length - 1)]
   };

   for (var i = 0; i < howLong; i++){
    var randomArray = getRandomitem(pwPrefs);
    var randomValue = getRandomitem(randomArray);

    console.log(randomValue);
   }
   
   
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

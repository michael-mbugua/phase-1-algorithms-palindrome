function isPalindrome(word){
  var re = /[\W_]/g;
  let lowerWord = word.toLowerCase().replace(re, "");
  let reverseWord = lowerWord.split("").reverse().join("");
  if (lowerWord === reverseWord) {
    return true;
  }
  else {
    return false;
  }
}

/*
  Add your pseudocode here
unction isPalindrome(word) {
  var re = /[\W_]/g;
  let lowerWord = word.toLowerCase().replace(re, "");
  let reverseWord = lowerWord.split("").reverse().join("");
  if (lowerWord === reverseWord) {
    return true;
  }
  else {
    return false;
  }
}
*/

/*
  lowercase string and remove unwanted expressions using RegExp
  split the lowercase word to array then reverse array then join the array to string
  use conditional statements to compare the two strings
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
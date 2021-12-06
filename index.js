function isPalindrome(word) {
  const charArr = word.split('');

  for (let c of charArr) {
    if (c !== charArr.pop()) {
      return false;
    }
  }
  return true
}

/* 
  Accept the string; compare the letters; return true or false based if same forward as backward
*/

/*
  Declare the function isPalindrome(word); split the string at each character and make a comparison; return a boolean based on comparison 
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

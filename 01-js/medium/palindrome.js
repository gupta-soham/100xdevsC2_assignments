/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.toLowerCase();

  // Primitive Solution 👇
  // for (let i = 0; i < str.length/2; i++) 
  //   if (str[i] !== str[str.length-1-i]) 
  //     return false;

  // return true;

  // Alternatively [Works with spaces in between]
  const spaces = str.toLowerCase().replace(/[^a-zA-Z]/g, ''); // To remove the spaces & punctuations 
  return spaces === spaces.split('').reverse().join('');
}

module.exports = isPalindrome;

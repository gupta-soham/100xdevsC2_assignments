/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {

    let vowel = 0;
    // Primitive solution 👇
    // str = str.toLowerCase();
    // for (let i=0; i<str.length; i++)
    //   if (str[i] === 'a' | str[i] === 'e' | str[i] === 'i' | str[i] === 'o' | str[i] == 'u')
    //     vowel++;
        
    // return vowel;

    // Alternate Solution
    const vowels = "aeiouAEIOU";

    for (const char of str) 
      if (vowels.includes(char)) 
        vowel++;

    return vowel;

    // Using RegEx
    // return (str.match(/[aeiouAEIOU]/g) || [].length);
                // Expansion 👇
    // const vowelRegex = /[aeiouAEIOU]/g;
    // const matches = str.match(vowelRegex);
    // return matches ? matches.length : 0;
}

module.exports = countVowels;
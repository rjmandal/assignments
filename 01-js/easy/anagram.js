/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  str1 =str1.replace(/[^a-zA-Z!]/g,"").toLowerCase();
  str2 =str2.replace(/[^a-zA-Z!]/g,"").toLowerCase();
  let array1 =str1.split('').sort();
  let array2 = str2.split('').sort();
  if(array1.length !== array2.length){
    return false;
  }
  return array1.join('')===array2.join('');
}

module.exports = isAnagram;

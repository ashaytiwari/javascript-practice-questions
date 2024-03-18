// Check whether two strings are anagrams of each other using sorting
// Time Complexity: O(N * logN), Space Complexity: O(1)
function checkAnagramI(string1, string2) {

  if (string1.length !== string2.length) {
    return console.log('Not an anagram');
  }

  const string1Array = string1.split('');
  const string2Array = string2.split('');

  string1Array.sort();
  string2Array.sort();

  if (string1Array.join('') === string2Array.join('')) {
    console.log('Anagram');
  } else {
    console.log('Not an anagram');
  }

}

checkAnagramI('listen', 'silent');
checkAnagramI('deftys', 'abcdef');

// Check whether two strings are anagrams of each other by counting frequency
// Time Complexity: O(N), Space Complexity: O(1)
function checkAnagramII(string1, string2) {

  if (string1.length !== string2.length) {
    return console.log('Not an anagram');
  }

  const NO_OF_CHARS = 256;

  let count1Array = new Array(NO_OF_CHARS);
  let count2Array = new Array(NO_OF_CHARS);

  for (let i = 0; i < NO_OF_CHARS; i++) {
    count1Array[i] = 0;
    count2Array[i] = 0;
  }

  for (let i = 0; i < string1.length && i < string2.length; i++) {
    count1Array[string1[i].charCodeAt(0)]++;
    count2Array[string2[i].charCodeAt(0)]++;
  }

  let count = 0;

  for (let i = 0; i < NO_OF_CHARS; i++) {
    if (count1Array[i] !== count2Array[i]) {
      count++;
      break;
    }
  }

  if (count > 0) {
    console.log('Not an anagram');
  } else {
    console.log('Anagram');
  }

}

checkAnagramII('listen', 'silent');
checkAnagramII('deftys', 'abcdef');
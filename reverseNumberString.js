// reversing a number
function reverseNumber(number) {
  let reverse = 0;

  while (number > 0) {
    reverse = reverse * 10 + number % 10;
    number = Math.floor(number / 10);
  }

  return reverse;
}

console.log(reverseNumber(12345));

// First approach: reversing string with brute approach
// Time Complexity: O(n²), Space Complexity: O(n)
function reverseStringI(string) {
  let reversedString = '';

  for (let char of string) {
    reversedString = char + reversedString;
  }

  console.log(reversedString);
}

reverseStringI('ashay tiwari');

// Second approach: reversing string with stack
// Time Complexity: O(n), Space Complexity: O(n)
function reverseStringII(string) {

  const stack = [];
  const reversedStack = [];
  let reversedString = '';

  for (let char of string) {
    stack.push(char);
  }

  while (stack.length > 0) {
    reversedStack.push(stack.pop());
  }

  for (let item of reversedStack) {
    reversedString += item;
  }

  console.log(reversedString);
}

reverseStringII('ashay tiwari');

// Third approach: reverse string with two pointers approach
// Time Complexity: O(n), Space Complexity: O(n)
function reversedStringIII(string) {
  let characters = string.split('');
  let start = 0;
  let end = characters.length - 1;

  while (start < end) {
    swap(characters, start, end);
    start += 1;
    end -= 1;
  }

  const reversedString = characters.join('');
  console.log(reversedString);
}

function swap(characters, start, end) {
  // using destructuring assignment to swap the characters
  [characters[start], characters[end]] = [characters[end], characters[start]];
}

reversedStringIII('ashay tiwari');
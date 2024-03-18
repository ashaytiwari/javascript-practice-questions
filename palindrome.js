function checkPalindromeString(text) {

  const reversedString = text.split('').map((item) => item.toLowerCase()).reverse().join('');

  if (text.toLowerCase() === reversedString) {
    console.log(text + ' is Palindrome');
  } else {
    console.log(text + ' is not Palindrome');
  }

}

checkPalindromeString('Ashay');
checkPalindromeString('Minim');

function checkPalindromeNumber(number) {

  const reverse = reverseNumber(number);

  if (number === reverse) {
    console.log(number + ' is Palindrome');
  } else {
    console.log(number + ' is not Palindrome');
  }

}

function reverseNumber(number) {
  let reverse = 0;

  while (number > 0) {
    reverse = reverse * 10 + number % 10;
    number = Math.floor(number / 10);
  }

  return reverse;
}

checkPalindromeNumber(10101);
checkPalindromeNumber(1234);
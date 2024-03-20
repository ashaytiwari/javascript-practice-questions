const array = [2, 5, 1, 7, 9, 0, 4, 11];

// find the missing numbers from the given array
// Time Complexity: O(n²), Space Complexity: O(n)
function findMissingNumbers(_array) {

  _array.sort((a, b) => a - b);

  const missingNumbers = [];
  const maximumNumber = _array[_array.length - 1];

  for (let i = 0; i < maximumNumber; i++) {

    if (_array.includes(i) === false) {
      missingNumbers.push(i);
    }

  }

  console.log(missingNumbers);

}

findMissingNumbers(array);

const array2 = [1, 2, 4, 6, 8, 3, 7];

// find the missing number from the given array:
// Using summation of first N natural numbers
// Time Complexity: O(n), Space Complexity: O(1)
function findMissingNumberI(_array) {

  _array.sort((a, b) => a - b);

  const maximumNumber = _array[_array.length - 1];
  let missingNumber = null;

  const sumOfNNaturalNumber = (maximumNumber * (maximumNumber + 1)) / 2;
  const sumOfArrayValues = _array.reduce((total, item) => {
    return total + item;
  });

  missingNumber = sumOfNNaturalNumber - sumOfArrayValues;
  console.log(missingNumber);

}

findMissingNumberI(array2);

// find the missing numbers from the given array:
// Time Complexity: O(n), Space Complexity: O(n)
function findMissingNumbersII(_array) {

  _array.sort((a, b) => a - b);

  const length = _array[_array.length - 1];
  const tempArray = [];
  const missingNumbers = [];

  // setting all items of tempArray as 0
  for (let i = 0; i < length; i++) {
    tempArray[i] = 0;
  }

  // set tempArray item to 1 for the index i.e. _array[i]
  for (let i = 0; i < _array.length; i++) {
    if (tempArray[_array[i]] === 0) {
      tempArray[_array[i]] = 1;
    }
  }

  // push items to missingNumbers array for tempArray[i] === 0
  for (let i = 0; i < length; i++) {
    if (tempArray[i] === 0) {
      missingNumbers.push(i);
    }
  }

  console.log(missingNumbers);
}

findMissingNumbersII(array);
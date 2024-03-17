function myFlat(arr, depth = 1, flattenedArray = []) {

  // if depth is smaller than 0, then simply push that element beside of its type
  if (depth < 0) {
    flattenedArray.push(arr);
  } else {
    // [3, 4]
    for (let i = 0; i < arr.length; i++) {
      let element = arr[i];

      // if element is not of array type, simply push into flattenedArray
      if (Array.isArray(element) === false) {
        flattenedArray.push(element);
      } else {
        // call same function again with array element, reduced depth and flattenedArray
        myFlat(element, depth - 1, flattenedArray);
      }

    }

  }

  return flattenedArray;
}

Array.prototype.myFlat = function (depth) {
  const flattenedArray = myFlat(this, depth);
  return flattenedArray;
}

const array = [1, [2, [3, 4]], 5, [6, 7], 8, [9, 10]];
console.log(array.myFlat(1));
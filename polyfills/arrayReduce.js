Array.prototype.myReduce = function (callback, initialValue = 0) {

  let calcValue = initialValue;

  for (let i = 0; i < this.length; i++) {
    calcValue = callback(calcValue, this[i], i, this);
  }

  return calcValue;

}

const _array = [1, 2, 3, 4, 5];

const sumOfSquares = _array.myReduce((calcValue, currentValue, index, arr) => {
  return calcValue + currentValue ** 2;
});

console.log(sumOfSquares);
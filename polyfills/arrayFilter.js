Array.prototype.myFilter = function (callback) {

  const output = [];

  for (let i = 0; i < this.length; i++) {

    const check = callback(this[i], i, this);

    if (check === true) {
      output.push(this[i]);
    }

  }

  return output;

};

const _array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenArray = _array.myFilter((item) => item % 2 === 0);

const oddArray = _array.myFilter((item) => item % 2 !== 0);

console.log(evenArray, oddArray);
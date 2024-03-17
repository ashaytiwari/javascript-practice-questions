Array.prototype.myMap = function (callback) {

  const array = [];

  for (let i = 0; i < this.length; i++) {
    array.push(callback(this[i], i, this));
  }

  return array;
}

const _array = [1, 2, 3, 4, 5];
const userArray = [{ firstName: 'Ashay', lastName: 'Tiwari' }, { firstName: 'Ashish', lastName: 'Tiwari' }, { firstName: 'Mayank', lastName: 'Tiwari' },]

const newArray = _array.myMap((item, index, array) => {
  return item * 10;
});

const userFullNameArray = userArray.myMap((item, index) => {
  return `${item.firstName} ${item.lastName}`;
});

console.log(newArray, userFullNameArray);
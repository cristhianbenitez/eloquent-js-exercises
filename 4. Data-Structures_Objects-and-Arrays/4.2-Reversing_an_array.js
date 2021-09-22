/* Write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. 
The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument by reversing its elements. Neither may use the standard reverse method. */

const arr = [1, 3, 5, 7, 9];

const arrayOfNum = [1, 3, 5, 8];

function reverseArray(arr) {
  const reversedArr = [];
  for (let i = 0; i < arr.length; i++) reversedArr.unshift(arr[i]);
  return reversedArr;
}

function reverseArrayInPlace(arr) {
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    let result = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = result;
  }
  return arr;
}

console.log(reverseArray(arrayOfNum)); //[ 8, 5, 3, 1 ]
console.log(reverseArrayInPlace(arrayOfNum)); //[ 8, 5, 3, 1 ]

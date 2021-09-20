/* EXERCISE
Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.
Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the example program and see whether it does indeed return 55. 


As a bonus assignment, modify your range function to take an optional third argument that indicates the “step” value used
when building the array. If no step is given, the elements go up by increments of one, corresponding to the old behavior.
The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure it also works with negative step values so that
range(5, 2, -1) produces [5, 4, 3, 2]. */

function range(num1, num2) {
  const arr = [];
  for (let i = num1; i < num2 + 1; i++) {
    arr.push(num1++);
  }
  return arr;
}

function sum(arrOfNum) {
  let result = 0;
  for (num of arrOfNum) {
    result += num;
  }
  return result;
}

console.log(range(1, 10)); //[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
console.log(range(5, 2, -1)); //[ 5, 4, 3, 2 ]

//Bonus
/* also if there is no step just kept adding one to the array until it reachs the num2 */
function range(num1, num2, step) {
  const arr = [];
  if (num1 > num2 && step) {
    for (let i = num1; i >= num2; i += step) arr.push(i);
  } else if (num1 <= num2 && step) {
    for (let i = num1; i <= num2; i += step) arr.push(i);
  } else {
    for (let i = num1; i <= num2; i++) arr.push(i);
  }
  return arr;
}

console.log(range(20, 2, -2)); //[ 20, 18, 16, 14, 12, 10, 8, 6, 4, 2 ]

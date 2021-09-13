//EXERCISE
/* The previous chapter introduced the standard function Math.min that returns its smallest argument.
 We can build something like that now. Write a function min that takes two arguments and returns their minimum.*/

//SOLUTION

function min(num1, num2) {
  if (num1 < num2) return num1;
  else if (num1 > num2) return num2;
  else return num1, num2;
}

console.log(min(2, 8));

console.log(min(5, 2)); // 2
console.log(min(14, 25)); // 14
console.log(min(85, 65)); // 65

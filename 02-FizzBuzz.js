//EXERCISE:
// Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" insted of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.
// When you have that working, modify your program to print "FizzBuzz" for numbers that are divisble by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).

// SOLUTION:
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 !== 0) {
    console.log('Fizz');
  } else if (i % 5 === 0 && i % 3 !== 0) {
    console.log('Buzz');
  } else if (i % 3 === 0 && i % 5 === 0) {
    console.log('FizzBuzz');
  } else {
    console.log(`${i}`);
  }
}

// Another solution from the same exercise from:
// https://leetcode.com/problems/fizz-buzz/

function fizzBuzz(n) {
  let answer = [];
  for (let i = 0; i <= n; i++) {
    if (i % 3 === 0 && i % 5 !== 0) {
      answer[i] = 'Fizz';
    } else if (i % 5 === 0 && i % 3 !== 0) {
      answer[i] = 'Buzz';
    } else if (i % 3 === 0 && i % 5 === 0) {
      answer[i] = 'FizzBuzz';
    } else {
      answer[i] = `${i}`;
    }
  }
  return answer.slice(1);
}
// fizzBuzz(15) = [ '1','2','Fizz','4','Buzz','Fizz','7','8','Fizz','Buzz','11','Fizz','13','14','FizzBuzz' ]

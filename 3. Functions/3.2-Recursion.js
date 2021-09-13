//EXERCISE
/* We’ve seen that % (the remainder operator) can be used to test whether a 
number is even or odd by using % 2 to see whether it’s divisible by two. 
Here’s another way to define whether a positive whole number is even or odd:

Zero is even.
One is odd. 
For any other number N, its evenness is the same as N - 2. 

Define a recursive function isEven corresponding to this description. 
The function should accept a single parameter (a positive, whole number) and return a Boolean.

Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?
  */

//SOLUTION
function isEven(num) {
  if (num === 0) return true;
  else if (num === 1) return false;
  else if (num < 0) return isEven(-num);
  else return isEven(num - 2);
}

console.log(isEven(5));
console.log(isEven(2));
console.log(isEven(-1));

/* 
Explanation:
Only 0 is even and 1 is odd 
The recursion runs the function and keeps reducing the numbers by 2 until finds either 0 or 1,  
Example = 

isEven(10)
return isEven(num - 2)
  isEven(8)
  return isEven(num - 2)
    isEven(6)
    return isEven(num - 2)
      isEven(4)
      return isEven(num - 2)
        isEven(2)
        return isEven(num - 2)
          isEven(0)
          return true  //it's even
*/

/* in the case of negative numbers
isEven(-5)
return  return isEven(-num)  //the negative number it's converted as positive so we keep going with the recursion
  isEven(5) 
  return isEven(num - 2)
    isEven(3)
    return isEven(num - 2)
      isEven(1)
       return false  //it's odd
       


*/

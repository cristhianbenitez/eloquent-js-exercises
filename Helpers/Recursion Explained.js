/* Explanation to help understand recursion */
// EXERCISE

//COUNTING WITH RECURSION

function sum(first, last) {
  if (first == last) return last;
  else return first + sum(first + 1, last);
}
console.log(sum(1, 10)); //55

/*
if first equals last return last 
the function will run until the first integer equals the last and then the function gets out of the recursion
else starts the recursion 

  sum(1,10)
  return 1 + 2
      sum(3,10)
      return 3 + 3
        sum(4,10)
        return 4 + 6 
          sum(5,10)
          return 5 + 10
            sum(6,10)
            return 6 + 15
              sum(7,10)
                return 7 + 21
                  sum(8,10)
                  return 8 + 28
                    sum(0,10)
                    return 9 + 36
                      sum(10,10)
                      return 10 + 45
  sum(10,10)
  return 10
  */

// Counting with a for loop

function sum2(first, last) {
  sum = 0;
  for (let j = first; j <= last; j++) {
    sum += j;
  }
  return sum;
}
console.log(sum2(1, 10)); //55

//
/*

j  increment by 1 until reach 10 and then stop
every time j increment sum add j 
      sum= 0
      j = 1
        sum += j (0 + 1)
        sum= 1
        j = 2
          sum+= j (1 + 2 )
          sum= 2
          j = 3
            sum+= j (3 + 3 )
            sum= 6
            j = 4
              sum+= j (6 + 4 )
              sum= 10
              j = 5
                sum+= j (10 + 5 )
                sum= 15
                j = 6
                  sum+= j (15 + 6 )
                  sum= 21
                  j = 7
                    sum+= j (21 + 7 )
                    sum= 36
                    j = 8
                      sum+= j (36 + 8 )
                      sum= 45
                      j = 9
                          sum+= j (45 + 10 )
                          sum= 55
                          j = 10

      now j reached 10 and stop and return the sum

      return sum  (55)
    
    */

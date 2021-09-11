// CHESSBOARD
// EXERCISE

/* Write a program that creates a string that represents an 8x8 grid, using newline characters to separate lines.
 At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.

 Passing this string to console.log should show something like this:

    # # # #
    # # # #
    # # # #
    # # # #
    # # # #
    # # # #
    # # # #
    # # # #

 When you have a program that generates this pattern, define a binding size = 8 and change the program
 so that i works for any size, outputting a grid of the given width and height */

//SOLUTION

//FOR LOOP
const width = 8;
const height = 8;
let board = '';

for (let i = 0; i < height; i++) {
  for (let j = 0; j < width; j++) {
    if ((i + j) % 2 === 0) {
      board += '  ';
    } else {
      board += '# ';
    }
  }
  board += '\n';
}

//WHILE LOOP
let i = 0;
while (i < height) {
  let j = 0;
  while (j < width) {
    j++;
    if ((i + j) % 2 === 0) {
      board += '  ';
    } else {
      board += ' #';
    }
  }
  i++;
  board += '\n';
}

/* Short explanation for my self */
/* The variable i is initializes to 0. The control goes to the while/for loop, and evaluate the condition ( i < height(8) ), and if it is true, 
then the program control goes to the inner loop. Once execution of the inner loop is done, the outer loop increment (i++), and after incrementing 
the 'i' value the condition ( i <  height (8) ) evaluate again, if the condition is true, the program control goes to the inner loop and these steps 
repeat until the condition of the outer loop is true. */

/*CONSOLE.LOG(
    #   #   #   #
  #   #   #   #
    #   #   #   #
  #   #   #   #
    #   #   #   #
  #   #   #   #
    #   #   #   #
  #   #   #   #
) */
// empty space is the white player and the # is the black player

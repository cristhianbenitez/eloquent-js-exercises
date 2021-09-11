//EXERCISE:
//Write a loop that makes seven calls to console.log to output the following code
// #
// ##
// ###
// ####
// #####
// ######
// #######

//SOLUTION:

let str = '';
// FOR LOOP:

for (let i = 0; i < 7; i++) {
  str += '#';
  console.log(str);
}
// SHORTER FOR LOOP

for (let str = '#'; str.length <= 7; str += '#') {
  console.log(str);
}

//WHILE LOOP:

while (str.length < 7) {
  str += '#';
  console.log(str);
}

//DO...WHILE:
do {
  str += '#';
  console.log(str);
} while (str.length < 7);

/*
 * Variables, Data Types, and Typing
 */

//              0  1  2  3  4
let ourArray = [1, 2, 3, 4, ['a', 'b', 'c']];
console.log(ourArray[3] === 4);

/*
 * Variables, Data Types, and Typing
 */

//              0  1  2  3  4  5  6  7  8
let ourArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let arrLen = ourArray.length;
for(let i = 0; i<arrLen; i++) {
    console.log("i is equal to: " + i);
    console.log(ourArray[i][j]);
    for(let j = 0; j < 10; j++) {
        console.log('j is equal to: ' + j);
    }
}
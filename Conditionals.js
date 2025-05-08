/*
 * Variables, Data Types, and Typing
 */

// Equals
let equals = 1 === 1;
console.log(equals);

// Greater than
let greaterThan = 5 > 1;

// Less than
let lessThan = 2 < 10;

// Greater than
let greaterThanEq = 5 >= 5;

// Less Than Equals
let lessThanEq = 4 <= 9;

// Not Equals
let notEquals = 5 !== 2;

/*
 * Variables, Data Types, and Typing
 */

let storeA = 2.40;
let storeB = 3.40;

function compareStorePrices(storeA, storeB) {
    let storeAIsLower = storeA < storeB;
    if (storeAIsLower) {
        console.log("Store A has a lower price.")
    } else {
        console.log("Store B has a lower price.")
    }
}

/*
 * Variables, Data Types, and Typing
 */

let storeAIsLower = storeA < storeB;

if (storeAIsLower) {
    console.log("Store A has a lower price.")
} else if (storeB < storeA) {
    console.log("Store B has a lower price.")
} else {
    console.log("Their prices are equal.")
}

compareStorePrices(10, 5);
compareStorePrices(7, 10);

function squareNum (number) {
    return number * number;
}
console.log(squareNumber);


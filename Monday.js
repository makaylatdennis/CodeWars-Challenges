// Monday Problem 
// Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):
//Example: (Input1, Input2 -->Output)

// create a function that accepts two parameters that will take the sum of two integers 
// first we have to evaluate whether or not 

function sumStr(a, b) {
    let val1 = a === "" ? "0" : a;
    let val2 = b === "" ? "0" : b;

    let sum = parseInt(val1) + parseInt(val2);

    return sum.toString();
}

console.log (sumStr(3,4))
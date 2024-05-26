//I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

// create a function that accepts two arrays 
// create a code block that will add the two
//return the sum


function sumFunction (arr1, arr2){
    output = 0;
    for(i=0; i<arr1.length; i++){
        output+= arr1[i]
    }
    for(i=0; i<arr2.length; i++){
        output+= arr2[i]
    }
    return output
}

let arr1 = [1, 2, 3, 4];

let arr2 = [1, 2, 3, 4];

console.log(sumFunction(arr1, arr2))


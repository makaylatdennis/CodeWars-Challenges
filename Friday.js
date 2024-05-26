// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 

// create a function 
// within the function square each number 
// add each square 
// return sum 

function square(arr){
    output=0
    for(i=0; i<arr.length; i++){
        output+= arr[i]**2
    }
    return output
    }
    
    console.log(square(arr1))

    // I struggled with this challenge specifically because I did not know how to square numbers in JavaScript, however I recall having a question about squaring on our quiz
    // this challenge helped me learn how square numbers and also a way to sum numbers in arrays together
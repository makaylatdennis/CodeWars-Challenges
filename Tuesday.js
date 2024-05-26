// Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

// Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

//My solution 

//create a function (n,m are variables that may change)
// use conditional statement to evaluate whether n & m are greater than 0 
// if not greater than 0 return 0
// create a statement multiplying n & m for if they are greater than 0 

function paperwork(n, m) {
    if(n<0 || m<0){
      return 0
    } else {
     return n*m
    }
    
  }
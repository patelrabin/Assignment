
const arr =  [3,5,2]
//console.log the maximum number of an array
//expectedd output 5
const maxofarr =Math.max(...arr);
console.log(maxofarr);


//Q2 Remove a specific element 2 from the array. Log the modified array to the console.
// expected output: [3,5]
//const elementToRemove = 2;
arr.splice(2,1);


//Q3 Multiply each element of the array by a constant value 5 and log the modified array to the console.(Not Complet)
//expected output [15,10]


//find intersection (common elements) of arr and arr2
//expected output: [5]
const arr2 = [5, 21, 32];

const intersection = arr.filter(element => arr2.includes(element));

console.log(intersection);
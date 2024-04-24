
const arr =  [3,5,2]
//Q1 calculate length of array and console log (Complet)
//expected output is 3
const lengthofarray = arr.length; 
console.log(lengthofarray);
//(We can also use let when we leter reassign a variable.(Like
//let lengthofarray = arr.length;
//console.log(lengthofarray);)


//Q2 reverse the array and console log (Complet)
//expected output [2,5,3]
const reversearr = arr.reverse(); 
console.log(reversearr);


///Q3 join the array and console log (Complet)
// expected output 352  or 253
const joinarr = arr.join('');
console.log(joinarr);



//Q4 Remove the last element from the array and log the modified array to the console (complet but confused)
arr.pop();
console.log(arr);


// Q5 Check if all elements in the num  are even. Log "All even" or "Not all even" accordingly.(Complet)
const num = [6,4,2,8,10,12]
const allEven = num.every(num => num%2===0);
console.log(allEven);
if(allEven){
    console.log("All Even");
}else{
    console.log("Not All Even");
}




// Find the index of a specific element in the array. Log the index to the console. 
//expected output: 3 (complet)

const allNum = [3, 5, 2, 8, 5];
const searchElement = 2;

const index = allNum.indexOf(searchElement);
console.log(index);

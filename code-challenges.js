// ASSESSMENT 1: Coding practical questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Please read all questions thoroughly
// If you get stuck, please leave comments to help us understand your thought process

// --------------------1) Create a statement that determines if a temperature is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit.
    /* 
    Algorithm:checking temprature
        boiling pooint:=212
        if temperature is less than boiling point do
            print temperature is "below boiling point
        else if temperature is equal to boiling point do
            print temperature is equal to boilin point
        else print temperature is above boiling point
    */

// Create the code and test each of the variables provided. Expected output: "35 is below boiling point", "350 is above boiling point", "212 is at boiling point"
const prompt = require('prompt-sync')()
let temp=prompt("please enter the temperature")
let boilingPoint=212
if(temp<boilingPoint){
    console.log(`${temp} is below boiling point`)
}
else if(temp == boilingPoint){
    console.log(`${temp} is at boiling point`)
}
else{
    console.log(`${temp} is above boiling point`)
}

//var temp = 35
// var temp = 350
// var temp = 212



// --------------------2) Create the code that will combine two arrays and return the length using the variables provided below. Expected output: 10
/* 
Algorithm: merging two arrays
   input=>two arrays
   output=>length of the combined array
    take one array then
    push the elements of another array in to it
    find the length of the merged arry

*/
var myNumbers1 = [3, 7, 0, 36, -9]
var myNumbers2 = [8, -7, 22, 9, 13]
    myNumbers1.push(myNumbers2)
   let merged= myNumbers1.flat()
    console.log(merged.length)
    
// --------------------3) Create the code that will reverse the letters of a string using the test variables provided below. Expected output: "eilrahc", "atled"
    /*
    Algorithm: reverse a given string
    create an empty string
    loop the string starting from string-length to zero
    push each character to the empty string
    */
    let emptyString=""
    let string=prompt("please enter a string")
    for(let i=string.length-1;i>=0;i--){
        emptyString+=string[i]
        }
        console.log(emptyString)
var myString1 = "charlie"
var myString2 = "delta"

// --------------------4) Create a statement that evaluates two numbers and subtracts the smaller number from the larger number using the two sets of test variables provided below. Expected output: 15, 12
/* 
Algorithm:subtract
        input=> given two numbers
        output=> difference of the two numbers

        take a larger number and subtract the smaller number

*/
let number1=prompt("Enter a number")
let number2=prompt("Enter another number")
console.log(number1-number2)
//var number1 = 42
//var number2 = 27

 //var number1 = 7
 
// var number2 = 19

// --------------------5) Copy/paste your code from #4. Refactor your code to also accept non-number edge cases. Inform your user if the variable is not a number using the two sets of test variables provided below. Expected output: "Your input is not a number", 3
let numberRefactor1=Number(prompt('Enter a number'))
let numberRefactor2=(prompt("Enter another number"))
if(typeof numberRefactor1==="number"&& typeof numberRefactor2!=="number"){
    console.log("your input is invalid")
}else{console.log(numberRefactor1-numberRefactor2)}


//var numberRefactor1 = 42
//var numberRefactor2 = "hello"

// var numberRefactor1 = 27
// var numberRefactor2 = 24

//There was some error I think in the github


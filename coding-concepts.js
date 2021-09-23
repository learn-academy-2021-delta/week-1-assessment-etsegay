// ASSESSMENT 1: Coding conceptual questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Delta 2021"
 console.log(cohort.length)

// a) Your answer:This will log 10
// b) Verify and explain:It is verified by runing it in the terminal.The result is 
//                       10 because space is considered as character when counting length of a string.


// --------------------2) What will this log?

var greeting = "Hello World!"
// console.log(greeting[3])

// a) Your answer:This will log "l"
// b) Verify and explain:It is verified by runing it in teh terminal.The character at index 3
//                       "l" because index starts at zero(0)


// --------------------3) What will this log?

var languages = ["JavaScript", "Ruby", "Python", "C++"]
var index = 1
//console.log(languages[index])

// a) Your answer:"Ruby"
// b) Verify and explain:It is verified by runing it in the terminal.The value at index of
//                       one is "Ruby" because "javascript is at index of zero(0).


// --------------------4) What will this log?

var weekendDays = ["saturday", "sunday"]
//console.log(weekendDays.toUpperCase())

// a) Your answer:Error
// b) Verify and explain:It is verified by runing it in teh terminal.The result was as expected
//                      that is Error because toUpperCase() is a string method while the 
//                      given data type is object.


// --------------------5) What will this log?

var dataTypes = ["number", "string", "Boolean"]
//console.log(typeof dataTypes.length)

// a) Your answer:number
// b) Verify and explain:It is verified by runing in the terminal.The answer was as expected
//                      becasue the dataTypes.length code returns a number and the typeof a
//                     of a number is always number.

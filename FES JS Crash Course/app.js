/**
 * Converting Temperatures
 * 
 * Celsius-to-Fahrenheit formula: 
 * 
 *  F = C x 1.8 + 32
 */

// let celsius = 10;
// let fahrenheit = celsius * 1.8 + 32;

// console.log(fahrenheit);


/**
 * Converting Temperatures
 * 
 * Celsius-to-Fahrenheit formula: 
 * 
 *  F = C x 1.8 + 32
 * 
 * EXAMPLE:
 * convertCelsiusToFahrenheit(0) -> 32
 * convertCelsiusToFahrenheit(10) -> 50
 * convertCelsiusToFahrenheit(30) -> 86
 */

function convertCelsiusToFahrenheit(celsius) {
    return celsius * 1.8 + 32
}

console.log(convertCelsiusToFahrenheit(10))


/**Write a for-loop that loops through 1 to 20
 * If the number is divisible by 3, print "Divisible by 3"
 * If the number is divisible by 5, print "Divisible by 5"
 * If the number is divisible by 3 and 5, print "Divisible by both"
 * If the number is NOT divisible by either 3 or 5, print the number
 * 
 * EXAMPLE:
 * 1 -> 1
 * 2 -> 2
 * 3 -> "Divisible by 3"
 * 4 -> 4
 * 5 -> "Divisible by 5"
 */

for (let i = 1; i <= 20; ++i) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(`${i} -> Divisible by BOTH.`)
    }
    else if (i % 3 === 0) {
        console.log(`${i} -> Divisible by 3.`)
    } 
    else if (i % 5 === 0) {
        console.log(`${i} -> Divisible by 5.`)
    } 
    else {
        console.log(`${i} -> ${i}`)
    }
} 


/**Print out every character from the string:
 * "Adobe Photoshop"
 * 
 * EXAMPLE:
 * 'A'
 * 'd'
 * 'o'
 * ...
 * 'h'
 * 'o'
 * 'p'
 */

let word = 'Adobe Photoshop'

for (i = 0; i < word.length; ++i) {
    console.log(word[i])
}




// let cash = 20
// let price = 40
// let difference = cash - price

// if (cash > price) {
//     console.log(`you paid extra - here\'s ${differnce} change`)
// } else if (cash === price) {
//     console.log(`have a nice day!`)
// } else {
//     console.log(`not enough money - you still owe ${difference * -1} dollars`)
// }


// let cash = 50
// let price = 40
// let isStoreOpen = false

// if (cash >= price || isStoreOpen) {
//     console.log('Print the receipt')
// }


let hot = true

hot ? console.log('It\'s hot outside') : console.log('It\'s cold outside')


let cash = 50
let price = 40
let isStoreOpen = true

let str = cash >= price && isStoreOpen ? "give receipt" : "do not give receipt"
console.log(str)


// let count = 1;

// while (count <= 100) {
//     console.log(count)
//     count = count + 1;
// }


// for (let i = 0; i < 100; i++) {
//     console.log(i + 1);
// }


// DRY = Don't Repeat Yourself
// console.log("Welcome to Microsoft, J.K.")
// console.log("Welcome to Microsoft, David")
// console.log("Welcome to Microsoft, Drake")


// Function Definition:
function welcomePersonToMicrosoft(name) {
    console.log(`Welcome to Microsoft, ${name}`)
}

// Call the function:
welcomePersonToMicrosoft('J.K.')


function fn() {
    return 5
    console.log('my function')
}

console.log(fn());


function sumOfTwoNumbers(num1, num2) {
    return num1 + num2
}

console.log(sumOfTwoNumbers(10, 10));


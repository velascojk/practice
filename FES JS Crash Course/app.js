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


/**
 * Filter out all the 'FAIL' elements in an array
 * 
 * EXAMPLES:
 * ['A+', 'A', 'FAIL'] => ['A+', 'A']
 * ['FAIL', 'FAIL', 'B'] => ['B']
 * ['FAIL'] => []
 */

// let grades = ['A+', 'A', 'FAIL']

// let gradesPass = grades.filter(element => element !== 'FAIL')

// console.log(gradesPass)


/**
 * Filter out all the 'FAIL' elements in an array
 * without using the Array.filter method
 * 
 * EXAMPLES:
 * ['A+', 'A', 'FAIL'] => ['A+', 'A']
 * ['FAIL', 'FAIL', 'B'] => ['B']
 * ['FAIL'] => []
 */

let grades = ['A+', 'A', 'FAIL']
let gradesPass = []

for (let i = 0; i < grades.length; ++i) {
    if (grades[i] !== 'FAIL') {
        gradesPass.push(grades[i])
    }
}

console.log(gradesPass)


/**
 * Turn each element in an array of dollars into cents
 * 
 * EXAMPLES:
 * [1, 5, 10, 3] => [100, 500, 1000, 300]
 * [0, 10, 20] => [0, 1000, 2000]
 */

// let dollars = [1, 5, 10, 3];

// let cents = dollars.map((element) => {
//     return element * 100;
// })

// console.log(cents)

/**
 * Turn each element in an array of dollars into cents
 * without using the map method
 * 
 * EXAMPLES:
 * [1, 5, 10, 3] => [100, 500, 1000, 300]
 * [0, 10, 20] => [0, 1000, 2000]
 */

let dollars = [1, 5, 10, 3]
let cents = []

for (let i = 0; i < dollars.length; ++i) {
    cents.push(dollars[i] * 100)
}

console.log(cents)


let users = [{
    username: 'JK',
    email: 'jkvelasco2018@gmail.com',
    password: 'test123',
    subscriptionStatus: 'VIP',
    discordId: 'Sluggy#007',
    lessonsCompleted: [0, 1]
}, {
    username: 'test',
    email: 'test@gmail.com',
    password: 'test1234',
    subscriptionStatus: 'VIP',
    discordId: 'Test#007',
    lessonsCompleted: [0, 1, 2]
}, {
    username: 'test2',
    email: 'test2@gmail.com',
    password: 'test1234',
    subscriptionStatus: 'VIP',
    discordId: 'Test#007',
    lessonsCompleted: [0, 1, 2]
}]

function login(email, password) {
    for (let i = 0; i < users.length; ++i) {
        if (users[i].email === email) {
            console.log(users[i])
            if (users[i].password === password) {
                console.log('Login Success!')
            }
            else {
                console.log('Password incorrect!')
            }
            return;
        }
    }
    console.log('Could not find email that exsist!')
}

login('jkvelasco2018@gmail.com', 'test123')


/**
 * Create a register function that accepts:
 * - username
 * - email
 * - password
 * - subscriptionStatus
 * - discordId
 * - lessonsCompleted
 * 
 * Inside your register function:
 * 1. Create a user object
 * 2. Push this user object onto the 'users' aray
 */

function register(user) {
        users.push(user);
    }

register({
    username: 'bob', 
    email: 'bob123@gmail.com', 
    password: 'bob123', 
    subscriptionStatus: 'VIP', 
    discordId: 'Bob#0002', 
    lessonsCompleted: [0, 1, 2]})

// Logs new user in  
console.log(users);


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


let arr = [20, 30, 40, 50, 100]

// First element of array:
// console.log(arr[0])

// Last element of array:
// console.log(arr[arr.length - 1])

// Add element onto end of array:
// arr.push(200)

let newArr = arr.filter(element => element < 50)

console.log(newArr)


let loopTest = [1, 2, 3]


for (let i = 0; i < loopTest.length; ++i) {
    console.log(loopTest[i])
}


let arr2 = [1, 4, 9, 16]

let newArr2 = arr2.map((element) => {
    console.log(element)
    return undefined;
})

console.log(newArr2)


// First way of accessing an element
console.log(document.querySelector('#title'))

// Second way of accessing an element
console.log(document.getElementById('title'))

// Change HTML:
document.querySelector('#title').innerHTML += " Hello"

// Change CSS:
document.querySelector('#title').style.fontSize = '32px'


function toggleDarkMode() {
    document.querySelector('body').classList.toggle("dark-theme")
}
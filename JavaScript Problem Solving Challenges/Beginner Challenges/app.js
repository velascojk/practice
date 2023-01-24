/** Q1. Return the Sum of Two Numbers
 * Create a function that takes two arguments as functions and return their sum.
 * 
 * @examples
 * addition(3,2) -> 5
 * addition(-3,-6) -> -9
 * addition(7,3) -> 10
 */

function sumOfTwoNumbers(number, number2) {
    return number + number2
}

console.log(sumOfTwoNumbers(3, 2))
console.log(sumOfTwoNumbers(-3, -6))
console.log(sumOfTwoNumbers(7, 3))


/** Q2. Convert Hours into Seconds
 * Create a function that converts hours into seconds.
 * 
 * @examples
 * hoursIntoSeconds(2) -> 7200
 * hoursIntoSeconds(10) -> 36000
 * hoursIntoSeconds(24) -> 86400
 */

function hoursIntoSeconds(hour) {
    return hour * 3600
}

console.log(hoursIntoSeconds(2))
console.log(hoursIntoSeconds(10))
console.log(hoursIntoSeconds(24))


/** Q3. Calculate the Perimeter of a Rectangle
 * Create a function that takes length and width of a rectangle and return it's perimeter.
 * 
 * @examples
 * calcPerimeter(6, 7) -> 26
 * calcPerimeter(20, 10) -> 60
 * calcPerimeter(2, 9) -> 22
 */

function calcPerimeter(length, width) {
    return 2 * (length + width)
}

console.log(calcPerimeter(6, 7))
console.log(calcPerimeter(20, 10))
console.log(calcPerimeter(2, 9))


/** Q4. Calculate the Area of a Triangle
 * Write a function that takes the base and height of a triangle and return its area.
 * 
 * @examples
 * calcTriangleArea(3, 2) -> 3
 * calcTriangleArea(10, 10) -> 50
 * calcTriangleArea(20, 20) -> 200
 */

function calcTriangleArea(base, height) {
    return 0.5 * (base * height)
}

console.log(calcTriangleArea(3, 2))
console.log(calcTriangleArea(10, 10))
console.log(calcTriangleArea(20, 20))


/** Q5. Extend a String
 * Write a function that accepts a stirng and adds 'Frontend' onto the end of it.
 * 
 * @examples
 * appendFrontned('Apple') -> AppleFrontend
 * appendFrontned('Banana') -> BananaFrontend
 * appendFrontned('Orange') -> OrangeFrontend
 */

function appendFrontned(word) {
    return word + 'Frontend'
}

console.log(appendFrontned('Apple'))
console.log(appendFrontned('Banana'))
console.log(appendFrontned('Orange'))


/** Q6. Greater than 100?
 * Given two numbers, return true if the sum of both numbers is greater than 100. 
 * Otherwise, return false.
 * 
 * @examples
 * sumGreaterThan100(20, 10) -> false
 * sumGreaterThan100(50, 60) -> true
 * sumGreaterThan100(100, -50) -> false
 */

function sumGreaterThan100(num1, num2) {
    return num1 + num2 >= 100
}

console.log(sumGreaterThan100(20, 10))
console.log(sumGreaterThan100(50, 60))
console.log(sumGreaterThan100(100, -50))


/** Q7. Less than or Equal to Zero?
 * Write a function that accepts a number and returns true if it is less than or equal to zero.
 * Otherwise, return false.
 * 
 * @examples
 * lessThanOrEqualToZero(3) -> false
 * lessThanOrEqualToZero(0) -> true
 * lessThanOrEqualToZero(-2) -> true
 */

function lessThanOrEqualToZero(num) {
    return num <= 0
}

console.log(lessThanOrEqualToZero(3))
console.log(lessThanOrEqualToZero(0))
console.log(lessThanOrEqualToZero(-2))


/** Q8. Opposite boolean
 * Given a boolean (true or false), return the opposite boolean.
 * 
 * @examples
 * oppositeBoolean(true) -> false
 * oppositeBoolean(false) -> true
 */

function oppositeBoolean(bool) {
    return !bool
}

console.log(oppositeBoolean(true))
console.log(oppositeBoolean(false))


/** Q9. Is not the number 0
 * Given ANY element, return true if it is NOT the number 0.
 * 
 * @examples
 * isNotZero(5) -> true
 * isNotZero(0) -> false
 * isNotZero(null) -> true
 */

function isNotZero(element) {
    return element !== 0
}

console.log(isNotZero(5))
console.log(isNotZero(0))
console.log(isNotZero(null))


/** Q10. Calculate the remainder
 * Given two numbers, return their remainder when divided by each other.
 * 
 * @examples
 * calcRemainder(4, 2) -> 0
 * calcRemainder(7, 8) -> 7
 * calcRemainder(9, 8) -> 1
 */

function calcRemainder(numb1, numb2) {
    return numb1 % numb2
}

console.log(calcRemainder(4, 2))
console.log(calcRemainder(7, 8))
console.log(calcRemainder(9, 8))


/** Q11. Is the number odd?
 * Given two numbers, return true if the number is odd.
 * 
 * @examples
 * isOdd(1) -> true
 * isOdd(2) -> false
 * isOdd(3) -> true
 */

function isOdd(number3) {
    return number3 % 2 !== 0
}

console.log(isOdd(1))
console.log(isOdd(2))
console.log(isOdd(3))


/** Q12. If a number is even, return 1 otherwise return -1
 * Create a function that takes a number argument and returns 1 if the number is even.
 * If the number is odd return -1.
 * 
 * @examples
 * booleanInteger(1) -> -1
 * booleanInteger(2) -> 1
 * booleanInteger(5) -> -1
 */

function booleanInteger(number4) {
    return number4 % 2 === 0 ? 1 : -1
}

console.log(booleanInteger(1))
console.log(booleanInteger(2))
console.log(booleanInteger(5))


/** Q13. Check if a user is logged in AND subscribed
 * Create a function that takes in two strings.
 * If the first string is equal to 'LOGGED_IN' & the second string is equal to 'SUBSCRIBED' return true,
 * otherwise return false.
 * 
 * @examples
 * isLoggedInAndSubscribed('LOGGED_IN', 'SUBSCRIBED') -> true
 * isLoggedInAndSubscribed('LOGGED_IN', 'UNSUBSCRIBED') -> false
 * isLoggedInAndSubscribed('LOGGED_OUT', 'SUBSCRIBED') -> false
 */

// function isLoggedInAndSubscribed(string1, string2) {
//     return string1 === 'LOGGED_IN' && string2 === 'SUBSCRIBED'
// }

// console.log(isLoggedInAndSubscribed('LOGGED_IN', 'SUBSCRIBED'))
// console.log(isLoggedInAndSubscribed('LOGGED_IN', 'UNSUBSCRIBED'))
// console.log(isLoggedInAndSubscribed('LOGGED_OUT', 'SUBSCRIBED'))


/** Q14. Check if a user is logged in OR subscribed
 * Create a function that takes in two strings.
 * If the first string is equal to 'LOGGED_IN' OR the second string is equal to 'SUBSCRIBED' return true,
 * otherwise return false.
 * 
 * @examples
 * isLoggedInAndSubscribed('LOGGED_IN', 'SUBSCRIBED') -> true
 * isLoggedInAndSubscribed('LOGGED_IN', 'UNSUBSCRIBED') -> false
 * isLoggedInAndSubscribed('LOGGED_OUT', 'SUBSCRIBED') -> false
 */

function isLoggedInAndSubscribed(string3, string4) {
    return string3 === 'LOGGED_IN' || string4 === 'SUBSCRIBED'
}

console.log(isLoggedInAndSubscribed('LOGGED_IN', 'SUBSCRIBED'))
console.log(isLoggedInAndSubscribed('LOGGED_OUT', 'UNSUBSCRIBED'))
console.log(isLoggedInAndSubscribed('LOGGED_OUT', 'SUBSCRIBED'))
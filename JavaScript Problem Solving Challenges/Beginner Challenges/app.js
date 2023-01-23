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


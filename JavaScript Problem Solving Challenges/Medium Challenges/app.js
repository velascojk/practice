/** Q1. Falsy or Truthy?
 * Given two values, return the first one if it is falsy, otherwise return the second one.
 * 
 * @examples
 * filterOutFalsy(0, 500) -> 0
 * filterOutFalsy(false, 100) -> false
 * filterOutFalsy([true, 'Dog']) -> 'Dog'
 */

function filterOutFalsy(value1, value2) {
    return (!value1) ? value1 : value2;
}

console.log(filterOutFalsy(0, 500))
console.log(filterOutFalsy(false, 100))
console.log(filterOutFalsy([true, 'Dog']))


/** Q2. Return the length of any given array
 * Given an array, return its length.
 * 
 * @examples
 * arrLength([1,2,3]) -> 3
 * arrLength([5,0,-4]) -> 4
 * arrLength([]) -> 0
 */

function arrLength(arr) {
    return arr.length
}

console.log(arrLength([1, 2, 3]))
console.log(arrLength([5, 0, -4]))
console.log(arrLength([]))


/** Q3. Get the last element in an array
 * Given an array, return the last element.
 * 
 * @examples
 * lastElem([3, 2, 0, 6, 2]) -> 2
 * lastElem(['dog', 'cat', 'ball']) -> 'ball'
 * lastElem([null, 5, false]) -> false
 */

function lastElem(arr2) {
    return arr2[arr2.length - 1]
}

console.log(lastElem([3, 2, 0, 6, 2]))
console.log(lastElem(['dog', 'cat', 'ball']))
console.log(lastElem([null, 5, false]))


/** Q4. Find the sum of an array
 * Given an array, return the sum of every element.
 * 
 * @examples
 * arrSum([2, 2, 2]) -> 6
 * arrSum([100, 200, 500]) -> 800
 * arrSum([0, -5, -10]) -> -15
 */

function arrSum(arr3) {
    let sum = 0;
    for (let i = 0; i < arr3.length; ++i) {
        sum = sum + arr3[i]
    }
    return sum;
}

console.log(arrSum([2, 2, 2]))
console.log(arrSum([100, 200, 500]))
console.log(arrSum([0, -5, -10]))


/** Q5. Add up the numbers from a single number
 * Given a number, add up all the numbers from one to the number that is given.
 * E.g. An input of 4 will give you 1 + 2 + 3 + 4, which equals 10.
 * 
 * @examples
 * progressiveSum(3) -> 6
 * progressiveSum(4) -> 10
 * progressiveSum(600) -> 180300
 */

function progressiveSum(number) {
    let progressSum = 0
    for (let i = 1; i <= number; ++i) {
        progressSum = progressSum + i;
    }
    return progressSum
}

console.log(progressiveSum(3))
console.log(progressiveSum(4))
console.log(progressiveSum(600))


/** Q6. Calculate the time
 * Given a number in seconds, return this number in mm:ss format.
 * 
 * @examples
 * calcTime(66) -> '01:06'
 * calcTime(50) -> '00:50'
 * calcTime(300) -> '05:00'
 */

function calcTime(seconds) {
    let timerMinutes = Math.floor(seconds / 60);
    let timerSeconds = seconds % 60;

    if (timerMinutes.toString().length === 1) {
        timerMinutes = '0' + timerMinutes
    }
    return timerMinutes + ':' + timerSeconds
}

console.log(calcTime(66))
console.log(calcTime(50))
console.log(calcTime(300))


/** Q7. Find the largest number
 * Given an array of numbers, return the largest number of that array.
 * 
 * @examples
 * getMax([5, 100, 0]) -> 100
 * getMax([12, 10, -20]) -> 12
 * getMax([-300, -100, -200]) -> -100
 */

function getMax(array) {
    let largestNum = array[0];
    for (let i = 0; i < array.length; ++i) {
        if (array[i] > largestNum) {
            largestNum = array[i]
        }
    }
    return largestNum
}

console.log(getMax([5, 100, 0]))
console.log(getMax([12, 10, -20]))
console.log(getMax([-300, -100, -200]))
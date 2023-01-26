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
 * arrLength([5,0,-4, 5]) -> 4
 * arrLength([]) -> 0
 */

function arrLength(arr) {
    return arr.length
}

console.log(arrLength([1, 2, 3]))
console.log(arrLength([5, 0, -4, 5]))
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
    if (timerSeconds.toString().length === 1) {
        timerSeconds = '0' + timerSeconds
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


/** Q8. Reverse a string
 * Given a string, return the reversed string.
 * 
 * @examples
 * reverseString('abc') -> 'cba'
 * reverseString('test') -> 'tset'
 * reverseString('This is cool') -> 'looc si sihT'
 */

function reverseString(str) {
    let reversedString = '';

    for (let i = 0; i < str.length; ++i) {
        reversedString = str[i] + reversedString;
    }
    return reversedString;
}

console.log(reverseString('abc'))
console.log(reverseString('test'))
console.log(reverseString('This is cool'))


/** Q9. Turn every element in an array into 0
 * Given an arary of elements, reutrn the same length array filled with 0's.
 * 
 * @examples
 * convertToZeros([5, 100, 0]) -> [0, 0, 0]
 * convertToZeros([12]) -> [0]
 * convertToZeros([1, 2, 3, 4, 5]) -> [0, 0, 0, 0, 0]
 */

function convertToZeros(arr4) {
    let zeroArray = [];

    for (let i = 0; i < arr4.length; ++i) {
        zeroArray[i]= 0
    }
    return zeroArray
}

console.log(convertToZeros([5, 100, 0]))
console.log(convertToZeros([12]))
console.log(convertToZeros([1, 2, 3, 4, 5]))


/** Q10. Filter out all the apples
 * Given an array of fruits, if it is an apple remove it from the array.
 * 
 * @examples
 * removeApples(['Banana', 'Apple', 'Orange', 'Apple']) -> ['Banana', 'Orange']
 * removeApples(['Tomato', 'Orange', 'Banana']) -> ['Tomato', 'Orange', 'Banana']
 * removeApples(['Banana', 'Orange', 'Apple']) -> ['Banana', 'Orange']
 */

function removeApples(arr5) {
    let noApplesArray = [];

    for (let i = 0; i < arr5.length; ++i) {
        if (arr5[i] !== 'Apple') {
            noApplesArray.push(arr5[i])
        }
    }
    return noApplesArray
}

console.log(removeApples(['Banana', 'Apple', 'Orange', 'Apple']))
console.log(removeApples(['Tomato', 'Orange', 'Banana']))
console.log(removeApples(['Banana', 'Orange', 'Apple']))


/** Q11. Filter out all the falsy values
 * Given an array of values, filter out all the falsy values and only return the truthly values.
 * 
 * @examples
 * filterOutFalsy(["", [], null, undefined, "0"]) -> [[], "0"]
 * filterOutFalsy(['Tomato', 'Orange', 'Banana', false]) -> ['Tomato', 'Orange', 'Banana']
 */

function filterOutFalsy(arr6) {
    let noFalsyArray = [];

    for (let i = 0; i < arr6.length; ++i) {
        if (!!arr6[i]) {
            noFalsyArray.push(arr6[i])
        }
    }
    return noFalsyArray
}

console.log(filterOutFalsy(["", [], null, undefined, "0"]))
console.log(filterOutFalsy(['Tomato', 'Orange', 'Banana', false]))


/** Q12. Truthy to true, Falsy to false
 * Given an array of truthy and falsy values, return the same array of elements into its boolean value.
 * 
 * @examples
 * convertToBoolean([500, 0, "Jan Kevin", "", []]) -> [true, false, true, false, true]
 */

/**For Loop Solution: */

// function convertToBoolean(arr7) {
//     let booleanArray = [];

//     for (let i = 0; i < arr7.length; ++i) {
//         if (!!arr7[i] === true) {
//             booleanArray.push(!!arr7[i])
//         } else if (!!arr7[i] === false) {
//             booleanArray.push(!!arr7[i])
//         }
//     }
//     return booleanArray
// }

/**.map Solution: */

function convertToBoolean(arr7) {
    return arr7.map(elem => !!elem);
}

console.log(convertToBoolean([500, 0, "Jan Kevin", "", []]))
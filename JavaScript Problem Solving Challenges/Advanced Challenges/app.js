/** Q1. Show rating
 * Given a rating, display a star (*) for each full rating and a full-stop (.) for each half rating.
 * 
 * @examples
 * showRating(3) -> "* * *"
 * showRating(4.5) -> "* * * *."
 * showRating(0.5) -> "."
 */

function showRating(rating) {
    let displayRating = "";

    for (let i = 0; i < Math.floor(rating); ++i) {
        displayRating = displayRating + "*"
        if (i !== Math.floor(rating) - 1) {
            displayRating = displayRating + " "
        }
    }
    if (!Number.isInteger(rating)) {
        displayRating = displayRating + " ."
    }
    return displayRating
}

console.log(showRating(3))
console.log(showRating(4.5))
console.log(showRating(0.5))


/** Q2. Sort by lowest to highest price
 * Given an array of numbers, return the prices sorted by low to high.
 * 
 * @examples
 * sortLowToHigh([20, 40, 10, 30, 50, 10]) -> "[10, 10, 20, 30, 40, 50]"
 * sortLowToHigh([5, 10, 0, -5]) -> "[-5, 0, 5, 10]"
 * sortLowToHigh([3, 2, 1, 0]) -> "[0, 1, 2, 3]"
 */

function sortLowToHigh(arr) {
    return arr.sort((a, b) => {
       return a - b
    })
}

console.log(sortLowToHigh([20, 40, 10, 30, 50, 10]))
console.log(sortLowToHigh([5, 10, 0, -5]))
console.log(sortLowToHigh([3, 2, 1, 0]))


/** Q3. Sort by highest to lowest price
 * Given an array of objects, return the prices sorted by high to low.
 * 
 * @examples
 * sortHighToLow([
 * {id: 1, price: 50},
 * {id: 2, price: 30},
 * {id: 3, price: 60},
 * {id: 4, price: 10}
 * ])
 * -> ([
 * {id: 1, price: 60}
 * {id: 2, price: 50}
 * {id: 3, price: 30}
 * {id: 4, price: 10}
 * ])
 */

function sortHighToLow(object) {
    return object.sort((a, b) => {
        return b.price - a.price
    })
}

console.log(
    sortHighToLow([
    {id: 1, price: 50}, 
    {id: 2, price: 30}, 
    {id: 3, price: 60}, 
    {id: 4, price: 10}]))


/** Q4. Find all the posts by a single user
 * Call this API "http://jsonplaceholder.typicode.com/posts" and return all the posts by any given user ID.
 * 
 * @examples
 * postsByUser(4) ->
 */

async function postsByUser(userId) {
    const promise = await fetch("http://jsonplaceholder.typicode.com/posts")

    const result = await promise.json()
    
    const posts = result.filter(element => element.userId === userId)

    console.log(posts)
}

postsByUser(4)


/** Q5. First 6 Incomplete Todos
 * Call this API "http://jsonplaceholder.typicode.com/todos" and return the first 6 incomplete todo's from the result.
 * 
 * @examples
 * firstSixIncomplete()
 */

async function firstSixIncomplete(todos) {
    const todosPromise = await fetch("http://jsonplaceholder.typicode.com/todos")

    const todosResult = await todosPromise.json()

    const incompleteTodos = todosResult.filter(elem => !elem.completed).slice(0, 6)

    console.log(incompleteTodos)
}

firstSixIncomplete(6)
// Creating a mock promise:
const statusRef = document.querySelector('.status')
const videoRef = document.querySelector('.video')

function getSubscriptionStatus() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(undefined)
        }, 2000)
    })
}

// Then:
// getSubscriptionStatus().then(reponse => console.log(reponse))

/**
 * 1. Create a function called `getVideo`
 * 2. Accept a parameter called `subscriptionStatus`
 * 3. Return a new Promise inside of the function that:
 *      -if "VIP" resolve("show video")
 *      -if "FREE" resolve("show trailer")
 *      -otherwise reject("no video")
 * 4. console.log the result of getVideo() in main()
 */

function getVideo(subscriptionStatus) {
    return new Promise((resolve, reject) => {
        if (subscriptionStatus === "VIP") {
            resolve("Show video")
        } else if (subscriptionStatus === "FREE") {
            resolve("Show trailer")
        } else {
            reject("No video")
        }
    })
}

// Async/Await:
async function main() {
    const status = (await getSubscriptionStatus())
    statusRef.innerHTML = status
    try {
        const videoStatus = (await getVideo(status))
        videoRef.innerHTML = videoStatus
    }
    catch (e) {
        videoRef.innerHTML = e;
    }
}

main();


// fetch("https://jsonplaceholder.typicode.com/users/1")
const emailRef = document.querySelector(".email");

// 1. Then
// fetch("https://jsonplaceholder.typicode.com/users/1").then(response => {
//     return response.json()
// }).then(data => {
//     emailRef.innerHTML = data.email;
// })

// 2. Async/Await
// async function main() {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users/1")
//     const data = await response.json()
//     emailRef.innerHTML = data.email;
// }

// main();



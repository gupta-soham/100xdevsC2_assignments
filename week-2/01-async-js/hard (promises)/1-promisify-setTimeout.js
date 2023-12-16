/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    return new Promise((resolve) => {
        setTimeout(() => {
            // console.log("Promise Resolved :)");
            resolve();
        }, n * 1000);
    });

}

// let a=2;
// wait(a).then(() => {
//     console.log("Execution after %d seconds", a);
// })

module.exports = wait;

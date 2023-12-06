/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateTime(n) {
    let startTime = new Date();
    let sum = 0;

    for(let i=0; i<n; i++)
        sum += i;

    const endTime = new Date();
    return (endTime-startTime) / 1000; // converting milliseconds to seconds
}

// Test
// const t1 = calculateTime(100);
// const t2 = calculateTime(100000);
// const t3 = calculateTime(1000000000);

// console.log(`Time for summing 1 to 100: ${t1} seconds`);
// console.log(`Time for summing 1 to 100000: ${t2} seconds`);
// console.log(`Time for summing 1 to 1000000000: ${t3} seconds`);
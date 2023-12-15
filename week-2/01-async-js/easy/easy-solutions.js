// Syntax for setInterval()
// setInterval(function, milliseconds, parameter1, ....paramenterN);

let counter = 0;
const { log } = require('console');
// 1-Counter using setInterval() 👇
// setInterval(() => {
//     counter++;
//     console.log(`${counter}`);
// }, 1000);

// 2-Counter without setInterval 👇
// function Timer() {
//     counter++;
//     console.log(`${counter}`);
//     setTimeout(Timer, 1000); // Recursion
// }
// Timer();

// 3-Reading the contents of a file 👇
const fs = require('fs');
const file = "eg.txt";

// Performing an expensive operation
function performExpensiveOperation() {
    let result = 0;
    for (let i = 0; i < 1e10; i++) {
        result += Math.random();
    }
    return result;
}

// Reading from the file 👇
// fs.readFile('path/to/file.txt', 'utf8', (err, data) => {
fs.readFile(file, 'utf-8', (err, data) => {
    if(err) {
        console.log('Error reading the file:', err);
        return;
    }

    let res = performExpensiveOperation();
    console.log('Result of Expensive Operation:', res);

    console.log('File Contents:\n', data);
});


// 4-Write to a file 👇
// fs.writeFile(file, 'Replaced Successfully!', (err) => {
//     if(err) {
//         console.log('Error writing to the file:', err);
//         return;
//     }
//     console.log('File written successfully!');
// });

    // To Append 👇
    // const append = "\n Appnded Successfully!";
    // fs.appendFile(file, 'Appended Successfully!', (err) => {
    // fs.appendFile(file, append, (err) => {
    //     if(err) {
    //         console.log('Error writing to the file:', err);
    //         return;
    //     }
    //     console.log('File Appended Successfully!');
    // });
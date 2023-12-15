//  1-File Cleaner
const { log } = require('console');
const fs = require('fs');
const file = "editMe.txt";
fs.readFile(file, "utf-8", (err, data) => {
    if(err) {
        console.log('Error reading the file:', err);
        return;
    }
    let contents = "\n"+data;
    console.log('File Contents:', contents);
    
    // Split contents into array of words, Filter out empty strings, join them back together 👇
    // contents = contents.split(" ").filter(word => word !== '').join(" "); 
    contents = contents.replace(/\s+/g, ' '); // Using Regex 
    console.log(contents);

    fs.appendFile(file, contents, (err) => {
        if(err) {
            console.log('Error appending the file:', err);
            return;
        }
        console.log("File Appended Successfully: "+contents);
    })
})



// 2-Clock
// function clock() {
//     let time = new Date();
//     // console.log(new Date().toString());
//     console.log(time.toLocaleTimeString());
// }
// clock()

// setInterval(clock, 1000)

// Standalone approach 👇
// setInterval(() => {
//     console.log(new Date().toLocaleTimeString());
// }, 1000)
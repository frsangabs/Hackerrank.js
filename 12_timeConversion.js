'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    // Write your code here
    
    s.split('')
    
    let hours = parseInt(s[0] + s[1])
    let minutes = s[3] + s[4]
    let seconds = s[6] + s[7]
    let ampm = s[s.length-2]
    
    if(hours >= 12 && ampm === 'A'){
        hours = hours -12
        }else if(hours < 12 && ampm === 'P'){
            hours = hours +12
    }
    
    
    if(hours < 10){
        return (`0${hours}:${minutes}:${seconds}`)
    }else {
        return (`${hours}:${minutes}:${seconds}`)
    }
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}

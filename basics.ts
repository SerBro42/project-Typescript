console.log('Time to get started!')
//This is a comment
//Command to synchronise the code with the browser: nmp start.
//Browsersync should give http://localhost:3000
//First of all, a number type test:
function add(n1: number, n2: number, showResult: boolean, phrase: string) {
    const result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    } else {
        return n1 + n2;
    }
}

let number1 = 5;
let number2 = 2.8;
let printResult = true;
const resultPhrase = 'Result is: ';

add(number1, number2, printResult, resultPhrase);
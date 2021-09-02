const {odd,even} = require('./02-1.module-var')
const checkNumber = require('./02-2.module-func');

function checkStringOddOrEven(str) {
    if(str.length % 2) { //홀수라면
        return odd;
    }
    return even;
}

console.log(checkNumber(10));
console.log(checkStringOddOrEven('hello'));
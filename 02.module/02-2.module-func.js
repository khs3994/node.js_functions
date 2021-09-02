const {odd,even} = require('./02-1.module-var'); //var.js에 작성한 모듈을 require로 불러옴

function checkOddOrEven(num) {
    if(num % 2) {
        return odd;
    }
    return even;
}

module.exports = checkOddOrEven;
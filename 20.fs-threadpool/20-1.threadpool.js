const crypto = require('crypto');

const pass = 'pass';
const salt = 'salt';
const start = Date.now();

crypto.pbkdf2(pass, salt, 1000000, 128, 'sha512', () => {
    console.log('1: ', Date.now() - start);
});

crypto.pbkdf2(pass, salt, 1000000, 128, 'sha512', () => {
    console.log('2: ', Date.now() - start);
})

crypto.pbkdf2(pass, salt, 1000000, 128, 'sha512', () => {
    console.log('3: ', Date.now() - start);
})

crypto.pbkdf2(pass, salt, 1000000, 128, 'sha512', () => {
    console.log('4: ', Date.now() - start);
})

crypto.pbkdf2(pass, salt, 1000000, 128, 'sha512', () => {
    console.log('5: ', Date.now() - start);
})

crypto.pbkdf2(pass, salt, 1000000, 128, 'sha512', () => {
    console.log('6: ', Date.now() - start);
})

crypto.pbkdf2(pass, salt, 1000000, 128, 'sha512', () => {
    console.log('7: ', Date.now() - start);
})

crypto.pbkdf2(pass, salt, 1000000, 128, 'sha512', () => {
    console.log('8: ', Date.now() - start);
})

//실행될 때마다 시간과 순서가 달라짐
//스레드풀이 작업을 동시에 처리하므로 어느것이 먼저 처리 될지 모름
//하지만 규칙이 하나 있음, 1~4와 5~8이 그룹으로 묶여 있음
//기본적인 스레드풀의 개수가 4개이기 때문
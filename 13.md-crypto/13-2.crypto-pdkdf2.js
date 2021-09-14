//단방향 암호화

const crypto = require('crypto');

crypto.randomBytes(64, (err,buf) =>{
    const salt = buf.toString('base64');
    console.log('salt: ', salt);
    crypto.pbkdf2('비밀번호', salt, 100000, 64, 'sha512', (err, key) =>{
        console.log('password: ', key.toString('base64'));
    });
});

//randomBytes() 메서드로 64바이트 길이의 문자열을 만듬(이것이 salt가 됨)
//pdkdf2() 메서드에는 순서대로 비밀번호, salt, 반복횟수, 출력바이트, 해시 알고리즘을 인자로 넣어줌
// 100000번 반복해서 적용한다는 것은 sha512로 변환된 결과값을 다시 sha512f로 변환하는걸 10만번 반복하는것을 말함
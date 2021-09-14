//양방향 암호화

const crypto = require('crypto');

const algorithm = 'aes-256-cbc';
const key = 'abcdefghijklmnopqrstuvwxyz123456';
const iv = '1234567890123456';

const cipher = crypto.createCipheriv(algorithm, key, iv);//암호화 알고리즘과 키,iv를 넣는다. iv는 암호화 할때 사용하는 초기화 벡터를 의미함
let result = cipher.update('암호화할 문장', 'utf8', 'base64');//암호화할 대상과 대상의 인코딩, 출력결과물의 인코딩을 넣는다. 보통 문자열은 utf8을, 암호는 base64를 많이 사용함
result += cipher.final('base64');//출력 결과물의 인코딩을 넣으면 암호화가 완료됨
console.log('암호화: ',result);//암호화된 문장을 출력

const decipher = crypto.createDecipheriv(algorithm, key, iv);//복호화(암호에서 다시 정상으로)할때 사용함, 암호화 할때 사용했던 알고리즘과 키, iv를 그대로 넣어야 한다.
let result2 = decipher.update(result, 'base64', 'utf8');//암호화된 문장, 그 문장의 인코딩, 출력결과물의 인코딩을 넣는다. createCipheriv.update()에서 utf8, base64순으로 넣었다면 여기서는 base64, utf8 순으로 넣으면 된다.
result2 += decipher.final('utf8');//복호화 결과물의 인코딩을 넣는다
console.log('복호화: ',result2);//복호화된 암호의 문장을 출력
//crypto: 다양한 방식의 암호화를 도와주는 모듈
//단방향 암호화
const crypto = require('crypto');

console.log('base64: ', crypto.createHash('sha512').update('비밀번호').digest('base64'));
console.log('hex: ', crypto.createHash('sha512').update('비밀번호').digest('hex'));
console.log('base64: ',crypto.createHash('sha512').update('다른 비밀번호').digest('base64'));
//create(알고리즘): 사용할 해시 알고리즘을 넣어준다.md5,shal,sha256,sha512 등이 가능하지만 md5와 shal은 이미 취약점이 발견됨
//update(문자열): 변환할 문자열을 넣어줌
//digest(인코딩): 인코딩할 알고리즘을 넣어줌. base64,hex,latinl이 주로 사용되는데 그중 base64가 결과문자열이 가장 짧아서 애용됨
//util? 
//각종 편의 기능을 모아둔 모듈

const util = require('util');
const crypto = require('crypto');

const dontUseMe = util.deprecate((x,y) => {
    console.log(x+y);
}, 'dontUseMe 함수는 deprecated되었으니 더 이상 사용하지 마세요!');
dontUseMe(1,2);

const randomBytesPromise = util.promisify(crypto.randomBytes);
randomBytesPromise(64)
    .then((buf) => {
        console.log(buf.toString('base64'));
    })
    .catch((error) => {
        console.log(error);
    });

//util에서 자주 사용되는 두 메서드
//1.util.deprecate: 함수가 deprecate 처리되었음을 알임, 첫 번째 인수로 넣은 함수를 사용했을 때 경고 메시지가 출력됨, 두번째 인수로 경고 메시지 내용을 넣으면 됨
//함수가 조만간 사라지거나 변경될 때 알려줄수 있어서 유용함

//2.util.promisify: 콜백 패턴을 프로미스 패턴으로 바꿈, 바꿀 함수를 인수로 제공하면됨 , 이렇게 바꿔두면 async/await 패턴까지 사용할수 있어 좋음 
//(프로미스를 콜백으로 바꾸는 util.callbackify도 있지만 자주 사용하지 않음)
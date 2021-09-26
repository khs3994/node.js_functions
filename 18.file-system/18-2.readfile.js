const { throws } = require('assert');
const fs = require('fs');

fs.readFile('./18-1.readme.txt', (err,data) => {
    if(err) {
        throw err;
    }
    console.log(data);
    console.log(data.toString());
});

//read 파일의 결과물이 버퍼라는 형식으로 전달됨
//버퍼는 사람이 읽을수 있는 형식이 아니므로
//toString()을 사용해 문자열보 변환함
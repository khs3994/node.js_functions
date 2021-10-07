//강제 에러 발생2
const fs = require('fs');

setInterval(() => {
    fs.unlink('./abcdefg.js',(err) => {
        if(err) {
            console.log(err);
        }
    });
}, 1000);

//존재하지 않는 파일을 지우고 있기 때문에 오류 발생
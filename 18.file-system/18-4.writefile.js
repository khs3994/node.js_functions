const fs = require('fs').promises;

fs.writeFile('./18-5.writeme.txt', '글이 입력됩니다') // 생성될 파일의 경로와 내용을 입력
    .then(() => {
        return fs.readFile('./18-5.writeme.txt');
    })
    .then((data) => {
        console.log(data.toString());
    })
    .catch((err) => {
        console.error(err);
    });
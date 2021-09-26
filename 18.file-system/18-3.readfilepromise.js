//fs모듈에서 promise 속성을 불러오면 프로미스 기반의 fs모듈을 사용할수 있다

const fs = require('fs').promises;

fs.readFile('./18-1.readme.txt')
    .then((data) => {
        console.log(data);
        console.log(data.toString());
    })
    .catch((err) => {
        console.error(err);
    });

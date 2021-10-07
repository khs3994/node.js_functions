const fs = require('fs').promises;

setInterval(() => {
    fs.unlink('./abcdefg.js')
}, 1000);

//프로미스의 에러는 catch하지 않아도 알아서 처리됨
//하지만 프로미스의 에러를 처리하는 동작은 노드 버전이 올라감에 따라 바뀔수 있다.
//그래서 프로미스를 사용할 때느 항상catch를 붙여주는 것을 권장.
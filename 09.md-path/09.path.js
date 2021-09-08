const path = require('path');

const string = __filename;

console.log('path.sep: ', path.sep); // 경로의 구분자
console.log('path.delimiter: ', path.delimiter); // 환경 변수의 구분자
console.log('--------------------------------');
console.log('path.dirname(): ', path.dirname(string)); //파일이 위치한 폴더 경로를 보여줌
console.log('path.extname(): ', path.extname(string));//파일의 확장자를 보여줌
console.log('path.basename(): ', path.basename(string));//파일의 이름(확장자 포함)을 보여줌
console.log('path.basename(): ', path.basename(string, path.extname(string)));//파일의 이름만 표시하고 싶다면 basename의 두번째 인자로 파일의 확장자를 넣어주면됨
console.log('--------------------------------');
console.log('path.parse() ', path.parse(string));//파일경로를 root,dir,base,ext,name으로 분리함
console.log('path.format(): ', path.format({//path.parse()한 객체를 파일 경로로 합침
    dir: 'C:\\users\\zerocho',
    name: '09.path' ,
    ext: '.js',
}));
console.log('path.normalize(): ', path.normalize('C://users\\\\zerocho\\\09.path.js'));// / 나 \ 를 실수로 여러번 사용했거나 혼용했을 때 정상적인 경로로 변환해줌
console.log('---------------------------------');
console.log('path.isAbsolute(): ', path.isAbsolute('C:\\'));//파일의 경로가 절대경로인지 상대경로인지 true나 false로 알려준다.
console.log('path.isAbsolute(): ', path.isAbsolute('./home'));
console.log('---------------------------------');
console.log('path.relative(): ', path.relative('C:\\users\\zerocho\\09.path.js', 'C:\\'));//경로를 두개 넣으면 첫번째 경로에서 두번쨰 경로로 가능 방법을 알려줌
console.log('path.join(): ', path.join(__dirname, '..', '..', '/users', '.', '/zerocho'));//여러 인자를 넣으면 하나의 경로로 합쳐줌
console.log('path.resolve(): ', path.resolve(__dirname, '..','users', '.', '/zerocho'));//path.join()과 비슷하지만 차이가 있다. 매서드는 비슷해 보이지만 동작 방식이 다르다
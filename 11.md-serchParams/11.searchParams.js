const { URL } = require('url');

const myURL = new URL('http://www.gilbut.co.kr/?page=3&limit=10&category=node.js&category=javascript');
console.log('searchParams: ', myURL.searchParams);
console.log('searchParams.getAll(): ', myURL.searchParams.getAll('category'));//getAll(키) : 키에 해당하는 모든 값들을 가져옴, category키에는 nodejs와 javascript의 값이 들어있다
console.log('serchParams.get(): ', myURL.searchParams.get('limit'));//키에 해당하는 첫 번째 값만 가져옴
console.log('serchParams.has(): ', myURL.searchParams.has('page'));//해당 키가 있는지 없는지를 검사함

console.log('searchParams.keys(): ', myURL.searchParams.keys());//searchParams의 모든 키를 반복기(iterator, ES2015 문법) 객체로 가져옵니다.
console.log('searchParams.values(): ', myURL.searchParams.values());//searchParams의 모든 키를 반복기 객체로 가져옵니다.

myURL.searchParams.append('filter', 'es3');//해당 키를 추가함, 같은 키의 값이 있다면 유지하고 하나 더추가
myURL.searchParams.append('filter', 'es5');//
console.log(myURL.searchParams.getAll('filter'));

myURL.searchParams.set('filter', 'es6');//append와 비슷하지만 같은 키의 값들을 모두 지우고 새로 추가함
console.log(myURL.searchParams.getAll('filter'));

myURL.searchParams.delete('filter');//해당 키를 제거함
console.log(myURL.searchParams.getAll('filter'));

console.log('serchParams.toString(): ', myURL.searchParams.toString());//조작한 serchParams 객체를 다시 문자열로 만듬
myURL.search = myURL.searchParams.toString();
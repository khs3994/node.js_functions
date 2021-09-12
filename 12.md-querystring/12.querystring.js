//WHATWG 방식의 url대신 기존 노드의 url을 사용할때 search 부분을 사용하기 쉽게 객체로 만드는 모듈

const url = require('url');
const querystring = require('querystring');

const parsedUrl = url.parse('http://www.gilbut.co.kr/?page=3&limit=10&category=node.js&category=javascript');
const query = querystring.parse(parsedUrl.query);//url의 query 부분을 자바스크립트 객체로 분해해줌
console.log('querystring.parse(): ', query);//분해된 query 객체를 문자열로 다시 조립해줌
console.log('querystring.stringify(): ', querystring.stringify(query));
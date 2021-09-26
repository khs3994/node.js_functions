//동기 메서드
//readFileSync를 사용하면 요청이 수백개 이상 들어올때 성능에 문제가 생김 Sync메서드를 사용할 때는 이전 작업이 완료되어야 실행가능
//즉, 백그라운드가 작업하는 동안 메인 스레드는 아무것도 못하고 대기 -> 비효율적
//이러한 문제를 비동기 fs메서드로 해결가능
const fs = require('fs');

console.log('시작');
let data = fs.readFileSync('./18-6.readme2.txt');
console.log('1번',data.toString());
data = fs.readFileSync('./18-6.readme2.txt');
console.log('2번',data.toString());
data = fs.readFileSync('./18-6.readme2.txt');
console.log('3번',data.toString());
console.log('끝');
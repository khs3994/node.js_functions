const string = 'abc';
const number = 1;
const boolean = true;
const obj = {
    outside: {
        inside: {
            key: 'value',
        },
    },
};

console.time('전체 시간');
console.log('평범한 로그입니다 쉼표로 구분해 여러값을 찍을 수 있습니다');
console.log(string,number,boolean);
console.error('에러 메시지는 console.error에 담아주세요');

console.table([{name: '제로', birth: 1994}, {name: 'here', birth: 1988}]);

console.dir(obj, { colors: false, depth: 2});
console.dir(obj, { colors: true, depth: 1});


console.time('시간 측정');
for (let i = 0; i< 100000; i++) {
    continue;
}
console.timeEnd('시간 측정');

function b() {
    console.trace('에러 위치 추적');
}
function a() {
    b();
}
a();

console.timeEnd('전체 시간');

//console.time(레이블) : console.timeEnd(레이블)과 대응되어 같은 레이블을 가진 time과 timeEnd사이의 시간을 측정합니다.
//console.log(내용):평범한 로그를 콘솔에 표시합니다. console.log(내용, 내용, ...) 처럼 여러내용을 동시에 표시할수도 있습니다.
//console.error(에러내용) : 에러를 콘솔에 표시함
//console.dir(객체, 옵션):객체를 콘솔에 표시할때 사용합니다. 첫번째 인자로 표시할
//객체를 넣고, 두 번째 인자로 옵션을 넣습니다. 옵션의 colors를 true로 하면 콘솔에
//색이 추가되어 보기가 한결 편해짐. depth는 갹체 안의 갹체를 몇 단계 까지 보여줄지를
//결정합니다. 기본값은 2입니다.
//console.trace(레이블):에러가 어디서 발생했는지 추적할수 있게 해줍니다. 보통은 에러 발생 시 
//에러 위치를 알려주므로 자주 사용하지는 않지만 위치가 나오지 않는다면 사용할만 합니다.
//콘솔 명령어
//process.version : 설치된 노드의 버전을 알수있다.
//process.arch : 프로세서 아키텍쳐 정보를 알수 있다.
//process.platform : 운영체제의 플랫폼 정보를 알수있다.
//process.pid : 현제 프로세스의 아이디를 알수있다. 프로세스를 여러개 가질때 구분할수 있다.
//process.uptime() : 프로세스가 시작한후 흐른 시간 (단위: 초)
//process.cwd() : 현재 프로세스가 실행되는 위치
//process.cpuUsage() : 현재 cpu 사용량을 알려줌


//process.env : 서비스의 중요한 키를 저장하는 공간으로 사용

const secretId = process.env.SECRET_ID;
const secretCode = process.env.SECRET_CODE;

//process.nextTick(콜백) : 이벤트 루프가 다른 콜백함수들보다
// nextTick의 콜백 함수를 우선으로 처리하도록 만듭니다.

setImmediate(() => {
    console.log('immediate');
});
process.nextTick(() => {
    console.log('nextTick');
});
setTimeout(() => {
    console.log('timeout');
}, 0);
Promise.resolve().then(() => console.log('promise'));

//process.exit : 실행중인 노드 프로세스를 종료함 서버에 사용하면
//서버가 멈추므로 서버에는 거의 사용하지 않음

let i = 1;
setInterval(() => {
    if( i === 5){
        console.log('종료!');
        process.exit();
    }
    console.log(i);
    i+=1;
}, 1000);
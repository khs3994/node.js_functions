//강제 에러 발생 코드
setInterval(() => {
    console.log('시작');
    try {
        throw new Error('서버를 고장내주마!');
    } catch (err) {
        console.log(err);
    }
}, 1000);

//setInterval은 프로세스가 멈추는지 여부를 체크하기 위해서
//프로세스가 에러로 인해 멈추면 setInterval도 멈춤
//setInterval내에 throw new Error()로 에러 강제 발생
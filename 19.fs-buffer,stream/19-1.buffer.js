//버퍼링: 영상을 재생할 수 있을 때까지 데이터를 모으는 동작
//스트리밍: 방송인의 컴퓨터에서 시청자의 컴퓨터로 영상 데이터를 조금씩 전송하는 동작

const buffer = Buffer.from('버퍼로 바뀌는 부분');
console.log('from(): ',buffer);//form: 문자열을 버퍼로 바꿀 수 있음
console.log('length(): ',buffer.length);//length: 버퍼의 크기를 알림 (바이트 단위)
console.log('toString(): ',buffer.toString());//toString: 버퍼를 다시 문자열로 바꿀 수 있음, 이떼 base64나 hex를 인수로 넣으면 해당 인코딩으로 변환가능

const array = [Buffer.from('띄엄 '), Buffer.from('띄엄 '), Buffer.from('띄어쓰기')];
const buffer2 = Buffer.concat(array);
console.log('concat(): ',buffer2.toString());//concat: 배열 안에 든 버퍼들을 하나로 합침

const buffer3 = Buffer.alloc(5);//alloc: 빈 버퍼를 생성함, 바이트를 인수로 넣으면 해당 크기의 버퍼가 생성됨
console.log('alloc(): ',buffer3)
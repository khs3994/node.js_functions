const EventEmitter = require('events');

const myEvent = new EventEmitter();
myEvent.addListener('event1', () => {
    console.log('이벤트 1');
});
myEvent.on('event2', () => { 
    console.log('이벤트 2');
});
myEvent.on('event2', () => {
    console.log('이벤트 2 추가');
});
myEvent.once('event3', () => {
    console.log('이벤트 3');
});//한번만 실행

myEvent.emit('event1');//이벤트 호출
myEvent.emit('event2');//이벤트 호출

myEvent.emit('event3');//이벤트 호출
myEvent.emit('event3');//실행 안됨

myEvent.on('event4', () => {
    console.log('이벤트 4');
});
myEvent.removeAllListeners('event4');
myEvent.emit('event4');

const listener = () => {
    console.log('이벤트 5');
};
myEvent.on('event5', listener);
myEvent.removeListener('event5',listener);
myEvent.emit('event5');//실행 안됨

console.log(myEvent.listenerCount('event2'));

//on(이벤트명, 콜백): 이벤트 이름과 이벤트 발생 시의 콜백을 연결함, 이렇게 연결하는 동작을 이벤트 리스닝이라고 부름, event2처럼 이벤트 하나에 여러개를 달아줄수도 있음
//addListener(이벤트명, 콜백): on과 같은 기능
//emit(이벤트명): 이벤트를 호출하는 메서드, 이벤트 이름을 인수로 넣으면 미리 등록 해뒀던 이벤트 콜백이 실행됨
//once(이벤트명, 콜백): 한번만 실행되는 이벤트, myEvent.emit('event3')을 두번 연속 호출해도 콜백은 1번
//removeAllListeners(이벤트명): 이벤트에 연결된 모든 이벤트 리스너를 제거함, event4가 호출되기 전에 리스너를 제거 했으므로 event4의 콜백은 호출되지 않음
//removeListener(이벤트명, 리스너): 이벤트에 연결된 리스너를 하나씩 제거함, 리스너를 넣어야함, event5의 콜백도 호출되지 않음
//off(이벤트명, 콜백): 노드10 버전에서 추가된 메서드로, removeListener와 기능이 같음
//listenerCount(이벤트명): 현재 리스너가 몇개 연결되어 있는지 확인함
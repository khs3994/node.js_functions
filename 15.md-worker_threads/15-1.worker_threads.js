const {
    Worker, isMainThread, parentPort,
} = require('worker_threads');

if (isMainThread) { //부모일떄
    const worker = new Worker(__filename);
    worker.on('message', message => console.log('worker exit'));
    worker.postMessage('ping');
} else { //워커 일때
    parentPort.on('message', (value) => {
        console.log('from parent', value);
        parentPort.postMessage('pong');
        parentPort.close();
    });
}
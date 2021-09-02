const dep1 = require('./02-5.module-dep1');
console.log('require dep1', dep1);
module.exports = () => {
    console.log('dep1', dep1);
};

//dep2에서 dep1 require
const dep2 = require('./02-6-module-dep2');
console.log('require dep2', dep2);
module.exports = () =>{
    console.log('dep2', dep2);
};

//dep1에서 dep2 require
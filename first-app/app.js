// function sayHello(name){
//     console.log('Hello' +name);
// }
// // sayHello('mosh');
// // console.log(window);
// var message='';
// console.log(globalThis.message);
// console.log(module);
// var log = require('./logger');
// log('message');
const path = require('path');
var pathObj = path.parse(__filename);
console.log(pathObj);

const os=require('os');
 var totalMemory=os.totalmem();
 var freeMemory=os.freemem();
 console.log(totalMemory+' '+freeMemory);

const fs=require('fs');
const files=fs.readdirSync('./');
console.log(files);

const EventEmitter=require('events');
const emitter=new EventEmitter();
emitter.on('messageLogged',(arg)=>{
    console.log('Listener called',arg);
})
emitter.emit('messageLogged',{id:1,url:'http://'});


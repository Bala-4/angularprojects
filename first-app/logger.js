const EventEmitter=require('events');
const emitter=new EventEmitter();
var url='http://mylogger.io/log';
function log(message){
    console.log(message);

}
module.exports=log;
// module.exports.utl=url;
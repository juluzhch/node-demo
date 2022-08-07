var events =require("events");

var eventEmitter =new events.EventEmitter();

function  eventHandler(arg1){
    console.log("事件监听1,参数",arg1);
}
function  eventHandler2(arg1){
    console.log("事件监听2,参数",arg1);
}
eventEmitter.on("eventName",eventHandler);//绑定事件
eventEmitter.on("eventName",eventHandler2);//绑定事件-同一个事件绑定多个监听器


console.log("事件执行前");
eventEmitter.emit("eventName","参数test");//触发自定义事件，自定义事件触发后是同步执行事件绑定的函数的
console.log("事件执行后");

setTimeout(function (){
    console.log("定时触发事件，执行优先级低于immediate事件");
},100);
console.log("设置timeout事件后");

setImmediate(function (){
    console.log("immediate事件-实际是下一个事件循环执行")
})
console.log("设置immediate事件");

console.trace("lll")

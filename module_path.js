var config= require("./configdemo.json");

console.log(module.paths);
process.nextTick(function (){
    console.log("tick ")
})
console.log(config.compilerOptions.module);
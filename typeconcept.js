//Typescript is a statically typed language
//Type Inference
//Type Annotation --> num:number.... name:string
var fName;
fName = "Natallia";
var num;
num = 123;
var n = 50;
var lName = "Felix";
var test = "typescript"; // type = string --CT (Compiler Type-Type Inference не определяем заранее тип данных
var billAmount = 6000; // type = number
var isActive = true; //Type Annotation --> num:number
//null and undefined:
var city = null;
var country = undefined;
//any: use for the dymamic data
var value = 80;
value = "dev";
value = true;
//void: function does not return any value
function printHello() {
    console.log("hello");
}
function getNumber() {
    return 123;
}
function getAnyValue() {
    return "";
}
function addition(a, b) {
    return a + b; //30 - number
}
addition(10, 20);
//name: add
//params: a(number), b(number)
//return type: number
function add(a, b) {
    return a + b; //CT --return number
}
console.log(add(2, 10));

//Arrow funtion: => fat arrow or lambda function
//Anonymous function without any name
var info = function () {
    console.log('Hello');
};
var printIfo = function () { return console.log('Hi!'); };
info();
// printIfo()
// let add = (x:number, y: number): number => {
//     return x + y
// }
//console.log(add(10, 20))
var sum = function (x, y) { return x + y; }; //don't write return
console.log(sum(20, 50));
var Person = /** @class */ (function () {
    function Person(firstName, age) {
        var _this = this;
        this.display = function () { return console.log(_this.firstName + ' ' + _this.age); };
        this.firstName = firstName;
        this.age = age;
    }
    return Person;
}());
var p = new Person('Tom', 30);
p.display();

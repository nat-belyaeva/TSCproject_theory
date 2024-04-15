//for loop
// for loop
// for ..of loop
// for .. in loop
//while
//do-while
// 1 to 10:
for (var i = 1; i <= 10; i++) {
    console.log(i);
    // break
}
// 0 2 4 6 8 10
for (var i = 0; i <= 10; i = i + 2) {
    console.log(i);
}
//for ..of loop
//
var numbers = [10, 200, 3000, 40000];
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var n = numbers_1[_i];
    console.log(n);
    if (n === 200) {
        console.log('hi');
        break;
    }
}
console.log('----------------------');
//for..in
var num = [10, 200, 3000, 40000, 555];
for (var i in num) {
    console.log(i + '=' + num[i]);
}
var info = 'Hello world';
for (var _a = 0, info_1 = info; _a < info_1.length; _a++) {
    var c = info_1[_a];
    console.log(c);
}
//while loop
//1 to 10
var p = 1;
while (p <= 10) {
    console.log(p);
    p++;
} // ise cases for while: when number of iterations are mot fixed:
//1 infinite scrolling: diff pages
//2 wait for page loading: 2, 5 15 secs
//3 wait for the element on the page: 2, 3, 5 10
//4 calendar handling:
//5 webtable pagination: prev... 1 2 3 4 5 .... next
//use cases for for loop
//when number of iterations are fixed:
//drop down: month Jan to Dec: 1 to 12
console.log('=================');
//do-while loop
var d = 1;
do {
    console.log(d);
    d++;
} while (d <= 10);

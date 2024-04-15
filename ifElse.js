var flag = true;
if (flag) {
    console.log('pass');
}
else {
    console.log('fail');
}
var x = 10, y = 20;
if (x > y) {
    console.log('x is gre than y');
}
else {
    console.log('y is gr than x');
} // < > <= >= === !=
//if - else if
var a = 100;
var b = 200;
var c = 300;
if (a > b && a > c) {
    console.log('a is greatest');
}
else if (b > c) {
    console.log('b is greatest');
}
else { }
console.log('c is gr');
//Ternary Operator:
var i = 100;
var j = 20;
console.log();
i > j ? console.log('i is gr than j') : console.log('j is gr than i');
var browser = 'chrome';
browser === 'chrome' ? console.log('launch chrome') : (browser === 'firefox') ? console.log('launch firefox') : 'select correct browser';

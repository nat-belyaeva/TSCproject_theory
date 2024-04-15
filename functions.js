//functions in TC:
//void
//return
//take parameters
//1 named function:
function getInfo() {
    console.log("hello info");
}
getInfo();
//void function
function add(a, b) {
    console.log(a + b);
    //return //void return
}
add(10, 20); //call by value ---arguments)
function calNumbers(a, b, c) {
    var total = a + b - c;
    return total;
}
var result = calNumbers(30, 40, 50);
console.log(result);
function isUserActive(username) {
    if (username === 'Nat') {
        return true;
    }
    else if (username === 'Tom') {
        return false;
    }
    else {
        console.log("this username is not found");
        return false;
    }
}
if (isUserActive('Peter')) {
    console.log('login');
}
//2 Anonymous function: without name --store in a variable:
var info = function () {
    console.log("Hello TS!!");
};
info();
var sum = function (x, y) {
    return x + y;
};
var rs = sum(2, 5);
console.log(rs);

//.ts --> tsc(TS compiler) ---> JavaScript RunTime Env; Browser. NodeJs, App
console.log("hello TS");
var age = 30;
var firstName = "Nat";
var isActive = true;
function getInfoTest() {
    if (firstName.length > 10 && age > 1) {
        console.log("PASS");
    }
    else {
        console.log("Fail");
    }
}
getInfoTest();

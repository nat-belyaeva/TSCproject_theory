//.ts --> tsc(TS compiler) ---> JavaScript RunTime Env; Browser. NodeJs, App
console.log("hello TS")
let age: number = 30
let firstName: string = "Nat"
let isActive: boolean = true

function getInfoTest() {
    if (firstName.length > 10 && age > 1) {
        console.log("PASS")
    } else {
        console.log("Fail")
    }
}
getInfoTest()
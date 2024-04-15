//functions in TC:
//void
//return
//take parameters

//1 named function:
function getInfo() { //0 parameters function
    console.log("hello info")
}

getInfo()
//void function
function add(a: number, b: number): void { //2 parameters
    console.log(a + b)
    //return //void return
}
add(10, 20) //call by value ---arguments)

function calNumbers(a: number, b: number, c: number): number {
    let total = a + b - c
    return total
}
let result: number = calNumbers(30, 40, 50)
console.log(result)

function isUserActive(username: string): boolean {
    if(username === 'Nat') {
        return true
    } else if(username === 'Tom' ){
        return false
    } else {
        console.log("this username is not found")
        return false
    }
}
if(isUserActive('Peter')) {
    console.log('login')
}

//2 Anonymous function: without name --store in a variable:
let info = function (){
    console.log("Hello TS!!")
}
info()

let sum = function (x: number, y: number): number{
    return x + y
}
let rs: number = sum(2, 5)
console.log(rs)
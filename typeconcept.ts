//Typescript is a statically typed language
//Type Inference
//Type Annotation --> num:number.... name:string

let fName: string
fName = "Natallia"

let num: number
num = 123

let n: number = 50
let lName: string = "Felix"

let test =  "typescript" // type = string --CT (Compiler Type-Type Inference не определяем заранее тип данных

let billAmount = 6000  // type = number

let isActive: boolean = true //Type Annotation --> num:number

//null and undefined:
let city: null = null
let country: undefined = undefined

//any: use for the dymamic data
let value: any = 80
value = "dev"
value = true

//void: function does not return any value

function printHello(): void {  //return type: void --
    console.log("hello")
    //return 123
    //return
}
function getNumber(): number{ //return number
return 123
}
function getAnyValue():any {// return type = any ---CT
    return "testing"
}

function addition(a, b) { //type inference will be applied as number
    return a + b //30 - number
}
addition(10, 20)
//name: add
//params: a(number), b(number)
//return type: number

function add(a:number, b:number): number {
    return a + b //CT --return number
}

console.log(add(2, 10))


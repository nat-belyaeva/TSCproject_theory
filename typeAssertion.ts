//TSC
//Type assertion in TypeScript is a way to tell the TypeScript compiler
// that you know more about the type of z value than it does

//1 using <>
//2 using as keyword

let totalBill: any = 123
let finalBill = <number>totalBill + 200
console.log(finalBill)

let someValue: any = 'Hello TypeScript'
let len = (someValue as string).length
console.log(len)

let flag: any = true
if(flag as boolean) {
    console.log('hello ts!')
}
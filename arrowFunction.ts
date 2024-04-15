//Arrow funtion: => fat arrow or lambda function
//Anonymous function without any name

let info = () => {
    console.log('Hello')
}
let printIfo = () => console.log('Hi!')

info()
// printIfo()
// let add = (x:number, y: number): number => {
//     return x + y
// }
//console.log(add(10, 20))
let sum = (x:number, y: number): number =>  x + y //don't write return
console.log(sum(20, 50))

class Person{
    firstName: string
    age: number
    constructor(firstName: string, age: number) {
        this.firstName = firstName
            this.age = age
    }

    display = () => console.log(this.firstName + ' ' + this.age)
}
let p = new Person('Tom', 30)
p.display()
//Explicitly Typed Arrays*
let names:string[] = ['tom', 'Nord', 'Felix']
console.log(names[0])

//using generics:
let empNames: Array<string> = ['tom', 'Nord', 'Felix']
empNames.push('Jerry')
let empIds: Array<number> =[1 , 2 , 3, 4]
let empInfo: Array<any> =[1 , 'Nat', true, null]

//multi TypeArrow
let values: (string | number)[] = ['Tom', 100, 'Nord', 2]
let val: Array<string | boolean> = ['Tom', true]

//first Array declaration and init:

let users: Array<string>
users = ['Peter', 'Nat']
let employees: Array<string> =['tom', 'Nord', 'Felix']

//iterate the array: use for loop:
//1. index based loop

for(let i = 0; i < employees.length; i++) {
    console.log(employees[i])
}
console.log('__________________')
//2 for in loop:

for(let e in employees) {

    console.log(e + ': ' + employees[e])
}

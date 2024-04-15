//Explicitly Typed Arrays*
var names = ['tom', 'Nord', 'Felix'];
console.log(names[0]);
//using generics:
var empNames = ['tom', 'Nord', 'Felix'];
empNames.push('Jerry');
var empIds = [1, 2, 3, 4];
var empInfo = [1, 'Nat', true, null];
//multi TypeArrow
var values = ['Tom', 100, 'Nord', 2];
var val = ['Tom', true];
//first Array declaration and init:
var users;
users = ['Peter', 'Nat'];
var employees = ['tom', 'Nord', 'Felix'];
//iterate the array: use for loop:
//1. index based loop
for (var i = 0; i < employees.length; i++) {
    console.log(employees[i]);
}
console.log('__________________');
//2 for in loop:
for (var e in employees) {
    console.log(e + ': ' + employees[e]);
}

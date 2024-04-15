//optional params:
function getInformation(firstname: string, age?: number):string { // add ? - optional param
    return firstname + ' ' + age
}

console.log(getInformation('Tom'))
//default params:
function setDetails(name: string, msg: string = 'welcome'): string {
    return msg + " " + name
}

console.log(setDetails('Nat'))
console.log(setDetails('Nat', "hello"))
console.log(setDetails('Nat', undefined)) // welcome Nat
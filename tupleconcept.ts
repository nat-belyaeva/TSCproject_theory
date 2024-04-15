//tuple: fixed size, order matters
//tuple vs array
//array: dynamic : runtime more values can be added

let person: [string, number] = ['Nat', 38]
let user: [string, number, boolean] = ['Nat', 38, true]

console.log(person[0])
console.log(person[1])
console.log(user[1])

let data: [string, number][] = [['Nat', 38], ['Tom', 1]]
console.log(data[0])
console.log(data[0][0])

let customer: [string, number] = ['Nat', 38]
customer.push('TOm', 1)
console.log(customer)
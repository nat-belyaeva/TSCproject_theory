//for loop
   // for loop
   // for ..of loop
   // for .. in loop

//while
//do-while

// 1 to 10:
for(let i = 1;   i <= 10; i++) {
    console.log(i)
   // break
}
// 0 2 4 6 8 10

for(let i = 0;  i <= 10; i= i + 2) {
    console.log(i)
}

//for ..of loop
//
let numbers = [10, 200, 3000, 40000]
for(let n of numbers) {
    console.log(n)
    if(n === 200) {
        console.log('hi')
        break
    }
}
console.log('----------------------')
//for..in
let num = [10, 200, 3000, 40000, 555]

for(let i in num) {
    console.log(i  + '=' + num[i])
}

let info = 'Hello world'
for(let c of info) {
    console.log(c)
}

//while loop
//1 to 10
let p = 1
while(p <= 10) {
    console.log(p)
    p++
}// ise cases for while: when number of iterations are mot fixed:
//1 infinite scrolling: diff pages
//2 wait for page loading: 2, 5 15 secs
//3 wait for the element on the page: 2, 3, 5 10
//4 calendar handling:
//5 webtable pagination: prev... 1 2 3 4 5 .... next

//use cases for for loop
//when number of iterations are fixed:
//drop down: month Jan to Dec: 1 to 12

console.log('=================')
//do-while loop
let d = 1
do{
    console.log(d)
    d++
} while (d <= 10)







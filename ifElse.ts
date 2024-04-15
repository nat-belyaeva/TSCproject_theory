let flag: boolean = true

if(flag){
    console.log('pass')
} else {
    console.log('fail')
}

let x: number = 10, y:number = 20
if(x > y) {
    console.log('x is gre than y')
} else {
    console.log('y is gr than x')
}// < > <= >= === !=

//if - else if

let a: number = 100
let b: number = 200
let c: number = 300

if(a > b && a > c) {
    console.log('a is greatest')
} else if( b > c) {
    console.log('b is greatest')
} else {}
console.log('c is gr')

//Ternary Operator:
let i: number = 100
let j: number = 20
console.log()
i > j ? console.log('i is gr than j') : console.log('j is gr than i')


let browser: string = 'chrome'
browser === 'chrome' ?  console.log('launch chrome') : (browser === 'firefox') ?  console.log('launch firefox') : 'select correct browser'



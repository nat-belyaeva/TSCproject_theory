//TypeScript provides the function overloading
//You can have multiple functions
//1 with the same name
//2 but different parameter types and return type
//3 However, the number of parameters should be the same

//provide the implementation/prototype  of the function:
function add(a: string, b:string): string
function add(a: number, b:number): number
function add(a: boolean, b:boolean): boolean


//need to implement with function body this only once:

function add(a: any, b: any) :any{
    return a + b
}
let s1 = add('hello ', 'world')
let s2 = add(10, 0)
let s3 = add(true, false)
console.log(s1) //hello world
console.log(s2) //10
console.log(s3) // 1


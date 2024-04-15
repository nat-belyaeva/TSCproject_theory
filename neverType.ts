//it never returns anything
let nothing: never //can not assign any value

function throwError(msg: string): never {
    throw new Error(msg)
}
//throwError('some Error')

function displayMsg(): never {
    while(true) {
        console.log('welcome to ')
    }
}
displayMsg()
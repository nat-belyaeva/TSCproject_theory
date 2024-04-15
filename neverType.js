//it never returns anything
var nothing; //can not assign any value
function throwError(msg) {
    throw new Error(msg);
}
//throwError('some Error')
function displayMsg() {
    while (true) {
        console.log('welcome to ');
    }
}
displayMsg();

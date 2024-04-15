//TypeScript provides the function overloading
//You can have multiple functions
//1 with the same name
//2 but different parameter types and return type
//3 However, the number of parameters should be the same
//need to implement with function body this only once:
function add(a, b) {
    return a + b;
}
var s1 = add('hello', 'world');
var s2 = add(10, 0);
var s3 = add(true, false);
console.log(s1); //hello world
console.log(s2); //10
console.log(s3); // 1

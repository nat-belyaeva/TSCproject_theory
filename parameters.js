//optional params:
function getInformation(firstname, age) {
    return firstname + ' ' + age;
}
console.log(getInformation('Tom'));
//default params:
function setDetails(name, msg) {
    if (msg === void 0) { msg = 'welcome'; }
    return msg + " " + name;
}
console.log(setDetails('Nat'));

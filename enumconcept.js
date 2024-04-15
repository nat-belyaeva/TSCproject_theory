//Enum: Enumeration: data types : hold the set of constants
// numeric
//string
//heterogenous enum
//numeric:
var Browser;
(function (Browser) {
    Browser[Browser["Firefox"] = 0] = "Firefox";
    Browser[Browser["Safari"] = 1] = "Safari";
    Browser[Browser["Edge"] = getVersion('Chrome') * 5] = "Edge";
    Browser[Browser["Chrome"] = getVersion('Chrome')] = "Chrome";
})(Browser || (Browser = {}));
console.log(Browser.Edge + "123");
function getVersion(browserName) {
    if (browserName === 'Chrome') {
        return 115;
    }
    return -1;
}
console.log(Browser.Chrome);
console.log(Browser.Edge);
//String Enum
var environment;
(function (environment) {
    environment["DEV"] = "dev";
    environment["QA"] = "qa";
    environment["STAGE"] = "stage";
    environment["PROD"] = "prod";
})(environment || (environment = {}));
console.log(environment.DEV);
console.log(environment['STAGE']);
//heterogenous enum:
var Status;
(function (Status) {
    Status["ACTIVE"] = "active";
    Status[Status["DEACTIVE"] = 1] = "DEACTIVE";
    Status[Status["PENDING"] = 2] = "PENDING";
})(Status || (Status = {}));
console.log(Status.ACTIVE);
console.log(Status['ACTIVE']);
console.log(Status);
console.log(Status.PENDING);

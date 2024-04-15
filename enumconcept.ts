//Enum: Enumeration: data types : hold the set of constants
// numeric
//string
//heterogenous enum

//numeric:
enum Browser { // check previous value
    Firefox ,
    Safari,
    Edge = getVersion('Chrome') * 5,
    Chrome = getVersion('Chrome')
}

console.log(Browser.Edge + "123")

function getVersion(browserName: String): number {
    if(browserName ==='Chrome') {
        return 115;
    }
    return -1
}
console.log(Browser.Chrome)
console.log(Browser.Edge)

//String Enum
enum environment {
    DEV = 'dev',
    QA = 'qa',
    STAGE = 'stage',
    PROD = 'prod'
}

console.log(environment.DEV)
console.log(environment['STAGE'])

//heterogenous enum: multiple type

enum Status {
    ACTIVE = 'active',
    DEACTIVE = 1,
    PENDING
}

console.log(Status.ACTIVE)
console.log(Status['ACTIVE'])
console.log(Status.DEACTIVE)
console.log(Status)
console.log(Status.PENDING)
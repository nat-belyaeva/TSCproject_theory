let userId: (string | number)
userId = 100001
userId = "Nat"

function getUserInformation(customerID: (string | number)) {
    if(typeof (customerID) === 'number') {
        return 900 + "_Nat"
    } else if(typeof (customerID)=== 'string'){
        return customerID + '_Nat'
    }
}

console.log(getUserInformation(900))
console.log(getUserInformation('Auto'))
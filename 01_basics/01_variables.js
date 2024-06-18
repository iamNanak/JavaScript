const accountId = 12345
let accountEmail = "nanak@google.com"
var accountPassword = "54321"
accountCity = "Varanasi"

let accountState;   //Since, value is not assign to this variable. Hence, it is undefined.

// accountId = 2  // not allowed

accountEmail = "harsh@google.com"
accountPassword = "4321"
accountCity = "Delhi"

console.log(accountId);

/* Prefer not to use var 
because of the issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

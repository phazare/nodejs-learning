const os = require('os');

const user = os.userInfo()

console.log(user)

console.log(`My laptops's uptime is ${os.uptime} seconds`)

const systemData = {
    name : os.hostname(),
    type : os.type(),
    release : os.release(),
    totalMemory : os.totalmem(),
    freeMemory : os.freemem()
}

console.log(systemData)
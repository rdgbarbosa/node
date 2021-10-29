const os = require('os')

// info about current user
const user = os.userInfo();
console.log(user);

// motodo retorna uptime do sistema em segundos

console.log(`The system uptime is ${os.uptime} seconds`);

const currentOS = {
    name:os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOS);
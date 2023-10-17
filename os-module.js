const os = require("os");

const user = os.userInfo();
console.log(user);

console.log(`Uptime is ${os.uptime()}`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  freeMem: os.freemem(),
  totalMem: os.totalmem(),
  uptime: os.uptime(),
};

console.log(currentOS);

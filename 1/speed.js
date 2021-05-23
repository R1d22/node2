const os = require('os');
const allData = os.cpus();
const inData = allData[0];
const speed = inData.speed;
console.log('speed:', speed);

module.exports = {
    speed
};
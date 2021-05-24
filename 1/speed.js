const os = require('os');

const {cpus} = require('os');
const showSpeedCpu = () => {
    const result = cpus();
    const names = result.map((item) => {
        return item.speed;
    });
    console.log(names);
};

module.exports = {
    showSpeedCpu
};
const os = require('os');



const {cpus} = require('os');
const showModelCpu = () => {
    const result = cpus();
    const names = result.map((item) => {
        return item.model;
    });
    console.log(names);
};

module.exports = {
     showModelCpu
};
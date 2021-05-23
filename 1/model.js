const os = require('os');
const allData = os.cpus();
const inData = allData[0];
const model = inData.model;
console.log('model:', model);

module.exports = {
    model
};



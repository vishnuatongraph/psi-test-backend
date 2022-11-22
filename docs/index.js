
const basicInfo = require('./basicInfo');
const component = require('./component');
const  servers = require('./server');
const tasks = require('./tasks');

module.exports = {
    ...basicInfo,
    ...servers,
    ...component,
    ...tasks
};
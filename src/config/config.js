require('./configReplace');
const globalENVObj = require('../assets/utils/globalENVObj.js');

const globalUniquenessCoordinationCliTopLevelObj = globalENVObj.globalUniquenessCoordinationCliTopLevelObj;
const separateHostFileConfig = globalUniquenessCoordinationCliTopLevelObj.separateHostFileConfig;
const ENVHost = separateHostFileConfig[process.env.NODE_ENV];

module.exports = (ENVHost && (ENVHost instanceof Object)) ? ENVHost : separateHostFileConfig;

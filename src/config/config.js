require('./configReplace');
const globalENVObj = require('../assets/utils/globalENVObj.js');

const globalUniquenessCoordinationCliTopLevelObj = globalENVObj.globalUniquenessCoordinationCliTopLevelObj;
const separateHostFileConfig = globalUniquenessCoordinationCliTopLevelObj.separateHostFileConfig;
const ENVHost = separateHostFileConfig[process.env.__ENV__];

module.exports = (ENVHost && (ENVHost instanceof Object)) ? ENVHost : separateHostFileConfig;

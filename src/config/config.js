require('./configReplace');
let globalENVObj = require('../assets/utils/globalENVObj.js');

let globalUniquenessCoordinationCliTopLevelObj = globalENVObj.globalUniquenessCoordinationCliTopLevelObj;
let separateHostFileConfig = globalUniquenessCoordinationCliTopLevelObj.separateHostFileConfig;
let ENVHost = separateHostFileConfig[process.env.NODE_ENV];

module.exports = (ENVHost && (ENVHost instanceof Object)) ? ENVHost : separateHostFileConfig;

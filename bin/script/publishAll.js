let child_process = require('child_process');
let {colorLog} = require('../utils');
let ENVJson = require('../../env.js');

let publishAll = async (shellMsg) => {
  let {
    ENV_dist,
    cleanAndInstall,
    cleanDist
  } = shellMsg.distRelated;
  let publishAllExecShell = ENVJson.publishAllExecShell;
  let isPullRemoteBranchBeforePublishAll = ENVJson.isPullRemoteBranchBeforePublishAll;
  if(isPullRemoteBranchBeforePublishAll) {
    colorLog(`\r\nPulling the remote branch corresponding to the local branch\r\n`);
    child_process.execSync(`git pull`, {stdio: 'inherit'});
    colorLog(`\r\n\r\n`);
  }
  if(publishAllExecShell) {
    child_process.execSync(`${publishAllExecShell}`, {stdio: 'inherit'});
    return;
  }
  let {bale} = ENVJson;
  // let allPromise = [];
  child_process.execSync(`${cleanAndInstall} && ${cleanDist}`, {stdio: 'inherit'});
  colorLog(`\r\n============   The environments are being packaged,please wait!   ============\r\n\r\n\r\n\r\n`);
  for(let ENV in bale) {
    let ENVConfig = bale[ENV];
    // allPromise.push(new Promise((resolve, reject) => {
      let crossEnv = ENVConfig['NODE_ENV'] || ENV;
      child_process.execSync(ENVConfig.execShell || `vue-cli-service build --mode ${crossEnv}`, {stdio: 'inherit'});
      child_process.execSync(`mkdir -p ./${ENVJson.ENV_dist}/${crossEnv}`, {stdio: 'inherit'});
      child_process.execSync(`cp -fr ${ENVJson.dist}/. ./${ENVJson.ENV_dist}/${crossEnv}`, {stdio: 'inherit'});
      child_process.execSync(`rm -rf ${ENVJson.dist}`, {stdio: 'inherit'});
    // }));
  }
  // Promise.all(allPromise).then((arr) => {
    colorLog(`All environments were packaged successfully!\r\n`);
    // new Promise((resolve, reject) => {
    //   child_process.exec(`zip -r ./${ENV_dist}.zip ./${ENV_dist} && rm -rf ./${ENV_dist}`, {}, (error, stdout, stderr) => {
    //     if (error !== null) {
    //       reject(error);
    //     }else {
    //       resolve(null);
    //     }
    //   });
    // }).then(() => {
    //   child_process.exec(`rm -rf ./${ENV_dist}`, {});
    // }, () => {
    //   let zip = new AdmZip();
    //   zip.addLocalFolder(`${ENV_dist}`);
    //   zip.writeZip(`${ENV_dist}.zip`);
    //   child_process.exec(`rm -rf ./${ENV_dist}`, {});
    // });
    let AdmZip = require('adm-zip');
    let zip = new AdmZip();
    zip.addLocalFolder(`${ENV_dist}`);
    zip.writeZip(`${ENV_dist}.zip`);
    child_process.exec(`rm -rf ./${ENV_dist}`, {});
  // }).catch((error) => {
  //   colorLog(`dist package failed!`, `red`);
  // });
};

module.exports = {
  publishAll
};
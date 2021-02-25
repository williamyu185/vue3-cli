import Vue from 'vue';
import axios from 'axios';

import configHost from './config';
let globalENVObj = require('../assets/utils/globalENVObj');

let currentBrowserLanguage = globalENVObj.globalUniquenessCoordinationCliTopLevelObj.currentBrowserLanguage;
axios.defaults.timeout = 2*60*1000;
axios.defaults.withCredentials = true;
// axios.defaults.crossDomain = true;
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.interceptors.request.use((config: Indexable<any>) => {
    let url = config.url;
    let mainHost = configHost.mainHost || '';
    if (!/[http|https]:\/\//gi.test(url)) {
      config.url = mainHost + url;
    }
    if(config.url.indexOf('?') != -1) {
        config.url += ('&lang=' + currentBrowserLanguage);
    }else {
        config.url += ('?lang=' + currentBrowserLanguage);
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axios;

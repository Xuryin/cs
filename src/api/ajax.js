import axios from 'axios';
import { testConfig, localConfig } from './api'
export const configs = testConfig

const request = axios.create({
  baseURL: configs.serveBaseURL,
  timeout: 60000,
  withCredentials: true
});
// 机器人
const robot = axios.create({
  baseURL: configs.robotBaseURL,
  timeout: 180000,
  withCredentials: true
});

let pending = []; // 声明一个数组用于存储每个请求的取消函数和axios标识
let cancelToken = axios.CancelToken;
let removePending = (config) => {
  for (let i in pending) {
    if (pending[i].url === axios.defaults.baseURL + config.url) { // 在当前请求在数组中存在时执行取消函数
      pending[i].f(); // 执行取消操作
      // pending.splice(i, 1); 根据具体情况决定是否在这里就把pending去掉
    }
  }
};

request.interceptors.request.use((config) => {
  config.headers['Content-Type'] = 'application/json';
  config.cookie = ''
  removePending(config); // 在一个axios发送前执行一下判定操作，在removePending中执行取消操作
  // console.log(config.url);
  config.cancelToken = new cancelToken(function executor(c) { // 本次axios请求的配置添加cancelToken
    if (!config.url.match('/case/history') && !config.url.match('/welfare/list/done')) {
      pending.push({
        // url: config.url,
        url: axios.defaults.baseURL + config.url,
        f: c
      });
    }

    // console.log(axios.defaults.baseURL+config.url);
    // 将本次的url添加到pending中，因此对于某个url第一次发起的请求不会被取消，因为还没有配置取消函数
  });

  return config;
}, (error) => {
  Promise.reject(error);
});

request.interceptors.response.use(data => {
  removePending(data.config); // 在一个axios响应后再执行一下取消操作，把已经完成的请求从pending中移除
  // console.log(data.config);//如果返回undefined说明被拦截了

  return data;
}, error => {
  if (error && error.response) {
    if (error.response.status == 401) {
      localStorage.removeItem('user');
      window.location.reload();
    }
  }
  return Promise.reject(error);
});

// 机器人
robot.interceptors.request.use(config => {
  config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
  return config;
}, error => Promise.reject(error));

robot.interceptors.response.use(data => {
  return data;
}, error => Promise.reject(error));

export { request, robot };

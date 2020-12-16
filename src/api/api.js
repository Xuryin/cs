// 线上
let serveConfig = {
  // 客服链接
  serviceURL: 'https://wpa.qq.com/msgrd?v=3&uin=3084196558&site=qq&menu=yes',
  // 图片请求头
  imgbaseURL: 'https://buff777.obs.cn-south-1.myhuaweicloud.com/',
  // 当前域名
  indexBaseURL: 'https://www.buff777.com',
  // 接口地址
  serveBaseURL: 'https://api.buff777.com:8090/api',
  // 机器人接口
  robotBaseURL: 'https://api.buff777.com:8090',
};

if (location.hostname.indexOf('buff777.vip') !== -1) {
  serveConfig = {
    // 客服链接
    serviceURL: 'https://wpa.qq.com/msgrd?v=3&uin=3084196558&site=qq&menu=yes',
    // 图片请求头
    imgbaseURL: 'https://buff777.obs.cn-south-1.myhuaweicloud.com/',
    // 当前域名
    indexBaseURL: 'https://www.buff777.vip',
    // 接口地址
    serveBaseURL: 'https://api.buff777.vip:8090/api',
    // 机器人接口
    robotBaseURL: 'https://api.buff777.vip:8090',
  };
}

// 测试
export const testConfig = {
  // 客服链接
  serviceURL: 'http://wpa.qq.com/msgrd',
  // 图片请求头
  imgbaseURL: 'https://dev-test1.obs.cn-south-1.myhuaweicloud.com/',
  // 当前域名
  indexBaseURL: 'http://192.168.40.251:10025',
  // 接口地址
  // serveBaseURL: 'https://ocwww.equw.cn/api',
  serveBaseURL: 'http://192.168.5.112:8000/api',
  // 机器人接口
  robotBaseURL: 'http://192.168.5.112:8000/api',
};

// 开发
export const localConfig = {
  // 客服链接
  serviceURL: 'https://wpa.qq.com/msgrd?v=3&uin=3084196558&site=qq&menu=yes',
  // 图片请求头
  imgbaseURL: 'https://buff777.obs.cn-south-1.myhuaweicloud.com/',
  // 当前域名
  indexBaseURL: 'https://test001.buff777.com',
  // 接口地址
  serveBaseURL: 'http://192.168.5.112:8000/api',
  // 机器人接口
  robotBaseURL: 'https://test001.buff777.com',
};



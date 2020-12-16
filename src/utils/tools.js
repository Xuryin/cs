export const getArrItem = (arr, key, val) => {
  let arrObj = []
  arr.forEach((item) => {
    if (item[key] == val) {
      arrObj.push(item)
    }
  })
  return arrObj[0]
}

export const judgeType = (obj) => {
  let a = Object.prototype.toString.call(obj)
  console.log(a)
}

export const countDown = (data) => {
  // 间隔时间毫秒转成秒
  // var remTime = (data - new Date()) / 1000;
  let remTime = Number(data);
  if (remTime <= 0) { return '00:00:00'; }
  // 满足一天及天数加1 不满足则为余数 所以直接除一天有多少秒即可
  // var days = parseInt(remTime / 60 / 60 / 24);
  // 先算出剩余时间有多少小时，这些小时有多少个24小时 不满24小时的及为剩余多少小时
  let hour = parseInt((remTime / 60 / 60) % 24, 2);
  // 换算 多少分钟 满足60分的为小时数 不满60分的及为剩余分钟数
  let min = parseInt((remTime / 60) % 60, 2);
  // 满足60秒的为分钟数 不满60秒的及为剩余秒数
  let sec = parseInt(remTime % 60, 2);
  hour = hour < 10 ? '0' + hour : hour
  min = min < 10 ? '0' + min : min
  sec = sec < 10 ? '0' + sec : sec
  return `${hour}:${min}:${sec}`;
}

export const typeText = data => {
  let array = /^(.+)\|(.+)\(([\u4e00-\u9fa5]+)\)$/.exec(data);

  return array || [];
}

export const typeRate = data => {
  if (Array.isArray(data)) {
    return data.map(item => {
      switch (item.rarityName || item.rarity) {
        case "隐秘":
        case "非凡":
        case "违禁":
          item.class = "sssr";
          break;
        case "保密":
          item.class = "ssr";
          break;
        case "受限":
          item.class = "sr";
          break;
        case "工业级":
        case "军规级":
          item.class = "r";
          break;
        case "消费级":
          item.class = "n";
          break;
      }
      if (item.inventoryState === 'processing') {
        item.active = true;
      } else {
        item.active = false;
      }
      if (new Date(item.timeCreate).getTime() > new Date().getTime()) {
        item.timeCreate = formatDate();
      }
      return item;
    });
  } else {
    switch (data.rarityName) {
      case "隐秘":
      case "非凡":
      case "违禁":
        data.class = "sssr";
        break;
      case "保密":
        data.class = "ssr";
        break;
      case "受限":
        data.class = "sr";
        break;
      case "工业级":
      case "军规级":
        data.class = "r";
        break;
      case "消费级":
        data.class = "n";
        break;
    }
    data.names = typeText(data.awardName);
    return data;
  }
}

export const rarityRate = data => {
  let string = JSON.stringify(data);
  string = string.replace(/隐秘|非凡|违禁/g, "sssr");
  string = string.replace(/保密/g, "ssr");
  string = string.replace(/受限/g, "sr");
  string = string.replace(/军规级|工业级/g, "r");
  string = string.replace(/消费级/g, "n");

  return JSON.parse(string)
}


// 倒计时
export const countDownS = data => {
  let indexTime = new Date();
  let netxTime = new Date(data);
  let s = Math.floor((netxTime - indexTime) / 1000);
  let day = Math.floor(s / 60 / 60 / 24);
  let hour = Math.floor(s / 60 / 60 % 24);
  let minute = Math.floor(s / 60 % 60);
  hour = hour < 10 ? '0' + hour : hour
  minute = minute < 10 ? '0' + minute : minute
  if (day > 0) {
    if (hour === '00') {
      return `${day}天`;
    } else {
      return `${day}天${hour}小时`;
    }
  } else {
    if (hour === '00') {
      return `${minute}分钟`;
    } else {
      return `${hour}小时`;
    }
  }
}


// 页面滚动到指定位置--edge\ie\safari\iso没有滚动效果
export const roll = data => {
  if (/^#.+$/.test(data)) {
    let element = document.querySelector(data);
    element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  } else {
    document.documentElement.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  }
}

export function formatFloat(num) {
  num = num.toFixed(3);
  num = num.substr(0, num.length - 1);
  return num;
}

// 价格换算
export const conversion = data => {
  return formatFloat(data);
}

// 取回Ids
export const Ids = data => {
  if (Array.isArray(data)) {
    let str = "?";
    data.forEach(item => {
      str += `ids=${item}&`;
    });
    return str;
  } else {
    return '';
  }

}

// 状态码提示过滤
export const msgToast = (data) => {
  switch (data) {
    case 0:
      return 'Steam机器人正在向您发送饰品';
    case 1:
      return '您已成功接受饰品,点此关闭';
    case 9:
      return '饰品报价已超时，Steam自动取消。请您重新进行兑换';
    case 10:
      return 'Steam机器人发送饰品成功，点击前往接受 >>';
    case 11:
      return '您已接受饰品，等待Steam确认中';
    case 12:
      return '您更改了报价，交易自动失效';
    case 13:
      return '您主动拒绝了饰品报价，请您重新进行兑换';
    case 500:
    case 604:
    case 715:
    case 725:
    case 728:
    case 732:
    case 733:
    case 734:
      return `Steam服务器错误，请联系客服处理(E${data})`;
    case 505:
      return `存入已成功，但Steam回应出错。请联系客服处理(E${data})`;
    case 600:
      return `您的Steam库存未公开,请点此公开库存后重试(E${data})`;
    case 601:
      return `您的账号无法交易，请参照取回教程绑定令牌后再试(E${data})`;
    case 602:
      return `您的交易Url错误，请点此重新设置后再试(E${data})`;
    case 603:
      return `您的交易Url已失效，请点此重新设置后再试(E${data})`;
    case 702:
    case 711:
    case 700:
    case 716:
    case 720:
    case 730:
    case 731:
    case 741:
      return `Steam服务器错误，请稍后再次取回(E${data})`;
    default:
      return `未知错误(E${data})`;
  }
}

export const formatDate = (obj = { string: 'YYYY-MM-DD hh:mm:ss', date: new Date() }) => {
  // {string,date}
  // 格式化日期对象
  // YYYY 2019
  // MM    11
  // DD    04
  // hh    10
  // mm    00
  // ss    00
  // YYYY-MM-DD hh:mm:ss 2019-11-04 10:00:00
  // YYYY-MM 2019-11
  // YYYY-MM-DD 2019-11-04
  // hh:mm:ss  10:00:00
  let { string, date } = obj;
  let year = date.getFullYear()
  let month = date.getMonth() + 1
  let day = date.getDate()
  let hour = date.getHours()
  let min = date.getMinutes()
  let sec = date.getSeconds()
  month = month < 10 ? '0' + month : month
  day = day < 10 ? '0' + day : day
  hour = hour < 10 ? '0' + hour : hour
  min = min < 10 ? '0' + min : min
  sec = sec < 10 ? '0' + sec : sec
  switch (string) {
    case 'YYYY':
      string = year;
      break;
    case 'MM':
      string = month;
      break;
    case 'DD':
      string = day;
      break;
    case 'hh':
      string = hour;
      break;
    case 'mm':
      string = min;
      break;
    case 'ss':
      string = sec;
      break;
    case 'YYYY-MM':
      string = `${year}-${month}`;
      break;
    case 'YYYY-MM-DD':
      string = `${year}-${month}-${day}`;
      break;
    case 'YYYY-MM-DD hh:mm:ss':
      string = `${year}-${month}-${day} ${hour}:${min}:${sec}`;
      break;

    default:
      string = `${year}-${month}-${day} ${hour}:${min}:${sec}`;
      break;
  }
  return string;
}

// 获取localStorage

const SAVE_LASTING = true

export const getItem = (key) => {
  let val = ""
  if (SAVE_LASTING) {
    val = localStorage.getItem(key)
  } else {
    val = sessionStorage.getItem(key)
  }
  return JSON.parse(val)
}

// 设置localStorage
export const setItem = (key, val) => {
  val = JSON.stringify(val)
  if (SAVE_LASTING) {
    val = localStorage.setItem(key, val)
  } else {
    val = sessionStorage.setItem(key, val)
  }
}

Array.prototype.remove = function(val) {
  let index = this.indexOf(val);
  if (index > -1) {
    this.splice(index, 1);
  }
}

export const msgAlert = (msg, vm) => {
  let duration
  if (msg.length > 15) {
    duration = 3000
  } else if (msg.length < 15 && msg.length > 4) {
    duration = parseInt(msg.length, 2) * 200
  } else {
    duration = 800
  }
  vm.$Message.config({
    top: 400,
    duration: duration
  });
}

export function formatMoney(num) {
  let money;
  if (typeof num === 'string') {
    money = num.replace(/([0-9]+\.[0-9]{2})[0-9]*/, '$1');
  } else {
    money = Number(num)
      .toFixed(2);
  }
  if (money == 'NaN') return '0.00';
  if (money.indexOf('.') == -1) {
    money = money + '.00';
  } else if (money.substr(-2, 1) == '.') {
    money = money + '0';
  }
  let now = money.replace(/(\d{1,3})(?=(\d{3})+(?:$|\D))/g, '$1,');
  return now;
}

export const validLogin = () => {
  let userInfo = getItem('userInfo')
  return userInfo
}

export const inArray = (arr, val, key) => {
  let flag = false
  for (let i = 0; i < arr.length; i++) {
    if (arr.key == val.key) {
      flag = true
    }
  }
  return flag
}

export function fixed (num, n) {
  /*
  * num 数字
  * n  保留几位小数
  * */
  num = Number(num)
  let i = parseInt(Math.ceil(num * Math.pow(10, n + 1)) / 10, 10)
  return i / Math.pow(10, n)
}

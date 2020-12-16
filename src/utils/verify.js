export const validPhone = (target) => {
  let message = ""
  let flag = false
  if (target == "") {
    message = '手机号不能为空'
    flag = false
  } else if (!/^1\d{10}$/.test(target)) {
    message = '请输入正确的手机号'
    flag = false
  } else {
    message = ''
    flag = true
  }
  return { msg: message, flag: flag }
}

export const validPassword = (target) => {
  let message = ''
  let flag = false
  if (target == '') {
    message = '密码不能为空'
    flag = false
  } else if (!/^[0-9a-zA-Z]{6,16}$/.test(target)) {
    message = '请输入6-16位数字或字母组合，不能为纯数字'
    flag = false
  } else {
    message = ''
    flag = true
  }
  return { msg: message, flag: flag }
}

export const validCaptcha = (target) => {
  let message = ''
  let flag = false
  if (target == '') {
    message = '验证码不能为空'
    let flag = false
  } else {
    message = ''
    flag = true
  }
  return { msg: message, flag: flag }
}

export const validIdentifyingCode = (target) => {
  let message = ''
  let flag = false
  if (target == '') {
    message = '密码不能为空'
    flag = false
  } else {
    message = ''
    flag = true
  }
  return { msg: message, flag: flag }
}

import { request, robot } from './ajax'
// 用户注册
export const sessionRegister = params => request.post(`/session/register`, params).then(res => res.data)
// 用户登录
export const sessionLogin = params => request.post(`/session/login`, params).then(res => res.data)
// 发送手机注册验证码
export const sendMobileCode = params => request.post(`/account/send_register_sms`, params).then(res => res.data)
// 获取图形验证码
export const getCaptcha = params => request.get(`/captcha?t=${params}`).then(res => res.data)
// 手机号注册
export const mobileRegisterApi = params => request.post(`/account/register_via_phone`, params).then(res => res.data)
// 发送登录验证码短信
export const sendMsmLogin = params => request.post(`/account/send_login_sms`, params).then(res => res.data)
// 用户短信登录
export const smsLogin = params => request.post(`/account/login_phone `, params).then(res => res.data)
// 发送绑定手机号验证码
export const sendBindPhoneCode = params => request.post(`/account/send_binding_sms`, params).then(res => res.data)
// 确认绑定手机号
export const sureBindPhone = params => request.post(`/account/set_phone`, params).then(res => res.data)
// 发送修改密码的手机验证码
export const sendResetCode = params => request.post(`/account/send_reset_sms`, params).then(res => res.data)
// 通过手机号修改密码
export const resetPhonePassword = params => request.post(`/account/reset_password_via_phone`, params).then(res => res.data)
// 重置密码
export const sessionUpdatePassword = params => request.post(`/session/update_password`, params).then(res => res.data)
// 获取用户登录信息
export const userInfo = params => request.get('/openid/user_info', { params: params }).then(res => res.data)
// 检查用户是否完成绑定Steam
export const checkSteam = params => request.post('/user/check_steam', params).then(res => res.data)
// 用户注销
export const logout = params => request.get('/user/logout', { params: params }).then(res => res.data)


// app -> personalCenter -> recharge
// 微信支付
export const wxPay = params => request.post('/recharge/pay', params).then(res => res.data)
// 验证微信支付是否成功
export const checkOrder = params => request.get('/user/check_order/' + params).then(res => res.data)
// 获取支付地址
export const rechargeQr = params => request.post(`/user/qr`, params).then(res => res.data)
// 钱包明细
export const userBalance = params => request.get(`/user/balance/${params.size}/${params.current}`).then(res => res.data)
// 绑定邀请码
export const promoterInvitation = params => request.post('/promoter/invitation', params).then(res => res.data)

// 支付渠道确认
export const payTypeGet = params => request.get('/recharge/recharge_view').then(res => res.data)

// app -> personalCenter
// 绑定url
export const userTradeUrl = params => request.post('user/trade_url', params).then(res => res.data)

// 检查余额
export const checkBalance = params => request.post('user/balance', params).then(res => res.data)

import { request, robot } from './ajax'

// 汰换合同
// 饰品材料
export const provideList = params => request.get(`/trade/my_items`, {params: params}).then(res => res.data)
// 目标材料
export const targetList = params => request.get(`/trade/tradeable_items`, {params: params}).then(res => res.data)
// 汰换
export const sureExchange = params => request.post('/trade', params).then(res => res.data)

// 兑换
// 获取可兑换的用户库存饰品列表
export const changeInventory = (params) => request.get(`/exchange/inventory`).then(res => res.data)
// 获取可兑换的目标饰品列表
export const changeTarget = (params) => request.get(`/exchange/items`, {params: params}).then(res => res.data)
// 兑换
export const change = params => request.post('/exchange', params).then(res => res.data)


// app -> home -> indexList
// 箱子内奖品展示
export const detail = params => request.get(`/case/detail/${params}`).then(res => res.data)
// 箱子抽取历史记录
export const history = params => request.get(`/case/history/${params}`).then(res => res.data)
// 开箱子
export const openCase = params => request.get(`/user/open_case/${params}`).then(res => res.data)
// 试玩
export const caseShot = params => request.get(`/case/shot/${params}`).then(res => res.data)
// 奖品折价
export const userDiscount = params => request.post('/user/discount', params).then(res => res.data)


// app-> home
// 主页箱子抽取历史记录
export const indexHistory = params => request.get(`/case/history`, { params: params }).then(res => res.data)

// app -> home -> index
// 箱子列表展示
export const boxList = params => request.get(`/case/list`, { params: params }).then(res => res.data)
// 福利列表展示
export const welfareList = params => request.get(`/welfare/list`, { params: params }).then(res => res.data)


// app -> personalCenter -> recaption
// 库存记录
export const inventory = params => request.get(`/user/inventory/${params.type}/${params.size}/${params.current}`).then(res => res.data)
// 取回饰品
export const userRedeem = params => request.post('/user/redeem', params).then(res => res.data)
// 补货申请
export const userReplenishment = params => request.post('/user/replenishment', params).then(res => res.data)
// 获取/清除取回状态
export const userRedeem_notice = params => request.post('/user/redeem_notice', params).then(res => res.data)

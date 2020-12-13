import ajax from './ajax'

const baseUrl = ''

// 登录
export const LOGIN = (url, data) => ajax(baseUrl + url, data, 'POST')
// 注册
export const REGISTER = (url, data) => ajax(baseUrl + url, data, 'POST')

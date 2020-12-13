import axios from 'axios'
import qs from 'qs'

export default function ajax (url, data = {}, type = 'GET', headers = {}, json = false) {
  return new Promise((resolve, reject) => {
    let promise
    // IE8/9支持跨域
    headers.withCredentials = true
    // 参数是否需要序列化
    if (json) {
      data = qs.stringify(data)
    }
    if (type === 'GET') {
      // 参数拼串
      let dataStr = ''
      Object.keys(data).forEach(key => {
        dataStr += key + data[key] + '&'
      })
      if (dataStr !== '') {
        url += '?' + dataStr.substring(0, dataStr.lastIndexOf('&'))
      }
      // 发送请求
      promise = axios.get(url, {headers})
    } else if (type === 'POST') {
      promise = axios.post(url, data, {headers})
    } else if (type === 'PUT') {
      promise = axios.put(url, data, {headers})
    } else if (type === 'DELETE') {
      promise = axios.delete(url, {params: data}, {headers})
    }
    promise.then(function (response) {
      resolve(response.data)
    }).catch(function (error) {
      resolve(error.response)
      // 失败了调用reject(error)
    })
  })
}

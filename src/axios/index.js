import axios from 'axios'
import store from '../store'

const apiUrl = process.env.NODE_ENV === 'production' ? 'http://aq.fangshaokj.com/app/admin' : 'http://aq.fangshaokj.com/app/admin'

// 请求拦截
axios.interceptors.request.use(
  function (config) {
    // 除了login页面 其余页面带上token
    // if (config.url.indexOf('login') === -1) {
    //   config.headers[`token`] = window.sessionStorage.token
    // }
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

// 响应拦截
axios.interceptors.response.use(
  function (res) {
    return res
  },
  function (error) {
    return Promise.reject(error)
  }
)

const serverApi = (url, data, succFoo, errorFoo) => {
  let obj = {
    code: 200,
    msg: store.getters.user.jti || '',
    data: data
  }
  axios({
    method: 'post',
    url: apiUrl + url,
    data: Object.assign({}, obj),
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    }
    // transformRequest: [
    //   function(data) {
    //     let ret = ''
    //     for (let it in data) {
    //       ret +=
    //         encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
    //     }
    //     return ret
    //   }
    // ]
  })
    .then(response => {
      succFoo(response.data)
    })
    .catch(error => {
      errorFoo(error)
    })
}

export default serverApi

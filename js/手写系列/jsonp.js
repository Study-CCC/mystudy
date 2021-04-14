const jsonp = (url, params, callbackName = 'callback') => {
  let str =''
  for (let key of params) {
      str += `${key}=${params[key]}&`
  }
  // 处理回调函数
  str += 'callback=' + callbackName
  let script = document.createElement('script')
  script.src = url + str;
  document.body.appendChild(script)
  return new Promise((resolve, reject) => {
    // 当请求发送了会执行这个函数，说明请求发送成功了
    window[callbackName] = (data) => {
      try {
        resolve(data)
      } catch (e) {
        reject(e)
      } finally {
        document.body.removeChild(script)
      }
    }
  })
}




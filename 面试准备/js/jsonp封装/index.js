const jsonp = (url, params, callbaackName) => {
  let str = ''
  for (let key of params) {
      str += `${key}=${params[key]}&`
  }
  url = url + '?' + str
  return new Promise((resolve,reject) => {
    let script = document.createElement('script')
    script.url = url
    document.body.appendChild(script)
    window[callbaackName] = (data) => {
      resolve(data)
      document.body.removeChild(script)
    }
  })
}
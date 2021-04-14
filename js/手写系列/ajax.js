function ajax(url, method, successCb, failCb) {
  let xhr = new XMLHttpRequest()
  xhr.open(method, url)
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      if (xhr.status >= 200 && xhr.status < 300) {
        successCb(xhr.responseText)
      } else {
        failCb(xhr)
      }
    }
  }
  xhr.send()
}
// 防抖: 在触发时间n秒后才执行时间，如果重新触发的话就以最新的时间来计算。
function debounce(fn, wait) {
  let timer = null;
  return function () {
    clearTimeout(timeout)
    let args = arguments
    timer = setTimeout(() => {
      fn(...args)
    },wait)
  }

// 节流: 在n秒内只能触发一次
  function throttle(fn, wait) {
    let timer = null;
    return function () {
      let args = arguments;
      if (!timer) {
        timer = setTimeout(() => {
          timer = null;
          fn(...args)
        },wait)
      }
    }
}
// 深浅拷贝是针对引用类型的，浅拷贝是对象引用的拷贝，深拷贝是对象值的拷贝
// 浅拷贝
const shallowCopy = (obj) => {
  if (typeof obj !== 'object') return obj;
  let newObj = obj instanceof Array ? [] : {}
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = obj[key]
    }
  }
  return newObj;
}

// 深拷贝
// 1. 递归
const deepCopy = (obj) => {
  if (typeof obj !== 'object') return obj;
  let newObj = obj instanceof Array ? [] : {}
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = typeof obj[key] === 'object' ? deepCopy(obj[key]) : obj[key]
    }
  }
  return newObj;
}
// 考虑循环引用
const perfectDeepCopy = (obj,map = new WeakMap()) => {
  if (typeof obj !== 'object') return obj;
  if (map.has(obj)) return map.get(obj);
  let newObj = obj instanceof Array ? [] : {}
  map.set(obj,newObj)
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = typeof obj[key] === 'object' ? deepCopy(obj[key]) : obj[key]
    }
  }
  return newObj;
}

// 2. json  存在循环引用会抛出异常,undefined和symbol会被忽略或者转化为null(在数组中)
JSON.parse(JSON.stringify(obj))

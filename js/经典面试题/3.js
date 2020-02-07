var a = {}
var b = { key: 'b' }
var c = { key: 'c' }
a[b] = 'b'       // a[b]中的b只能是字符串,被转化为[object Object]
a[c] = 'c'
console.log(a[b]);

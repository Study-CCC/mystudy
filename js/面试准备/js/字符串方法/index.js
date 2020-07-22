let str = 'abcdab'
// 1. charAt返回指定索引的值
str.charAt(1)  // b

// 2. charCodeAt返回指定索引的unicode编码
str.charCodeAt(2)

// 3. indexOf和lastIndexOf 一个是查找首次出现的索引，一个是查找最后一次出现的索引
str.indexOf('a')
str.lastIndexOf('a')

// 4. concat 拼接字符串
str.concat('123','ad')

// 5. match 在字符串中检索指定的值，找到一个或者多个正则表达式的字符，返回值是一个数组，匹配不到返回null
str.match(/a/g)

// 6. replace 在字符串中用某些字符去替换指定的字符或者用正则表达式去替换某些字符
str.replace('a',1)
str.replace(/a/g,1)

// 7. search 用于检索指定的字符串或者正则表达式匹配的字符串，无匹配则返回-1,匹配则返回第一个匹配的值
str.search('a')
str.search(/a/)

// 8. split 将字符串从某个字符位置分割成字符串数组，可以接受两个参数，第一个为切割参数或者正则，第二个为切割长度即数组至多有多长
str.split('c')

// 9. substr 用于提取从start下标开始的指定数目字符
str.substr(1)  //bcdad
str.substr(1,3) // bcd

// 10. substring 用于提取两个指定下标之间的字符串
str.substring(1) //bcdad
str.substring(1,3)  //bc

// 11. toUpperCase和toLowerCase用于字符串转化大小写
str.toUpperCase()
str.toLowerCase()

// 12.slice用于切割字符串片段 类似于substring作用
str.slice(2)

// 13. includes判断字符串是否包含参数字符串
str.includes('abc')

// 14. startsWith和endsWith用来确定字符串头部或者尾部是否包含参数字符串
str.startsWith('abc')
str.endsWith('abc')

//15. padStart和padEnd用于头部补全和尾部补全
str.padStart(10,'1')
str.padEnd(10,'1')

//16. 字符串遍历接口 for of
for(let code of str){
    console.log(code)
}
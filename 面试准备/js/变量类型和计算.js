typeof a    // undefined
typeof "aa" // string
typeof 11   // number
typeof true // boolean
typeof []   // object
typeof {}   // object
typeof null // object
typeof console.log  // function 
    
// typeof 原理
// 不同的对象在底层都表示的是二进制,在js中二进制前三位都为0的会被判断位objcet类型,
// null的二进制全为0,因此也被断定为 0


// 何时用===,何时用==
// === 为等同符, 当左右两边的类型不相等时直接返回false
// == 为等值符， 当左右两边的类型不相等时转化为相同类型再继续比较

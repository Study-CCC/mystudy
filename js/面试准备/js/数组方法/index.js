// 1. pop、push,push用于给数组尾部添加新元素，pop用于将数组尾部元素移除,改变原数组
{
    let arr = [1, 2, 3, 4]
    arr.push(5, 6)
    // console.log(arr);
    arr.pop()
    // console.log(arr);
}

//2. join,用于将数组中各个元素以join中字符连接,不改变原数组
{
    let arr = [1, 2, 3, 4]
    let str = arr.join('-')
    // console.log(str);
}

//3. shift、unshift,shift移除第一个元素，unshift移除最后一个元素,改变原数组
{
    let arr = [1, 2, 3, 4]
    arr.shift()
    // console.log(arr);
    arr.unshift(1, 2, 3, 4)
    // console.log(arr);
}

//4. reverse反转数组,改变原数组,可用此方法反转字符串
{
    let arr = [1, 2, 3, 4]
    arr.reverse()
    // console.log(arr);
}

{
    let str = "abcdef"
    str = str.split('').reverse().join('')
    // console.log(str)
}

//5. sort可用于排序数组,改变原数组
{
    let arr = [4, 2, 5, 1]
    arr.sort((a, b) => a - b)
    // console.log(arr);
}

//6. concat可用于合并数组或者将参数添加进数组中,可用于数组扁平化
{
    let arr = [1, 2, 3]
    let arr1 = 'a'
    let arr2 = [4, 5, 6]
    let arr3 = [7, 8, [9, 10]]
    arr = arr.concat(arr1, arr2, arr3)
    // console.log(arr);
}

//7. slice返回从原数组中指定开始的位置到结束位置所组成的数组，不会影响原数组,Array.prototype.slice.call()可以将类数组转化为数组
{
    let arr = [1, 2, 3, 4, 5, 6, 7]
    let arr1 = arr.slice(0, 5)
    let arr2 = arr.slice(2)
    let arr3 = arr.slice(-1)
    let arr4 = arr.slice(-4, -1)
    // console.log(arr2);
}

//8. splice,可以用于数组的插入，删除，替换,会影响原数组
// splice(index,num,item1....itemX)
// index: 从第几项开始,若只存在这个则返回0到index项
// num删除几项
// item为替换元素
{
    let arr = [1, 2, 3, 4, 5, 6, 7, 8]
    // arr.splice(1,2)   // 删除2,3
    // arr.splice(1)    //获取第0-1项
    // arr.splice(1,2,3,4) //将2,3替换成3,4
    arr.splice(2, 0, 1)   // 在2后面插入1
    // console.log(arr);
}

//9. indexOf和lastIndexOf用于查找,lastIndexOf从尾项开始查找,未找到则返回-1
// 可接受两个参数,第一个查找的项,第二个从第几个开始查找
{
    let arr = [1, 2, 4, 5, 6, 5, 4, 6]
    let index = arr.indexOf(4, 3)
    let index1 = arr.lastIndexOf(4)
    // console.log(index1);
}

//10. forEach对数组进行遍历,对数组的每一项运行给定函数,没有返回值
{
    let arr = [1, 2, 3, 4, 5, 6, 7]
    // arr.forEach(item=>console.log(item))
}

//11. map对数组每一项运行给定函数,可以有返回值,返回值组成一个新的数组,不影响原数组
{
    let arr = [1, 2, 3, 4]
    let arr1 = arr.map(item => {
        return item + 1
    })
    // console.log(arr1);
}

//12. filter对数组每一项运行给定函数,返回满足标准的数组,不影响原数组
{
    let arr = [1,2,3,4]
    let arr1 = arr.filter(item=>{
        return item>2
    })
    // console.log(arr1)
}

// 13. every,some对判断数组是否满足条件,every当全部符合则返回true,some有一项符合就为true
{
    let arr = [1,2,3,4,5]
    let val = arr.every(item=>{
        return item>4
    })
    let val1 = arr.some(item=>{
        return item>4
    })
    // console.log(val1);
}

//14. reduce和reduceRight都是迭代数组的所有项,返回一个最终返回的值
// reduce(function(prev,cur,index,arr){},init)
// prev为上次返回的值,若是第一次循环则为第一项,cur当前项,index索引,使用reduce的数组,init初始值,若存在则一开始prev就为init
// 用于求和,求积
{
    let arr = [1,2,3,4]
    let sum = arr.reduce((prev,cur)=>{
        return prev+cur
    })
    // console.log(sum)
}
// 用于计算每个元素出现次数
{
    let arr = ['a','b','c','d','a','v','b']
    let obj = arr.reduce((prev,cur)=>{
        if(cur in prev){
            prev[cur]++;
        }else{
            prev[cur]=1
        }
        return prev
    },{})
    // console.log(obj);
}
// 去重
{
    let arr = ['a','b','c','a']
    let newArr = arr.reduce((prev,cur)=>{
        if(!prev.includes(cur)){
            prev.push(cur)
        }
        return prev
    },[])
    // console.log(newArr);
}
// 数组扁平化
{
    let arr = [1,2,3,[1,2],[3,4,[5,6]]]
    let newArr = function(arr){
        return arr.reduce((prev,cur)=>prev.concat(Array.isArray(cur)?newArr(cur):cur),[])
    }
    // console.log(newArr(arr))
}
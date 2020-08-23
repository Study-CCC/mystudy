let ATTRS = 'ATTRS'
let REPLACE = 'REPLACE'
let TEXT = 'TEXT'
let REMOVE = 'REMOVE'
let Index = 0
function diff(oldTree,newTree){
    let patches = {}
    let index = 0;
    walk(oldTree,newTree,index,patches)
    return patches;
}
function isString(node){
    return Object.prototype.toString.call(node) == '[object String]'
}
function diffChildren(oldChildren,newChildren,index,patches){
  oldChildren.forEach((child,idx)=>{
      walk(child,newChildren[idx],++Index,patches)
  })
}
// 遍历节点差异
function  walk(oldNode,newNode,index,patches){
    let currentPath = []
    if(!newNode) {
        currentPath.push({type:REMOVE,index})
    }
    else if(isString(oldNode)&&isString(newNode)){
        if(oldNode!==newNode){
            currentPath.push({type:TEXT,text:newNode})
        }
    }
    else if(oldNode.type==newNode.type){
        // 比较属性
        let attrs = diffAttr(oldNode.props,newNode.props)
        if(Object.keys(attrs).length>0){
            currentPath.push({type:ATTRS,attrs})
        }
        // 如果有子节点，遍历
        diffChildren(oldNode.child,newNode.child,index,patches)
    } else{
        // 说明节点被替换
        currentPath.push({type:REPLACE,newNode})
    }
    if(currentPath.length>0){
        patches[index] = currentPath
    }
}
function diffAttr(oldAttrs,newAttrs){
    let patch = {}
    for(let key in oldAttrs){
        if(oldAttrs[key]!==newAttrs[key]){
            patch[key] = newAttrs[key]
        }
    }
    for(let key in newAttrs){
        if(!oldAttrs.hasOwnProperty(key)){
            patch[key] = newAttrs[key]
        }
    }
    return patch
}
// 属性变化 ATTRS 文本变化 TEXT 节点变化 REPLACE 不存在 REMOVE
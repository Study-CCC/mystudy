class Element{
    constructor(type,props,child){
        this.type=type
        this.props = props
        this.child = child
    }
}
function createElement(el,props,child){
    return new Element(el,props,child)
}
function setAttr(el,key,value){
    switch (key) {
        case 'value':
            el.value = value
            break;
        case 'style':
            el.style.cssText = value
            break;
        default:
            el.setAttribute(key,value)
            break;
    }
}
function render(el){
    let elObj = document.createElement(el.type)
    for(let key in el.props){
        setAttr(elObj,key,el.props[key])
    }
    for(let child of el.child){
      let childEle =  (child instanceof Element)?render(child):document.createTextNode(child)
      elObj.appendChild(childEle)
    }
    return elObj;
}
function renderDom(el,target){
    target.appendChild(el)
}
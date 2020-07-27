水平居中方法:
    行内元素:
        1. text-align:center
        2. display:flex; justify-content:center;
    块级元素:
        1. margin:0 auto;
        2. display:flex; justify-content:center;
        3. position:relative;  left:50%; transform:translateX(-50%)
垂直居中方法:
    行内元素:
        1. 设置line-height和父元素高度相等
        2. 设置流动布局,设置align-item:middle
        3. vertical-align: middle;
    块级元素:
        1. display:flex; align-item:middle
        2. position:relation; top:50%; transform:translateY(-50%)
水平垂直居中方法:
    行内元素:
        1. 流动布局，设置justify-content: center; align-items: center;
        2. text-align:center; line-height和父元素高度相等
    块级元素:
        1. 使用浮动布局,给父元素设置relative,给子元素设置absolute,然后设置top:0;left:0;right:0;bottom:0;margin:auto
            或top:50%;left:50%;transform:translate(-50%,-50%)
        2. 流动布局，设置justify-content: center; align-items: center;
BFC直译为'块级格式化上下文',是一个独立的渲染区域,里面的元素只有block-level,里面的布局与外界毫不想干。
根元素body也是一个BFC
BFC有以下几个布局特点:
    1. 元素沿着BFC区域垂直排布，且垂直距离仅受margin影响，同一bfc的两个相邻box的margin会发生重叠
    2. BFC是一个独立的区域,不受外界布局的影响
    3. 在bfc中每个元素的margin box的左边都会与包含块的左边相接触,可以利用这种特性做两栏自适应的布局
    4. BFC中元素不会与float重叠
    5. 计算BFC的高度时，浮动元素也参与计算

如何开启BFC：
    1. 当position不为static和relative时
    2. 当float不为none时
    3. overflow不是visible
    4. display为inline-block、flex、table-cell

BFC作用: 1. 避免margin重叠

         2. 清除浮动造成的父元素塌陷

         3. 两栏自适应布局

Redux 三个坑
1. store必须是唯一的,多个store是坚决不允许的, 只能有一个store空间
2. 只有store能改变直接的内容,reducer不能改变
3. Reducer只能是纯函数
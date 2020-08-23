function rangeBitwiseAnd(m, n) {
    var shift = 0;
    // 找到公共前缀
    while (m < n) {
        m >>= 1;
        n >>= 1;
        ++shift;
    }
    return m << shift;
}
;

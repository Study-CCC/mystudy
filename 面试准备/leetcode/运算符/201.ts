function rangeBitwiseAnd(m: number, n: number): number {
    let shift:number = 0;
    // 找到公共前缀
    while (m < n) {
        m >>= 1;
        n >>= 1;
        ++shift;
    }
    return m << shift;
};

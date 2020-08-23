function rangeBitwiseAnd(m, n) {
    var common = 2;
    var res = m & n;
    var date = 0;
    while (res / common > 2) {
        common = common * 2;
    }
    common = common / 2;
    while (res / common > 2) {
        date += common;
        res = res - common;
        common = common / 2;
    }
    return date;
}
;
console.log(rangeBitwiseAnd(5, 7));

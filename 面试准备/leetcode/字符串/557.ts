function reverseWords(s: string): string {
    let str:string = s.split(' ').map(item=>item.split('').reverse().join('')).join(' ')
    return str
};
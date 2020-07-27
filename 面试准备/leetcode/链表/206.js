function ListNOde(val) {
    this.val = val
    this.next = null
}
// 迭代
var reverseList = function (head) {
    if(!head||!head.next){
        return head
    }    
    let pre = null;
    let current = head
    while(current){
        let a = current.next
        current.next = pre
        pre = current
        current = a
    }
    return pre
};
// 递归
// var reverseList1 = function(head){
//     if(!head||!head.next){
//         return head;
//     }
//     let newList = reverseList1(head.next)
//     newList.next.next = head
// }
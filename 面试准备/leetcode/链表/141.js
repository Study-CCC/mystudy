// 设置空对象
let tempLink = {};

// 设置循环链表
let cycleLink = {
  val: 2,
  next: {
    val: 0,
    next: {
      val: 4,
      next: tempLink, // 最后指向空对象
    },
  },
};

// 空对象指向循环链表，使链表变成真的环
tempLink.next = cycleLink;

// 设置其他节点，接着循环链表
const link = {
  val: 3,
  next: cycleLink,
};

var mergeTwoLists = function(l1, l2) {
  if (l1 === null) return l2;
  if (l2 === null) return l1;
  let l3 = new ListNode();
  // result 表示指针在头部
  let result = l3;
  while (l1 && l2) {
      if (l1.val < l2.val) {
          l3.next = l1;
          l1 = l1.next;
      } else {
          l3.next = l2
          l2 = l2.next;
      }
      l3 = l3.next;
  }
  if (l1) l3.next = l1;
  if (l2) l3.next = l2;
  // result = [0,1,1,2,3,4,4]
  // l3最初指向一个空节点
  return result.next;
};
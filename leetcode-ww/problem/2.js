/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 * 这道题目是一道比较基础的链表方面的题目, 解题思路就是建立一个新链表, 然后把输入的两个链表从头往后撸, 每两个相加, 
 * 添加一个新节点到新链表后面。为了避免两个输入链表同时为空，我们建立一个 dummyHead 结点，将两个结点相加生成的新
 * 结点按顺序加到 dummyHead 结点之后，由于 dummyHead 结点本身不能变，所以我们用一个指针 cur 来指向新链表的最后一
 * 个结点。可以开始让两个链表相加了，这道题好就好在最低位在链表的开头，所以我们可以在遍历链表的同时按从低到高的顺序
 * 直接相加。while 循环的条件两个链表中只要有一个不为空就行，由于链表可能为空，所以我们在取当前结点值的时候，先判断
 * 一下，若为空则取 0，否则取结点值。然后把两个结点值相加，同时还要加上进位 carry。然后更新 carry，直接 sum/10 即可，
 * 然后以 sum % 10 为值建立一个新结点，连到 cur 后面，然后 cur 移动到下一个结点。之后再更新两个结点，若存在，则指向下
 * 一个位置。while 循环退出之后，最高位的进位问题要最后特殊处理一下，若 carry 为 1，则再建一个值为 1 的结点，代码如下：
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  // 创建虚拟头节点
  let dummyHead = new ListNode(-1);
  // 将虚拟头结点赋值被cur 之后这个cur会不断地向后移动 
  let cur = dummyHead;
  // 总和
  let sum = 0;
  // 进位
  let carry = 0;
  // 这里使用或运算符, 因为两个链表的长度可能会不一样 
  while (l1 || l2) {
    // 首先sum就是两个节点的值添加上进制
    sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
    // 进位 很显然 如果sum 大于10 说明进制为1 否则为 0
    carry = sum >= 10 ? 1 : 0
    // 新的链表的下一个节点: 和对10取余
    cur.next = new ListNode(sum % 10);
    // 将cur移动到下一个节点
    cur = cur.next;
    // l1 和 l2 都存在的情况下 也都往后面移动
    l1 && (l1 = l1.next);
    l2 && (l2 = l2.next);
  }
  // 如果最后两个数相加完毕之后还有可能 
  carry && (cur.next = new ListNode(carry));
  // 最后将新链表的头结点返回出去就行
  return dummyHead.next;
};  
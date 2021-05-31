/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
// 双指针：两个指针相距n个距离
var removeNthFromEnd = function(head, n) {
  let index = 0
  let dummy = new ListNode(-1)
  dummy.next = head
  let pre = dummy
  let aft = dummy
  while(index < n){
    if (pre === null){
      break
    }
    pre = pre.next
    index++
  }
  if (index < n) return null

  while (pre.next !== null) {
    pre = pre.next
    aft = aft.next
  }
  aft.next = aft.next.next
  return dummy.next
};
// @lc code=end


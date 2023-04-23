/*
 * @lc app=leetcode.cn id=82 lang=javascript
 *
 * [82] 删除排序链表中的重复元素 II
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
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  if (!head) return null
  let dummy = new ListNode(head.val - 1, head)
  let pre = dummy, cur = head, next = null
  while (cur) {
    next = cur.next
    while (next) {
      if (next.val === cur.val) {
        next = next.next
      } else {
        break
      }
    }
    if (next === cur.next) {
      pre = cur
      cur = next
    } else {
      pre.next = next
      cur = next
    }
  }
  return dummy.next
};
// @lc code=end


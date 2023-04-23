/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
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
  let cur = head
  while (cur) {
    let next = cur.next
    while (next) {
      if (next.val === cur.val){
        next = next.next
      } else {
        break
      }
    }
    cur.next = next
    cur = next
  }
  return head
};
// @lc code=end


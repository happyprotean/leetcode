/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
 */
import { List, ListNode } from './data_structure/list.js'

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
var removeNthFromEnd = function (head, n) {
  let dummy = new ListNode(-1, head)
  let fast = dummy, slow = dummy
  for (let i = 0; i < n; i++) {
    fast = fast.next
  }
  while (fast.next) {
    slow = slow.next
    fast = fast.next
  }
  // slow此时指向倒数第n+1个节点
  slow.next = slow.next.next
  return dummy.next
}
// @lc code=end

const list = new List([1, 2])
const res = removeNthFromEnd(list.getHead(), 2)
console.log('res', res)

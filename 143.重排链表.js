/*
 * @lc app=leetcode.cn id=143 lang=javascript
 *
 * [143] 重排链表
 */
import { List, printList } from './utils/list.js'

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
 * @return {void} Do not return anything, modify head in-place instead.
 */

function midList(head) {
  let slow = head, fast = head
  while(fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
  }
  return slow
}

function reverseList(head) {
  let pre = null, cur = head, next = null
  while (cur) {
    next = cur.next
    cur.next = pre
    pre = cur
    cur = next
  }
  return pre
}

var reorderList = function(head) {
  if (!head || !head.next) return head
  const midNode = midList(head) // 获取中间节点
  const head2 = reverseList(midNode) // 链表后半段反转

  let first = head, second = head2, first_next = null, second_next = null
  while (second.next) {
    first_next = first.next
    second_next = second.next
    first.next = second
    second.next = first_next
    first = first_next
    second = second_next
  }
  return head
};

// @lc code=end

const list = new List([1, 2, 3])
printList(list)
const res = reverseList(list.getHead())
printList(res)
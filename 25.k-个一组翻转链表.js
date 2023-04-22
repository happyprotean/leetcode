/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
 */

import { List, ListNode } from "./data_structure/list.js";

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
 * @param {number} k
 * @return {ListNode}
 */

function getListLength(head) {
  if (!head) return 0
  let length = 0
  while (head) {
    length++
    head = head.next
  }
  return length
}

var reverseKGroup = function(head, k) {
  let dummy = new ListNode(-1, head), p0 = dummy
  const length = getListLength(head)
  const n = Math.floor(length / k) 
  for (let i = 0; i < n; i++) {
    let cur = p0.next, pre = null, next = null
    // k个一组翻转链表
    for (let j = 0; j < k; j++) {
      next = cur.next
      cur.next = pre
      pre = cur
      cur = next 
    }
    const tmp = p0.next // 保存p0的下一个位置
    p0.next.next = cur 
    p0.next = pre
    p0 = tmp // 更新p0
  }
  return dummy.next
};
// @lc code=end

// const list = new List([1,2])
// const res = reverseKGroup(list.getHead(), 2)
// console.log('res', res)

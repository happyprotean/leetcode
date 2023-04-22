/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
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
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */

function getListLength(head) {
  let length = 0
  while(head) {
    length++
    head = head.next
  }
  return length
}

var reverseBetween = function(head, left, right) {
  let dummy = new ListNode(-1)
  dummy.next = head
  let nodeBeforeLeft = dummy
  // 找到整数left对应的前一个节点
  for (let i = 0; i < left - 1; i++) {
    nodeBeforeLeft = nodeBeforeLeft.next
  }

  // 反转left到right部分的链表
  let pre = null, next = null, cur = nodeBeforeLeft.next
  for (let i = 0; i < right - left + 1; i++) {
    next = cur.next
    cur.next = pre
    pre = cur
    cur = next
  }

  // 反转后的链表部分接入到原链表
  nodeBeforeLeft.next.next = cur
  nodeBeforeLeft.next = pre

  return dummy.next
};
// @lc code=end


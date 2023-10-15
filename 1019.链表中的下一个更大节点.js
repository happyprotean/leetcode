/*
 * @lc app=leetcode.cn id=1019 lang=javascript
 *
 * [1019] 链表中的下一个更大节点
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
 * @return {number[]}
 */
var nextLargerNodes = function(head) {
  if (!head) return []
  let cur = new ListNode(-1, head)
  const res = []
  const stack = []
  let id = 0
  while (cur.next) {
    const val = cur.next.val
    while (stack.length && val > stack[0].val) {
      const node = stack.shift()
      res[node.index] = val
    }
    cur.next.index = id
    stack.unshift(cur.next)
    cur = cur.next
    id++
  }
  while(stack.length) {
    const node = stack.shift()
    res[node.index] = 0
  }
  return res
};
// @lc code=end


/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let carry = 0
  let dummy = new ListNode(-1)
  let res = dummy
  while (l1 && l2){
    let curSum = l1.val + l2.val
    curSum = (carry > 0) ? curSum + carry : curSum
    carry = Math.floor(curSum / 10)
    curSum = curSum % 10
    let node = new ListNode(curSum)
    res.next = node
    res = res.next
    l1 = l1.next
    l2 = l2.next
  }
  while (l1){
    let curSum = (carry > 0) ? l1.val + carry : l1.val
    carry = Math.floor(curSum / 10)
    curSum = curSum % 10
    let node = new ListNode(curSum)
    res.next = node
    res = res.next
    l1 = l1.next
  }
  while (l2){
    let curSum = (carry > 0) ? l2.val + carry : l2.val
    carry = Math.floor(curSum / 10)
    curSum = curSum % 10
    let node = new ListNode(curSum)
    res.next = node
    res = res.next
    l2 = l2.next
  }
  while (carry){
    let node = new ListNode(carry % 10)
    res.next = node
    res = res.next
    carry = Math.floor(carry / 10)
  }
  return dummy.next
};
// @lc code=end


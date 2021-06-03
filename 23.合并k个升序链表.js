/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个升序链表
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  if (lists.length === 0) return null
  if (lists.length === 1) return lists[0]
  lists = lists.filter(node => {
    return node
  })
  let dummy = new ListNode(-1)
  let cur = dummy
  while(lists.length > 0) {
    let index = 0
    let minNode = new ListNode(-1)
    for (let i = 0; i < lists.length; i++){
      if (i === 0 || lists[i].val < minNode.val){
        minNode = lists[i]
        index = i
      }
    }
    cur.next = minNode
    cur = cur.next
    lists[index] = lists[index].next
    if (!lists[index]){
      lists.splice(index, 1)
    }
  }
  return dummy.next
};
// @lc code=end


/*
 * @lc app=leetcode.cn id=117 lang=javascript
 *
 * [117] 填充每个节点的下一个右侧节点指针 II
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
// https://leetcode-cn.com/problems/populating-next-right-pointers-in-each-node-ii/solution/bfsjie-jue-zui-hao-de-ji-bai-liao-100de-yong-hu-by/
// 在访问当前层时，提前将下一层的next指针串联
// 便于分析，每一层前新建一个dummy node
var connect = function(root) {
  if (root === null) return null
  let cur = root
  while (cur) {
    let dummy = new Node(0)
    let pre = dummy
    while (cur) {
      if (cur.left) {
        pre.next = cur.left
        pre = pre.next
      }
      if (cur.right) {
        pre.next = cur.right
        pre = pre.next
      }
      cur = cur.next
    }
    cur = dummy.next
  }
  return root
};
// @lc code=end


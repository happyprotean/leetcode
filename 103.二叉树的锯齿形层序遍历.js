/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  const res = [],
    nodes = []
  if (root) nodes.push(root)
  let flag = false
  while (nodes.length) {
    const cur = [],
      length = nodes.length
    for (let i = 0; i < length; i++) {
      const node = nodes.shift()
      cur.push(node.val)
      if (node.left)  nodes.push(node.left)
      if (node.right) nodes.push(node.right)
    }
    if (flag) cur.reverse()
    flag = !flag
    res.push(cur)
  }
  return res
}
// @lc code=end

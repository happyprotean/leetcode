/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
var levelOrder = function(root) {
  const res = [], nodes = []
  if (root) nodes.push(root)
  while (nodes.length) {
    const cur = []
    const length = nodes.length
    for (let i = 0; i < length; i++) {
      const node = nodes.shift()
      cur.push(node.val)
      if (node.left) nodes.push(node.left)
      if (node.right) nodes.push(node.right)
    }
    res.push(cur)
  }
  return res
};
// @lc code=end


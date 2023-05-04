/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
 * @return {number}
 */
var maxDepth = function(root) {
  let res = 0
  const help = (node, depth) => {
    if (!node) {
      res = Math.max(res, depth)
      return
    }
    help(node.left, depth + 1)
    help(node.right, depth + 1)
  }
  help(root, 0)
  return res
};
// @lc code=end


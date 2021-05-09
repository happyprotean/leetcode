/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
  const dfs = (node, val) => {
    if (node === null) return false
    val += node.val
    if (node.left || node.right) {
      return dfs(node.left, val) || dfs(node.right, val)
    } else {
      return val === targetSum
    }
  }
  return dfs(root, 0)
};
// @lc code=end


/*
 * @lc app=leetcode.cn id=199 lang=javascript
 *
 * [199] 二叉树的右视图
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
 * @return {number[]}
 */
var rightSideView = function(root) {
  const cache = new Map()
  const help = (node, depth) => {
    if (!node) return
    if (!cache.has(depth)) {
      cache.set(depth, node)
    }
    help(node.right, depth + 1)
    help(node.left, depth + 1)
  }
  help(root, 0)
  return Array.from(cache.values()).map(node => node.val)
};
// @lc code=end


/*
 * @lc app=leetcode.cn id=114 lang=javascript
 *
 * [114] 二叉树展开为链表
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
  if (root === null) return
  if (root.left) flatten(root.left)
  if (root.right) flatten(root.right)

  if (root.left) {
    let node = root.left
    while (node.right) {
      node = node.right
    }
    node.right = root.right
    root.right = root.left
    root.left = null
  }
};
// @lc code=end


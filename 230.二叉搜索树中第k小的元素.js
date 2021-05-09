/*
 * @lc app=leetcode.cn id=230 lang=javascript
 *
 * [230] 二叉搜索树中第K小的元素
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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
  if (root === null) return -1

  let result, index = 0
  const dfs = (node) => {
    if (node === null) return
    dfs(node.left)
    index ++
    if ( index === k){
      result = node.val
      return
    }
    dfs(node.right)
  }
  dfs(root)
  return result
};
// @lc code=end


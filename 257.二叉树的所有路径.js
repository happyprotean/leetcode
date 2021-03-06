/*
 * @lc app=leetcode.cn id=257 lang=javascript
 *
 * [257] 二叉树的所有路径
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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  if (root === null) return []
  let result = []
  const dfs = (node, path) => {
    if (node === null) return
    if (node.left === null && node.right === null){
      path = path + node.val
      result.push(path)
      return
    }
    path = path + node.val + '->'
    dfs(node.left, path)
    dfs(node.right, path)
  }
  dfs(root, '')
  return result
};
// @lc code=end


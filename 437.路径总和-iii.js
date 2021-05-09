/*
 * @lc app=leetcode.cn id=437 lang=javascript
 *
 * [437] 路径总和 III
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
 * @return {number}
 */
var pathSum = function(root, targetSum) {
  if (root === null) return 0

  let result = 0
  const oneNode = (node, sum) => {
    if (node === null) return 
    sum += node.val
    if (sum === targetSum){
      result += 1
    }
    oneNode(node.left, sum)
    oneNode(node.right, sum)
  }

  const dfs = node => {
    if (node === null) return
    oneNode(node, 0)
    dfs(node.left)
    dfs(node.right)
  }
  dfs(root)

  return result
};
// @lc code=end


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
  if (root === null) return []

  let result = []
  const dfs = (node, depth) => {
    if (node === null) return
    
    if (depth === result.length){
      result.push(node.val)
    }
    depth++
    dfs(node.right, depth)
    dfs(node.left, depth)
  }
  dfs(root, 0)
  return result
};
// @lc code=end


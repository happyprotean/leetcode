/*
 * @lc app=leetcode.cn id=113 lang=javascript
 *
 * [113] 路径总和 II
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
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
  let res = []
  const dfs = (node, total, nums) => {
    if (node === null) return
    total += node.val
    nums.push(node.val)
    if (node.left || node.right) {
      node.left && dfs(node.left, total, nums.slice())
      node.right && dfs(node.right, total, nums.slice())
    } else if (total === targetSum){
      res.push(nums)
    }
  }
  dfs(root, 0, [])
  return res
};

// 我的实现
// var pathSum = function(root, targetSum) {
//   if (root === null) return []

//   var res = []
//   const dfs = (root, targetSum, nums) => {
//     if (root === null) return
//     nums.push(root.val)
//     if (root.left || root.right) {
//       root.left && dfs(root.left, targetSum - root.val, nums.slice())
//       root.right && dfs(root.right, targetSum - root.val, nums.slice())
//     } else if (root.val === targetSum) {
//       res.push(nums)
//     }
//   }
//   dfs(root, targetSum, [])
//   return res
// };
// @lc code=end


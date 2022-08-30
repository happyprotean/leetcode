/*
 * @lc app=leetcode.cn id=654 lang=javascript
 *
 * [654] 最大二叉树
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {
  let findMaxIndex = arr => {
    const maxValue = Math.max(...arr)
    return arr.findIndex(value => value === maxValue)
  }

  if (nums.length === 0) return null
  const index = findMaxIndex(nums)
  let root = new TreeNode(nums[index])
  root.left = index > 0 ? constructMaximumBinaryTree(nums.slice(0, index)) : null
  root.right = index < nums.length - 1 ? constructMaximumBinaryTree(nums.slice(index + 1, nums.length)) : null
  return root
};
// @lc code=end


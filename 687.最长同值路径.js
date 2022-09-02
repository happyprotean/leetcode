/*
 * @lc app=leetcode.cn id=687 lang=javascript
 *
 * [687] 最长同值路径
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
var longestUnivaluePath = function(root) {
  let max = 0
  // dfs为以root为起点，往下走能达到的最长单边路径
  let dfs = root => {
    if (!root) return 0
    let ans = 0, cur = 0, l = dfs(root.left), r = dfs(root.right)
    if (root.left && root.left.val === root.val) {
      ans = l + 1
      cur += l + 1
    }
    if (root.right && root.right.val === root.val) {
      ans = Math.max(ans, r + 1)
      cur += r + 1
    }
    max = Math.max(max, cur)
    return ans
  }
  dfs(root)
  return max
};

// @lc code=end


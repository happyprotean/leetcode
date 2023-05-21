/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  // 避免i-2下标小于0
  // memo数组初始值为0
  const memo = new Array(nums.length + 2).fill(0)
  for (let i = 0; i < nums.length; i++) {
    memo[i + 2] = Math.max(memo[i+1], memo[i] + nums[i])
  }
  return memo[memo.length - 1]
};
// @lc code=end


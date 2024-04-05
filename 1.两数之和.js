/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(nums, target) {
  let dp = {}
  for (let i = 0; i < nums.length; i++) {
    if(nums[dp[target - nums[i]]] === target - nums[i]) {
      return [i, dp[target - nums[i]]]
    }
    dp[nums[i]] = i
  }
};
// @lc code=end


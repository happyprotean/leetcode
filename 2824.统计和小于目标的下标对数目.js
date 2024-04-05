/*
 * @lc app=leetcode.cn id=2824 lang=javascript
 *
 * [2824] 统计和小于目标的下标对数目
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * [1, 2, 3, 4, 5, 6]
 * [-1, 1, 1, 2, 3]
 */
var countPairs = function(nums, target) {
  let res = 0
  nums.sort((a, b) => a - b)
  let left = 0, right = nums.length - 1
  while (left < right) {
    if (nums[left] + nums[right] < target) {
      res += (right - left)
      left++
    } else {
      right--
    }
  }
  return res
};
// let nums = [-1,1,2,3,1]
// countPairs(nums, 2)
// @lc code=end


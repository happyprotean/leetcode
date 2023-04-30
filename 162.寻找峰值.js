/*
 * @lc app=leetcode.cn id=162 lang=javascript
 *
 * [162] 寻找峰值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
  if (nums.length < 2) return 0
  let left = 0, right = nums.length - 2
  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    if (nums[mid] < nums[mid + 1]) {
      left = mid + 1
    } else {
      if (nums[mid] > nums[right]) {
        right = mid
      } else {
        right = mid - 1
      }
    }
  }
  return left === nums.length ? left - 1 : left
};
// @lc code=end


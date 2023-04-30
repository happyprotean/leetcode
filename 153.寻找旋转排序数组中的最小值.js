/*
 * @lc app=leetcode.cn id=153 lang=javascript
 *
 * [153] 寻找旋转排序数组中的最小值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  if (nums.length < 2) return nums[0]
  let left  = -1, right = nums.length - 1
  while (left + 1 < right) {
    const mid = Math.floor((left + right) / 2)
    if (nums[mid] > nums[nums.length - 1]) {
      left = mid
    } else {
      right = mid
    }
  }
  return nums[right]
};
// @lc code=end


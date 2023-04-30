/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function low_bound(nums, target) {
  let left = 0, right = nums.length - 1
  while (left <= right) { // [left, right]
    const mid = Math.floor(left + (right - left) / 2)
    if (nums[mid] < target) {
      left = mid + 1 // [mid + 1, right]
    } else {
      // num[mid] = target时，需要收缩右端点
      // 收缩左端点的话，会找不到下界，如[8, 8, 8, 8], target=8
      right = mid - 1 // [left, mid - 1]
    }
  }
  // 1. 数组中存在正常下界，此时left的位置为目标值的下界
  // 2. 数组元素均小于target，此时left为nums.length
  // 3. 数组元素均大于target，此时left为0
  return left
}

var searchRange = function(nums, target) {
  let start = low_bound(nums, target)
  if (start === nums.length || nums[start] > target) return [-1, -1]
  return [start, low_bound(nums, target + 1) - 1]
};
// @lc code=end

/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let res = []
  nums.sort((a, b) => a - b)
  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1,
      right = nums.length - 1
    /**
     * 第一个元素值相同，直接跳过
     * 最大元素相加仍然小于0 直接跳过
     * 最小元素相加仍然大于0 for循环结束
     */
    if (i > 0 && nums[i] === nums[i - 1]) continue
    if (nums[i] + nums[nums.length - 2] + nums[nums.length - 1] < 0) continue
    if (nums[i] + nums[i + 1] + nums[i + 2] > 0) break
    while (left < right) {
      if (nums[left] + nums[right] + nums[i] > 0) {
        right--
      } else if (nums[left] + nums[right] + nums[i] < 0) {
        left++
      } else {
        res.push([nums[i], nums[left], nums[right]])
        left += 1
        while (nums[left] === nums[left - 1]) {
          left++
        }
        right -= 1
        while (nums[right] === nums[right + 1]) {
          right--
        }
      }
    }
  }
  return res
}
// let nums = [-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6]
// threeSum(nums)
// @lc code=end
